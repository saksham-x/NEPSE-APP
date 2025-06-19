import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart2, Briefcase, Target, BookOpen, Settings } from "lucide-react";

interface Props {
  children: ReactNode;
}

const navLinks = [
  { label: "Market", icon: <BarChart2 size={18} />, path: "/dashboard/market" },
  {
    label: "Portfolio",
    icon: <Briefcase size={18} />,
    path: "/dashboard/portfolio",
  },
  { label: "Goals", icon: <Target size={18} />, path: "/dashboard/goals" },
  { label: "Learn", icon: <BookOpen size={18} />, path: "/dashboard/learn" },
  {
    label: "Settings",
    icon: <Settings size={18} />,
    path: "/dashboard/settings",
  },
];

export default function DashboardLayout({ children }: Props) {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen bg-[#f9fafb] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6 shadow-md">
        <h1 className="text-2xl font-bold text-[#14532d] mb-8">NepseTrack</h1>
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                pathname === link.path
                  ? "bg-gradient-to-r from-[#22c55e] to-[#ef4444] text-white shadow-sm"
                  : "hover:bg-gray-100"
              }`}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 px-6 border-b border-gray-200 bg-white flex items-center justify-between shadow-sm">
          <div className="text-sm text-gray-500">Welcome back 👋</div>
          <div className="flex items-center gap-3">
            {/* Placeholder avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#22c55e] to-[#ef4444] text-white text-xs font-bold flex items-center justify-center">
              U
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
