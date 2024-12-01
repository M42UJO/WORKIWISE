import HomeAdd from "./components/HomeAdd";
import HomeCard from "./components/HomeCard";

function Home() {
  return (
    <>
      <div className="p-6">
        <HomeCard />
      </div>
      {/* Floating Action Button */}
      <div className="absolute bottom-4 right-4">
        <HomeAdd />
      </div>
    </>
  )
}

export default Home