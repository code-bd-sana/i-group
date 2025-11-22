import Activities from "@/components/dashboard/Activities";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import RecentUploads from "@/components/dashboard/RecentUploads";

export default function Page() {
  return (
    <div>
      <DashboardHeader />
      <DashboardChart />
      <RecentUploads />
      <Activities />
    </div>
  );
}
