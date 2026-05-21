import React, { useState, useEffect } from "react";
import { API_BASE_URL, getAuthHeaders } from "../config/api";

// ─── Tabs ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Overview", icon: "dashboard" },
  { id: "users", label: "Users", icon: "group" },
  { id: "reports", label: "All Reports", icon: "summarize" },
  { id: "system", label: "System", icon: "settings" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value, iconBg, iconColor, border = "border-gray-200 dark:border-gray-800" }) => (
  <div className={`bg-white dark:bg-gray-900/50 p-6 rounded-xl border ${border} shadow-sm`}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{label}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
      </div>
      <div className={`${iconBg} p-2 rounded-lg`}>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
    </div>
  </div>
);

const STATUS_BADGE = {
  Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Solved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Closed: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

// ─── Component ────────────────────────────────────────────────────────────
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Overview stats
  const [stats, setStats] = useState({
    total: 0, pending: 0, inProgress: 0, solved: 0,
  });

  // Users
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  // Reports (admin view — all)
  const [reports, setReports] = useState([]);
  const [reportsLoading, setReportsLoading] = useState(false);
  const [reportSearch, setReportSearch] = useState("");

  // System
  const [systemInfo] = useState({
    apiUrl: API_BASE_URL,
    frontendVersion: "1.0.0",
    buildDate: new Date().toLocaleDateString("en-GB"),
  });

  // Overview fetch
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [totalRes, pendingRes, progressRes, solvedRes] = await Promise.all([
          fetch(`${API_BASE_URL}/Dashboard/TotalCount`, { headers: getAuthHeaders() }),
          fetch(`${API_BASE_URL}/Dashboard/PendingCount`, { headers: getAuthHeaders() }),
          fetch(`${API_BASE_URL}/Dashboard/InProgressCount`, { headers: getAuthHeaders() }),
          fetch(`${API_BASE_URL}/Dashboard/SolvedCount`, { headers: getAuthHeaders() }),
        ]);
        const t = await totalRes.json();
        const p = await pendingRes.json();
        const pr = await progressRes.json();
        const s = await solvedRes.json();
        setStats({
          total: t?.value ?? 0,
          pending: p?.value ?? 0,
          inProgress: pr?.value ?? 0,
          solved: s?.value ?? 0,
        });
      } catch (err) {
        console.error("Admin stats error:", err);
      }
    };
    fetchStats();
  }, []);

  // Users fetch (when tab active)
  useEffect(() => {
    if (activeTab !== "users") return;
    setUsersLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/Admin/GetAllUsers`, {
          headers: getAuthHeaders(),
        });
        if (res.ok) {
          const data = await res.json();
          setUsers(Array.isArray(data) ? data : data?.data ?? []);
        } else {
          // fallback demo
          setUsers([
            { id: 1, name: "Admin User", email: "admin@sirs.gov", role: "Admin", status: "Active", lastLogin: "2026-05-10" },
            { id: 2, name: "Officer Ali", email: "ali@sirs.gov", role: "Authority", status: "Active", lastLogin: "2026-05-09" },
            { id: 3, name: "Officer Sara", email: "sara@sirs.gov", role: "Authority", status: "Inactive", lastLogin: "2026-04-20" },
          ]);
        }
      } catch {
        setUsers([
          { id: 1, name: "Admin User", email: "admin@sirs.gov", role: "Admin", status: "Active", lastLogin: "2026-05-10" },
          { id: 2, name: "Officer Ali", email: "ali@sirs.gov", role: "Authority", status: "Active", lastLogin: "2026-05-09" },
        ]);
      } finally {
        setUsersLoading(false);
      }
    };
    fetchUsers();
  }, [activeTab]);

  // Reports fetch (when tab active)
  useEffect(() => {
    if (activeTab !== "reports") return;
    setReportsLoading(true);
    const fetchReports = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, {
          headers: getAuthHeaders(),
        });
        if (res.ok) {
          const data = await res.json();
          const arr = Array.isArray(data) ? data : data?.data ?? [];
          setReports(
            arr.map((r) => ({
              id: r.report_ID ?? r.id,
              category: r.category ?? "Unknown",
              status: r.status ?? "Pending",
              location: r.location ?? "—",
              reporter: r.citizenName ?? "—",
              time: r.dateTime ?? r.time ?? "—",
            }))
          );
        }
      } catch (err) {
        console.error("Admin reports error:", err);
      } finally {
        setReportsLoading(false);
      }
    };
    fetchReports();
  }, [activeTab]);

  const filteredReports = reports.filter(
    (r) =>
      !reportSearch ||
      r.id?.toLowerCase().includes(reportSearch.toLowerCase()) ||
      r.category?.toLowerCase().includes(reportSearch.toLowerCase()) ||
      r.location?.toLowerCase().includes(reportSearch.toLowerCase()) ||
      r.reporter?.toLowerCase().includes(reportSearch.toLowerCase())
  );

  return (
    <div className="w-full p-4 md:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ─── */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#022F72]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#022F72]">admin_panel_settings</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">System management & oversight</p>
            </div>
          </div>
        </div>

        {/* ─── Tabs ─── */}
        <div className="flex gap-1 mb-8 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl w-full overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white dark:bg-gray-900 text-[#022F72] shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <span className="material-symbols-outlined text-base">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Overview Tab ─── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon="summarize" label="Total Reports" value={stats.total} iconBg="bg-blue-100 dark:bg-blue-900/30" iconColor="text-blue-500" />
              <StatCard icon="schedule" label="Pending" value={stats.pending} iconBg="bg-yellow-100 dark:bg-yellow-900/30" iconColor="text-yellow-500" />
              <StatCard icon="sync" label="In Progress" value={stats.inProgress} iconBg="bg-orange-100 dark:bg-orange-900/30" iconColor="text-orange-500" />
              <StatCard icon="check_circle" label="Solved" value={stats.solved} iconBg="bg-green-100 dark:bg-green-900/30" iconColor="text-green-500" border="border-green-200 dark:border-green-900/50" />
            </div>

            {/* Quick links */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "View Users", icon: "group", tab: "users", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100" },
                  { label: "All Reports", icon: "summarize", tab: "reports", color: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100" },
                  { label: "System Info", icon: "settings", tab: "system", color: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100" },
                  { label: "Analytics", icon: "analytics", tab: "overview", color: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.tab)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} transition-colors`}
                  >
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Resolution breakdown */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Status Breakdown</h2>
              {stats.total > 0 ? (
                <div className="space-y-4">
                  {[
                    { label: "Pending", value: stats.pending, color: "bg-yellow-400", textColor: "text-yellow-600" },
                    { label: "In Progress", value: stats.inProgress, color: "bg-blue-500", textColor: "text-blue-600" },
                    { label: "Solved", value: stats.solved, color: "bg-green-500", textColor: "text-green-600" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                        <span className={`font-semibold ${item.textColor}`}>
                          {item.value} ({stats.total > 0 ? ((item.value / stats.total) * 100).toFixed(1) : 0}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${stats.total > 0 ? (item.value / stats.total) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No data available.</p>
              )}
            </div>
          </div>
        )}

        {/* ─── Users Tab ─── */}
        {activeTab === "users" && (
          <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-gray-900 dark:text-white font-bold text-lg">Registered Users</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                All authority accounts in the system
              </p>
            </div>
            {usersLoading ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">Loading users...</div>
            ) : users.length === 0 ? (
              <div className="p-8 text-center">
                <span className="material-symbols-outlined text-gray-300 text-5xl">group_off</span>
                <p className="text-gray-500 dark:text-gray-400 mt-2">No users found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      {["Name", "Email", "Role", "Status", "Last Login"].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {users.map((user) => (
                      <tr key={user.id ?? user.email} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {user.name ?? user.fullName ?? "—"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {user.email ?? "—"}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#022F72]/10 text-[#022F72] dark:text-blue-300">
                            {user.role ?? "User"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              (user.status ?? "Active") === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {user.status ?? "Active"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {user.lastLogin ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ─── Reports Tab ─── */}
        {activeTab === "reports" && (
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input
                type="text"
                placeholder="Search by ID, category, location, reporter..."
                value={reportSearch}
                onChange={(e) => setReportSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#022F72]"
              />
            </div>

            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <div>
                  <h2 className="text-gray-900 dark:text-white font-bold text-lg">All Reports</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {filteredReports.length} report{filteredReports.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              {reportsLoading ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">Loading reports...</div>
              ) : filteredReports.length === 0 ? (
                <div className="p-8 text-center">
                  <span className="material-symbols-outlined text-gray-300 text-5xl">find_in_page</span>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">No reports found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        {["Report ID", "Category", "Status", "Location", "Reporter", "Date"].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {filteredReports.map((r) => (
                        <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                            {r.id}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{r.category}</td>
                          <td className="px-4 py-3 text-sm">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_BADGE[r.status] ?? "bg-gray-100 text-gray-800"}`}
                            >
                              {r.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{r.location}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{r.reporter}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{r.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── System Tab ─── */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-4">System Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "API Base URL", value: systemInfo.apiUrl, icon: "link" },
                  { label: "Frontend Version", value: systemInfo.frontendVersion, icon: "code" },
                  { label: "Build Date", value: systemInfo.buildDate, icon: "calendar_today" },
                  { label: "React Router", value: "HashRouter (ngrok-safe)", icon: "route" },
                  { label: "Token Storage", value: "localStorage", icon: "lock" },
                  { label: "Auth Type", value: "Bearer JWT", icon: "verified_user" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-[#022F72] dark:text-blue-400 text-xl flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-900 dark:text-white mt-0.5 break-all">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cache / Session controls */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Session Controls</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">logout</span>
                  Force Logout
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#022F72] text-white rounded-lg text-sm font-medium hover:bg-[#022F72]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">refresh</span>
                  Reload App
                </button>
                <button
                  onClick={() => {
                    const token = localStorage.getItem("token");
                    alert(token ? `Token found:\n${token.substring(0, 40)}...` : "No token found in localStorage.");
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">key</span>
                  Check Token
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;