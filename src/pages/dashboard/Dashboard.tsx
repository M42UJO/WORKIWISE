import DashboardAdd from "./components/DashboardAdd";
import DashboardCard from "./components/DashboardCard";
import DashboardSearch from "./components/DashboardSearch";

function Dashboard() {
  return (
    <main>
      <DashboardSearch/>
      <DashboardCard/>
      <DashboardAdd/>
    </main>
  )
}

export default Dashboard