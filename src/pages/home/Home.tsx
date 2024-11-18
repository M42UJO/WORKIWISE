import HomeAdd from "./components/HomeAdd";
import HomeCard from "./components/HomeCard";
import HomeSearch from "./components/HomeSearch";

function Home() {
  return (
    <main>
      <HomeSearch/>
      <HomeCard/>
      <HomeAdd/>
    </main>
  )
}

export default Home