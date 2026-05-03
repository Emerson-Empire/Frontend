import React from "react";
import type { Stage, ClientStatus } from "../types/client";

interface StatusCardProps {
  stage: Stage;
  status: ClientStatus;
  count: number;
  onClick?: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({
  stage,
  status,
  count,
  onClick,
}) => {
  const getStageColor = (stage: Stage): string => {
    switch (stage) {
      case "lead":
        return "bg-blue-50 border-blue-200";
      case "consultation":
        return "bg-purple-50 border-purple-200";
      case "active":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getStatusBadgeColor = (status: ClientStatus): string => {
    switch (status) {
      // Lead statuses
      case "new_lead":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-blue-200 text-blue-900";
      case "qualified":
        return "bg-green-100 text-green-800";
      case "not_qualified":
        return "bg-red-100 text-red-800";
      // Consultation statuses
      case "consultation_scheduled":
        return "bg-purple-100 text-purple-800";
      case "consultation_done":
        return "bg-purple-200 text-purple-900";
      case "proposal_sent":
        return "bg-indigo-100 text-indigo-800";
      // Active statuses
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: ClientStatus): string => {
    return status.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${getStageColor(stage)}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 capitalize mb-1">{stage} Stage</p>
          <p className={`text-2xl font-bold`}>{count}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(status)}`}>
          {getStatusLabel(status)}
        </span>
      </div>
    </div>
  );
};

export default StatusCard;
