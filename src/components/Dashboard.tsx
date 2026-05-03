import React, { useState } from "react";
import { useClients } from "../context/ClientContext";
import type { Stage, ClientStatus } from "../types/client";
import StatusCard from "./StatusCard";
import ClientTable from "./ClientTable";

const Dashboard: React.FC = () => {
  const { clients, getClientsByStage, getClientsByStatus } = useClients();
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus | null>(null);

  // Calculate metrics for each stage
  const leadClients = getClientsByStage("lead");
  const consultationClients = getClientsByStage("consultation");
  const activeClients = getClientsByStage("active");

  // Get status breakdown for lead stage
  const leadStatuses = {
    new_lead: leadClients.filter((c) => c.status === "new_lead").length,
    contacted: leadClients.filter((c) => c.status === "contacted").length,
    qualified: leadClients.filter((c) => c.status === "qualified").length,
    not_qualified: leadClients.filter((c) => c.status === "not_qualified").length,
  };

  // Get status breakdown for consultation stage
  const consultationStatuses = {
    consultation_scheduled: consultationClients.filter(
      (c) => c.status === "consultation_scheduled"
    ).length,
    consultation_done: consultationClients.filter((c) => c.status === "consultation_done")
      .length,
    proposal_sent: consultationClients.filter((c) => c.status === "proposal_sent").length,
  };

  // Get status breakdown for active stage (ONLY 2 sub-stages)
  const activeStatuses = {
    in_progress: activeClients.filter((c) => c.status === "in_progress").length,
    completed: activeClients.filter((c) => c.status === "completed").length,
  };

  const getFilteredClients = () => {
    if (selectedStage && !selectedStatus) {
      return getClientsByStage(selectedStage);
    }
    if (selectedStatus) {
      return getClientsByStatus(selectedStatus);
    }
    return clients;
  };

  const stageColors: Record<Stage, string> = {
    lead: "from-blue-500 to-blue-600",
    consultation: "from-purple-500 to-purple-600",
    active: "from-green-500 to-green-600",
  };

  const filteredClients = getFilteredClients();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
          <p className="text-gray-600">
            Track clients through the complete pipeline: Lead → Consultation → Active Client
          </p>
        </div>

        {/* Stage Overview */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Lead Stage */}
          <div className={`bg-gradient-to-br ${stageColors.lead} rounded-lg p-6 text-white shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">Lead Stage</h2>
            <p className="text-blue-100 text-sm mb-4">Intake Phase: New Lead → Qualified</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Leads</span>
                <span className="font-bold">{leadClients.length}</span>
              </div>
              <div className="bg-blue-400 bg-opacity-30 rounded p-3 mt-3 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>New Lead</span>
                  <span>{leadStatuses.new_lead}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contacted</span>
                  <span>{leadStatuses.contacted}</span>
                </div>
                <div className="flex justify-between">
                  <span>Qualified</span>
                  <span>{leadStatuses.qualified}</span>
                </div>
                <div className="flex justify-between">
                  <span>Not Qualified</span>
                  <span>{leadStatuses.not_qualified}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Stage */}
          <div className={`bg-gradient-to-br ${stageColors.consultation} rounded-lg p-6 text-white shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">Consultation Stage</h2>
            <p className="text-purple-100 text-sm mb-4">Evaluation Phase: Scheduled → Proposal</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>In Consultation</span>
                <span className="font-bold">{consultationClients.length}</span>
              </div>
              <div className="bg-purple-400 bg-opacity-30 rounded p-3 mt-3 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Scheduled</span>
                  <span>{consultationStatuses.consultation_scheduled}</span>
                </div>
                <div className="flex justify-between">
                  <span>Done</span>
                  <span>{consultationStatuses.consultation_done}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposal Sent</span>
                  <span>{consultationStatuses.proposal_sent}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Client Stage */}
          <div className={`bg-gradient-to-br ${stageColors.active} rounded-lg p-6 text-white shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">Active Clients</h2>
            <p className="text-green-100 text-sm mb-4">Service Delivery: In Progress → Completed</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Active</span>
                <span className="font-bold">{activeClients.length}</span>
              </div>
              <div className="bg-green-400 bg-opacity-30 rounded p-3 mt-3 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>In Progress</span>
                  <span>{activeStatuses.in_progress}</span>
                </div>
                <div className="flex justify-between">
                  <span>Completed</span>
                  <span>{activeStatuses.completed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Cards - Detailed View */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Status Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Lead Statuses */}
            <StatusCard
              stage="lead"
              status="new_lead"
              count={leadStatuses.new_lead}
              onClick={() => {
                setSelectedStage("lead");
                setSelectedStatus("new_lead");
              }}
            />
            <StatusCard
              stage="lead"
              status="contacted"
              count={leadStatuses.contacted}
              onClick={() => {
                setSelectedStage("lead");
                setSelectedStatus("contacted");
              }}
            />
            <StatusCard
              stage="lead"
              status="qualified"
              count={leadStatuses.qualified}
              onClick={() => {
                setSelectedStage("lead");
                setSelectedStatus("qualified");
              }}
            />
            <StatusCard
              stage="lead"
              status="not_qualified"
              count={leadStatuses.not_qualified}
              onClick={() => {
                setSelectedStage("lead");
                setSelectedStatus("not_qualified");
              }}
            />

            {/* Consultation Statuses */}
            <StatusCard
              stage="consultation"
              status="consultation_scheduled"
              count={consultationStatuses.consultation_scheduled}
              onClick={() => {
                setSelectedStage("consultation");
                setSelectedStatus("consultation_scheduled");
              }}
            />
            <StatusCard
              stage="consultation"
              status="consultation_done"
              count={consultationStatuses.consultation_done}
              onClick={() => {
                setSelectedStage("consultation");
                setSelectedStatus("consultation_done");
              }}
            />
            <StatusCard
              stage="consultation"
              status="proposal_sent"
              count={consultationStatuses.proposal_sent}
              onClick={() => {
                setSelectedStage("consultation");
                setSelectedStatus("proposal_sent");
              }}
            />

            {/* Active Statuses - Only 2 sub-stages */}
            <StatusCard
              stage="active"
              status="in_progress"
              count={activeStatuses.in_progress}
              onClick={() => {
                setSelectedStage("active");
                setSelectedStatus("in_progress");
              }}
            />
            <StatusCard
              stage="active"
              status="completed"
              count={activeStatuses.completed}
              onClick={() => {
                setSelectedStage("active");
                setSelectedStatus("completed");
              }}
            />
          </div>
        </div>

        {/* Filter Info */}
        {(selectedStage || selectedStatus) && (
          <div className="mb-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900">
              Showing{" "}
              <span className="font-bold">
                {filteredClients.length} client{filteredClients.length !== 1 ? "s" : ""}
              </span>
              {selectedStage && <span> in {selectedStage} stage</span>}
              {selectedStatus && (
                <span> with status "{selectedStatus.replace(/_/g, " ")}"</span>
              )}
              <button
                onClick={() => {
                  setSelectedStage(null);
                  setSelectedStatus(null);
                }}
                className="ml-4 text-blue-600 hover:text-blue-900 font-semibold underline"
              >
                Clear Filters
              </button>
            </p>
          </div>
        )}

        {/* Client Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              {selectedStage || selectedStatus
                ? `Filtered Clients (${filteredClients.length})`
                : `All Clients (${clients.length})`}
            </h3>
          </div>
          <ClientTable clients={filteredClients} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
