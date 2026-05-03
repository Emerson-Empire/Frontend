import React, { useState } from "react";
import type { Client, ClientStatus } from "../types/client";
import { useClients } from "../context/ClientContext";

interface ClientTableProps {
  clients: Client[];
}

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const {
    requestStatusChange,
    approveStatusChange,
    rejectStatusChange,
    getNextStatus,
  } = useClients();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const getStatusColor = (status: ClientStatus): string => {
    switch (status) {
      case "new_lead":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-blue-200 text-blue-900";
      case "qualified":
        return "bg-green-100 text-green-800";
      case "not_qualified":
        return "bg-red-100 text-red-800";
      case "consultation_scheduled":
        return "bg-purple-100 text-purple-800";
      case "consultation_done":
        return "bg-purple-200 text-purple-900";
      case "proposal_sent":
        return "bg-indigo-100 text-indigo-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string): string => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatDate = (date: Date | undefined): string => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stage</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Created</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                No clients found
              </td>
            </tr>
          ) : (
            clients.map((client) => {
              const nextStatus = getNextStatus(client.status);
              const hasPendingApproval = !!client.pendingApproval;

              return (
                <React.Fragment key={client.id}>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{client.serviceNeeded}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold capitalize bg-gray-200 text-gray-800">
                        {client.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            client.status
                          )}`}
                        >
                          {getStatusLabel(client.status)}
                        </span>
                        {hasPendingApproval && (
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-800 animate-pulse">
                            ⏳ Pending
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div>{client.email}</div>
                      <div className="text-xs text-gray-500">{client.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDate(client.createdAt)}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setExpandedRow(expandedRow === client.id ? null : client.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        {expandedRow === client.id ? "Collapse" : "Expand"}
                      </button>
                    </td>
                  </tr>

                  {expandedRow === client.id && (
                    <tr className="bg-gray-50 border-b">
                      <td colSpan={7} className="px-6 py-6">
                        <div className="space-y-6">
                          {/* Progression Control */}
                          <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-3">Status Progression</h3>

                            {hasPendingApproval ? (
                              <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg space-y-3">
                                <p className="text-sm font-semibold text-orange-900">
                                  ⏳ Pending Approval
                                </p>
                                <p className="text-sm text-gray-700">
                                  {getStatusLabel(client.status)} →{" "}
                                  <span className="font-bold text-blue-600">
                                    {getStatusLabel(String(client.pendingApproval!.requestedStatus))}
                                  </span>
                                </p>
                                <p className="text-xs text-gray-600">
                                  Requested:{" "}
                                  {new Date(client.pendingApproval!.requestedAt).toLocaleString()}
                                </p>
                                <div className="flex gap-2 pt-2">
                                  <button
                                    onClick={() => approveStatusChange(client.id)}
                                    className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition"
                                  >
                                    ✓ Approve
                                  </button>
                                  <button
                                    onClick={() => rejectStatusChange(client.id)}
                                    className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition"
                                  >
                                    ✗ Reject
                                  </button>
                                </div>
                              </div>
                            ) : nextStatus ? (
                              <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg space-y-3">
                                <p className="text-sm text-gray-700">
                                  Current: <span className="font-bold">{getStatusLabel(client.status)}</span>
                                </p>
                                
                                {/* Special case: Qualification decision when contacted */}
                                {client.status === "contacted" ? (
                                  <div className="space-y-3">
                                    <p className="text-sm font-semibold text-gray-900">
                                      Make Qualification Decision:
                                    </p>
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => requestStatusChange(client.id, "qualified" as ClientStatus)}
                                        className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition"
                                      >
                                        ✓ Qualified
                                      </button>
                                      <button
                                        onClick={() => requestStatusChange(client.id, "not_qualified" as ClientStatus)}
                                        className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition"
                                      >
                                        ✗ Not Qualified
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <p className="text-sm text-gray-700">
                                      Next: <span className="font-bold text-blue-600">{getStatusLabel(String(nextStatus))}</span>
                                    </p>
                                    <button
                                      onClick={() => requestStatusChange(client.id)}
                                      className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
                                    >
                                      Request Status Change
                                    </button>
                                  </>
                                )}
                              </div>
                            ) : (
                              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg">
                                <p className="text-sm font-semibold text-emerald-900">
                                  ✓ Workflow Complete
                                </p>
                                <p className="text-xs text-emerald-700 mt-1">
                                  Client has reached final status
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Approval History */}
                          {client.approvalHistory.length > 0 && (
                            <div className="border-l-4 border-green-500 pl-4">
                              <h3 className="font-semibold text-gray-900 mb-3">Approval History</h3>
                              <div className="space-y-2">
                                {client.approvalHistory.map((approval, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 bg-green-50 border border-green-200 rounded text-sm"
                                  >
                                    <p className="font-semibold text-gray-800">
                                      {getStatusLabel(approval.currentStatus)} →{" "}
                                      {getStatusLabel(String(approval.requestedStatus))}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                      Approved: {formatDate(approval.approvedAt)}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Timeline Info */}
                          <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="font-semibold text-gray-900 mb-3">Timeline</h3>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Created</p>
                                <p className="font-semibold text-gray-900">{formatDate(client.createdAt)}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Consultation</p>
                                <p className="font-semibold text-gray-900">
                                  {formatDate(client.consultationDate)}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Proposal</p>
                                <p className="font-semibold text-gray-900">
                                  {formatDate(client.proposalDate)}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Notes */}
                          {client.notes && (
                            <div className="border-l-4 border-yellow-500 pl-4">
                              <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                              <p className="text-sm text-gray-600">{client.notes}</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
