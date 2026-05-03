// src/Layout/Layout.jsx
// import React from "react";
// import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

// const Layout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // دالة لتحديد إذا كان الـ link نشيط
//   const isActive = (path) => {
//     return location.pathname === path || location.pathname.startsWith(path + "/");
//   };

//   const handleLogout = () => {
//     if (window.confirm('هل أنت متأكد من رغبتك في تسجيل الخروج؟')) {
//       navigate('/');
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full font-display bg-[#f6f7f8] dark:bg-[#101922]">

//       {/* Sidebar */}
//       <aside className="flex h-screen flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] w-64 p-4 sticky top-0">
//         <div className="flex flex-col gap-4 h-full">
//           <div className="flex items-center gap-3">
//             <div
//               className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
//               style={{
//                 backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNagcnZIxCceF9RbaM3hNKle5UNO5TLPJzuU61Iz_UXbCtux4eG4Z1FhGDlbjyChyWKyMUy1ufZsLnaQIZutWL42CbThQsd0bTM_fneur8EQvPCVECMd0JR_dtxULUYNWANjehQM_AQp7KQWpVsL5yOV7JNVJgJIsLy0LFWageyQ8bGRgPNr63spkAUCmKAzefBBitcyIPXEr-qprqWR49KTlZ2HP9joqaMc6F6ds2xO75s5I4c6-HKSw9OJAoU6WarmzOFrTzyJFF")'
//               }}
//             ></div>
//             <div className="flex flex-col">
//               <h1 className="text-slate-900 dark:text-slate-200 text-base font-bold">SIRS</h1>
//               <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Authority Portal</p>
//             </div>
//           </div>

//           <nav className="flex flex-col gap-2 mt-4 flex-grow">
//             <Link
//               to="/dashboard"
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                 isActive("/dashboard")
//                   ? "bg-[#137fec]/10 text-[#137fec]"
//                   : "text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               <span className="material-symbols-outlined">dashboard</span>
//               <p className="text-sm font-medium">Dashboard</p>
//             </Link>

//             <Link
//               to="/reports"
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                 isActive("/reports")
//                   ? "bg-[#137fec]/10 text-[#137fec]"
//                   : "text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>summarize</span>
//               <p className="text-sm font-medium">Reports</p>
//             </Link>

//             <Link
//               to="/map"
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                 isActive("/map")
//                   ? "bg-[#137fec]/10 text-[#137fec]"
//                   : "text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               <span className="material-symbols-outlined">map</span>
//               <p className="text-sm font-medium">Map</p>
//             </Link>

//             <Link
//               to="/analytics"
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                 isActive("/analytics")
//                   ? "bg-[#137fec]/10 text-[#137fec]"
//                   : "text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               <span className="material-symbols-outlined">analytics</span>
//               <p className="text-sm font-medium">Analytics</p>
//             </Link>

//             <Link
//               to="/settings"
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
//                 isActive("/settings")
//                   ? "bg-[#137fec]/10 text-[#137fec]"
//                   : "text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               <span className="material-symbols-outlined">settings</span>
//               <p className="text-sm font-medium">Settings</p>
//             </Link>
//           </nav>

//           <div className="flex flex-col gap-1 mt-auto">
//             {/* Logout */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
//             >
//               <span className="material-symbols-outlined">logout</span>
//               <p className="text-sm font-medium">Log out</p>
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;



// src/Layout/Layout.js
import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useApp, useT } from "../context/AppContext";

const Layout = () => {
  const location = useLocation();
  const navigate  = useNavigate();
  const { theme, toggleTheme } = useApp();
  const t = useT();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const handleLogout = () => {
    if (window.confirm(t.logoutConfirm)) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  const NAV_LINKS = [
    { to: '/dashboard',     icon: 'dashboard',     label: t.dashboard },
    { to: '/reports',       icon: 'summarize',      label: t.reports,       fill: true },
    { to: '/map',           icon: 'map',            label: t.map },
    { to: '/analytics',     icon: 'analytics',      label: t.analytics },
    { to: '/notifications', icon: 'notifications',  label: t.notifications },
    { to: '/settings',      icon: 'settings',       label: t.settings },
  ];

  return (
    <div className="flex min-h-screen w-full font-display bg-[#f6f7f8] dark:bg-[#0d1520] transition-colors duration-300">

      {/* ── Sidebar ── */}
      <aside className="flex h-screen flex-col border-r border-slate-200 dark:border-slate-800
        bg-white dark:bg-[#101922] w-64 p-4 sticky top-0 transition-colors duration-300">
        <div className="flex flex-col gap-4 h-full">

          {/* Logo */}
          <div className="flex items-center gap-3 px-1">
            <div className="flex items-center justify-center size-10 rounded-xl bg-[#022F72] text-white">
              <span className="material-symbols-outlined text-xl">security</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold">SIRS</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Authority Portal</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1 mt-4 flex-grow">
            {NAV_LINKS.map(({ to, icon, label, fill }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium
                  ${isActive(to)
                    ? 'bg-[#022F72]/10 dark:bg-[#022F72]/30 text-[#022F72] dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={fill ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>

          {/* Bottom: theme toggle + logout */}
          <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
              {theme === 'dark' ? (t.light || 'Light Mode') : (t.dark || 'Dark Mode')}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
              {t.logout}
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
