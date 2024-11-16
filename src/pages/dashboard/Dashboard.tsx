import DashboardHeader from "./components/DashboardHeader"
import DashboarfSestion from "./components/DashboarfSestion"


function Dashboard() {
  return (
    <div className="flex h-screen p-4">
    <main className="flex-grow p-6 rounded-md shadow-lg bg-[#F5F6FB]">
        <DashboardHeader/>
        <DashboarfSestion/>
    </main>
  </div>
  )
}

export default Dashboard