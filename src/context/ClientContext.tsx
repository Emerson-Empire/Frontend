import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Client, Stage, ClientStatus, ApprovalRequest } from "../types/client";
import { NEXT_STATUS, DEFAULT_STATUS, requiresApproval } from "../types/client";

interface ClientContextType {
  clients: Client[];
  pendingApprovals: ApprovalRequest[];
  addClient: (client: Omit<Client, "id" | "createdAt" | "approvalHistory">) => void;
  requestStatusChange: (clientId: string, targetStatus?: ClientStatus) => boolean;
  approveStatusChange: (clientId: string) => void;
  rejectStatusChange: (clientId: string) => void;
  getNextStatus: (currentStatus: ClientStatus) => ClientStatus | Stage | null;
  getClientsByStage: (stage: Stage) => Client[];
  getClientsByStatus: (status: ClientStatus) => Client[];
  deleteClient: (clientId: string) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clients, setClients] = useState<Client[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "555-0101",
      serviceNeeded: "Tax Filing",
      stage: "lead",
      status: "qualified",
      createdAt: new Date(2025, 0, 15),
      notes: "Ready for consultation",
      approvalHistory: [],
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-0102",
      serviceNeeded: "Financial Planning",
      stage: "consultation",
      status: "proposal_sent",
      createdAt: new Date(2025, 0, 20),
      consultationDate: new Date(2025, 1, 1),
      proposalDate: new Date(2025, 1, 10),
      approvalHistory: [],
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "555-0103",
      serviceNeeded: "Insurance Policy",
      stage: "active",
      status: "in_progress",
      createdAt: new Date(2025, 1, 5),
      consultationDate: new Date(2025, 1, 15),
      proposalDate: new Date(2025, 1, 20),
      approvalHistory: [],
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "555-0104",
      serviceNeeded: "Tax Filing",
      stage: "lead",
      status: "new_lead",
      createdAt: new Date(2025, 2, 1),
      approvalHistory: [],
    },
  ]);

  const [pendingApprovals, setPendingApprovals] = useState<ApprovalRequest[]>([]);

  const getNextStatus = (currentStatus: ClientStatus): ClientStatus | Stage | null => {
    return NEXT_STATUS[currentStatus] || null;
  };

  const addClient = (
    clientData: Omit<Client, "id" | "createdAt" | "approvalHistory">
  ): void => {
    const newClient: Client = {
      ...clientData,
      id: Date.now().toString(),
      createdAt: new Date(),
      approvalHistory: [],
    };
    setClients((prev) => [newClient, ...prev]);
  };

  const requestStatusChange = (clientId: string, targetStatus?: ClientStatus): boolean => {
    const client = clients.find((c) => c.id === clientId);
    if (!client) return false;

    // Check if client already has pending approval
    if (client.pendingApproval) {
      console.warn("Client already has a pending approval");
      return false;
    }

    // Determine next status - use targetStatus if provided (for branching paths like qualified/not_qualified)
    const nextStatus = targetStatus || getNextStatus(client.status);
    if (!nextStatus) {
      console.warn("No valid next status for this client");
      return false;
    }

    // Check if this transition requires approval
    if (requiresApproval(client.status, nextStatus)) {
      // Create approval request for gatekeeping transitions
      const approval: ApprovalRequest = {
        clientId,
        currentStatus: client.status,
        requestedStatus: nextStatus,
        requestedAt: new Date(),
        approved: false,
      };

      // Add to pending approvals
      setPendingApprovals((prev) => [...prev, approval]);
      setClients((prev) =>
        prev.map((c) =>
          c.id === clientId ? { ...c, pendingApproval: approval } : c
        )
      );
    } else {
      // Immediately apply transition for routine sub-stage progressions
      setClients((prev) =>
        prev.map((c) => {
          if (c.id === clientId) {
            const updated = { ...c };

            // If moving to a new stage
            if (nextStatus === "consultation" || nextStatus === "active") {
              updated.stage = nextStatus;
              updated.status = DEFAULT_STATUS[nextStatus];
            } else {
              // Moving to next sub-status within same stage
              updated.status = nextStatus as ClientStatus;
            }

            // Record in approval history even though no approval needed
            const autoApproval: ApprovalRequest = {
              clientId,
              currentStatus: client.status,
              requestedStatus: nextStatus,
              requestedAt: new Date(),
              approved: true,
              approvedAt: new Date(),
            };
            updated.approvalHistory = [...updated.approvalHistory, autoApproval];

            // CASCADE: If just transitioned to proposal_sent, automatically move to active stage
            if (nextStatus === "proposal_sent") {
              updated.stage = "active";
              updated.status = DEFAULT_STATUS["active"];

              // Record the automatic stage transition in history
              const autoCascadeApproval: ApprovalRequest = {
                clientId,
                currentStatus: "proposal_sent",
                requestedStatus: "active",
                requestedAt: new Date(),
                approved: true,
                approvedAt: new Date(),
              };
              updated.approvalHistory = [...updated.approvalHistory, autoCascadeApproval];
            }

            return updated;
          }
          return c;
        })
      );
    }

    return true;
  };

  const approveStatusChange = (clientId: string): void => {
    const client = clients.find((c) => c.id === clientId);
    if (!client || !client.pendingApproval) return;

    const approval = client.pendingApproval;
    const nextStatus = approval.requestedStatus;

    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          const updated = { ...c };

          // If moving to a new stage (nextStatus is a Stage string)
          if (nextStatus === "consultation" || nextStatus === "active") {
            updated.stage = nextStatus;
            updated.status = DEFAULT_STATUS[nextStatus];
          } else {
            // Moving to next sub-status within same stage
            updated.status = nextStatus as ClientStatus;
          }

          // Mark approval as approved
          const approvedApproval: ApprovalRequest = {
            ...approval,
            approved: true,
            approvedAt: new Date(),
          };

          updated.approvalHistory = [...updated.approvalHistory, approvedApproval];
          updated.pendingApproval = undefined;

          // CASCADE: If qualified, automatically move to consultation stage
          if (nextStatus === "qualified") {
            updated.stage = "consultation";
            updated.status = DEFAULT_STATUS["consultation"];

            // Record the automatic stage transition in history
            const autoCascadeApproval: ApprovalRequest = {
              clientId,
              currentStatus: "qualified",
              requestedStatus: "consultation",
              requestedAt: new Date(),
              approved: true,
              approvedAt: new Date(),
            };
            updated.approvalHistory = [...updated.approvalHistory, autoCascadeApproval];
          }

          return updated;
        }
        return c;
      })
    );

    // Remove from pending
    setPendingApprovals((prev) =>
      prev.filter((a) => a.clientId !== clientId)
    );
  };

  const rejectStatusChange = (clientId: string): void => {
    const client = clients.find((c) => c.id === clientId);
    if (!client || !client.pendingApproval) return;

    // Remove pending approval
    setClients((prev) =>
      prev.map((c) =>
        c.id === clientId ? { ...c, pendingApproval: undefined } : c
      )
    );

    setPendingApprovals((prev) =>
      prev.filter((a) => a.clientId !== clientId)
    );
  };

  const getClientsByStage = (stage: Stage): Client[] => {
    return clients.filter((client) => client.stage === stage);
  };

  const getClientsByStatus = (status: ClientStatus): Client[] => {
    return clients.filter((client) => client.status === status);
  };

  const deleteClient = (clientId: string): void => {
    setClients((prev) => prev.filter((client) => client.id !== clientId));
    setPendingApprovals((prev) => prev.filter((a) => a.clientId !== clientId));
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        pendingApprovals,
        addClient,
        requestStatusChange,
        approveStatusChange,
        rejectStatusChange,
        getNextStatus,
        getClientsByStage,
        getClientsByStatus,
        deleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClients must be used within ClientProvider");
  }
  return context;
};
