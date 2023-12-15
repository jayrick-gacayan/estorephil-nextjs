import DashboardStatsCard from "../_components/dashboard-stats-card";

export default function DashboardStatistcs() {
  return (
    <div className="flex justify-around">
      <DashboardStatsCard
        color={"bg-[#5D9CEC]"}
        title={"Sellers"}
        icon={undefined}
        iconColor={"bg-[#2F80E7]"}
        number={"12"}
      />

      <DashboardStatsCard
        color={"bg-[#7266BA]"}
        title={"Products"}
        icon={undefined}
        iconColor={"bg-[#564AA3]"}
        number={"12"}
      />
      <DashboardStatsCard
        color={"bg-[#37BC9B]"}
        title={"Users"}
        icon={undefined}
        iconColor={"bg-[#2B957A]"}
        number={"12"}
      />
      <DashboardStatsCard
        color={"bg-[#FF902B]"}
        title={"Total Orders"}
        icon={undefined}
        iconColor={"bg-[#F77600]"}
        number={"12"}
      />
    </div>
  );
}
