import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="mx-auto w-full max-w-7xl">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;