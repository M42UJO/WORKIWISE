import SidebarFooter from "./components/SidebarFooter";
import SidebarLogo from "./components/SidebarLogo";
import SidebarNav from "./components/SidebarNav";

export default function Sidebar() {
  return (
    <>
    <aside className="w-72 text-white flex flex-col rounded-md shadow-lg mr-4 bg-[#11111D]">
        <SidebarLogo/>
        <SidebarNav/>
        <SidebarFooter/>
    </aside>
  </>
  )
}

