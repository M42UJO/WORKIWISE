import SidebarFooter from "./components/SidebarFooter";
import SidebarLogo from "./components/SidebarLogo";
import SidebarNav from "./components/SidebarNav";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 flex flex-col bg-[#11111D] text-white">
      <div className="flex items-center p-6 ">
        <SidebarLogo />
      </div>
      <nav className="flex-1 px-4">
        <SidebarNav />
      </nav>
      <div className="p-6">
        <SidebarFooter />
      </div>
    </aside>
  );
}