import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  pageshow: React.ReactNode; 
}

const Layouts: React.FC<LayoutProps> = ({ pageshow }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        {pageshow}
      </main>
    </div>
  );
};

export default Layouts;
