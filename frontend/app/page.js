import Activities from "@/components/Dashboard/Activities";
import DashboardChart from "@/components/Dashboard/DashboardChart";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import RecentUploads from "@/components/Dashboard/RecentUploads";

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
