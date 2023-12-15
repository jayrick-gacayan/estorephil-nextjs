import { FaStore, FaUsers } from "react-icons/fa";
import DashboardStatsCard from "../_components/dashboard-stats-card";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";

export default function DashboardStatistcs() {
  return (
    <div className="flex flex-auto justify-center gap-7">
      <DashboardStatsCard
        color={"bg-[#5D9CEC]"}
        title={"SELLERS"}
        icon={<FaStore className="w-[3rem] h-[3rem]" />}
        iconColor={"bg-[#2F80E7]"}
        number={"12"}
      />

      <DashboardStatsCard
        color={"bg-[#7266BA]"}
        title={"PRODUCTS"}
        icon={<MdProductionQuantityLimits className="w-[3rem] h-[3rem]" />}
        iconColor={"bg-[#564AA3]"}
        number={"12"}
      />
      <DashboardStatsCard
        color={"bg-[#37BC9B]"}
        title={"USERS"}
        icon={<FaUsers className="w-[3rem] h-[3rem]" />}
        iconColor={"bg-[#2B957A]"}
        number={"12"}
      />
      <DashboardStatsCard
        color={"bg-[#FF902B]"}
        title={"TOTAL ORDERS"}
        icon={<IoIosChatbubbles className="w-[3rem] h-[3rem]" />}
        iconColor={"bg-[#F77600]"}
        number={"12"}
      />
    </div>
  );
}
