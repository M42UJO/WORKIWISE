import SidebarFooter from "./components/SidebarFooter";
import SidebarLogo from "./components/SidebarLogo";
import SidebarNav from "./components/SidebarNav";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 flex flex-col bg-[#11111D] text-white">
      <SidebarLogo />
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}