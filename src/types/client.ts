// Lead Stage - 3 sub-stages (linear progression)
export type LeadStatus = "new_lead" | "contacted" | "qualified" | "not_qualified";

// Consultation Stage - 3 sub-stages (linear progression)
export type ConsultationStatus =
  | "consultation_scheduled"
  | "consultation_done"
  | "proposal_sent";

// Active Client Stage - ONLY 2 sub-stages (linear progression)
export type ActiveClientStatus = "in_progress" | "completed";

export type ClientStatus = LeadStatus | ConsultationStatus | ActiveClientStatus;

export type Stage = "lead" | "consultation" | "active";

// Strict linear progression map - only the NEXT valid status
export const NEXT_STATUS: Record<ClientStatus, ClientStatus | Stage | null> = {
  // Lead Stage progression
  "new_lead": "contacted",
  "contacted": "qualified",
  "qualified": "consultation", // moves to consultation stage
  "not_qualified": null, // end state
  // Consultation Stage progression
  "consultation_scheduled": "consultation_done",
  "consultation_done": "proposal_sent",
  "proposal_sent": "active", // moves to active stage
  // Active Client Stage progression
  "in_progress": "completed",
  "completed": null, // end state
};

// Default entry status for each stage
export const DEFAULT_STATUS: Record<Stage, ClientStatus> = {
  lead: "new_lead",
  consultation: "consultation_scheduled",
  active: "in_progress",
};

// Transitions that require admin approval
// ONLY the lead stage qualification decision requires approval
export const requiresApproval = (
  currentStatus: ClientStatus,
  nextStatus: ClientStatus | Stage
): boolean => {
  const approvalRequiredTransitions: Array<[ClientStatus, ClientStatus | Stage]> = [
    // Lead stage: decision points that determine if client can advance
    ["contacted", "qualified"],    // Qualifying decision - admin decides if qualified
    ["contacted", "not_qualified"], // Rejection decision - admin decides if not qualified
  ];

  return approvalRequiredTransitions.some(
    ([from, to]) => currentStatus === from && nextStatus === to
  );
};

// Approval request tracking
export interface ApprovalRequest {
  clientId: string;
  currentStatus: ClientStatus;
  requestedStatus: ClientStatus | Stage;
  requestedAt: Date;
  approved?: boolean;
  approvedAt?: Date;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  stage: Stage;
  status: ClientStatus;
  createdAt: Date;
  consultationDate?: Date;
  proposalDate?: Date;
  completionDate?: Date;
  notes?: string;
  // Approval tracking
  pendingApproval?: ApprovalRequest;
  approvalHistory: ApprovalRequest[];
}

export interface StageMetrics {
  stage: Stage;
  total: number;
  breakdown: Record<string, number>;
}
