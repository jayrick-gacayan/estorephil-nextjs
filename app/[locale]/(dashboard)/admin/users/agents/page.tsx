import DashboardHeaderText from "../../../_components/dashboard-header-text";
import AgentItems from "./_sections/agent-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Agents" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <AgentItems />
      </div>
    </>
  );
}
