import Activities from "@/components/dashboard/Activities.jsx";
import DashboardChart from "@/components/dashboard/DashboardChart.jsx";
import DashboardHeader from "@/components/dashboard/DashboardHeader.jsx";
import RecentUploads from "@/components/dashboard/RecentUploads.jsx";

//hello buff


export default function Page() {
  return (
    <div>
      <DashboardHeader />
      <DashboardChart/>
      <RecentUploads />
      <Activities />
    </div>
  );
}
