import HomeAdd from "./components/HomeAdd";
import HomeCard from "./components/HomeCard";
import HomeSearch from "./components/HomeSearch";

function Home() {
  return (
    <>
      {/* Search Button */}
      <div className="absolute top-4 right-4 m-6 cursor-pointer">
        <HomeSearch />
      </div>
      <div className="p-8">
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