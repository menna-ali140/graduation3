import React from "react";

const DEPARTMENT_CONFIG = {
  fire: {
    label:     "Fire Department",
    icon:      "local_fire_department",
    // نفس درجات الأحمر اللي في الكارد بتاع الماب
    lightBg:   "bg-[#fff0ee] dark:bg-red-900/10",
    border:    "border-[#ffd5cc] dark:border-red-900/30",
    iconBg:    "bg-[#ffe0db]",
    iconColor: "text-[#ef4444]",
    textColor: "text-[#c0392b] dark:text-red-300",
    dot:       "bg-[#ef4444]",
    badge:     "bg-[#fee2e2] text-[#ef4444]",
  },
  municipality: {
    label:     "Municipality Department",
    icon:      "construction",
    lightBg:   "bg-emerald-50 dark:bg-emerald-900/10",
    border:    "border-emerald-100 dark:border-emerald-900/30",
    iconBg:    "bg-emerald-100",
    iconColor: "text-emerald-500",
    textColor: "text-emerald-700 dark:text-emerald-300",
    dot:       "bg-emerald-500",
    badge:     "bg-emerald-100 text-emerald-600",
  },
  traffic: {
    label:     "Traffic Department",
    icon:      "traffic",
    lightBg:   "bg-amber-50 dark:bg-amber-900/10",
    border:    "border-amber-100 dark:border-amber-900/30",
    iconBg:    "bg-amber-100",
    iconColor: "text-amber-500",
    textColor: "text-amber-700 dark:text-amber-300",
    dot:       "bg-amber-500",
    badge:     "bg-amber-100 text-amber-600",
  },
};

export const getEmailFromToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload?.email || null;
  } catch {
    return null;
  }
};

export const getDepartmentFromEmail = (email) => {
  if (!email) return null;
  const e = email.toLowerCase();
  if (e.includes("fire"))         return "fire";
  if (e.includes("municipality")) return "municipality";
  if (e.includes("traffic"))      return "traffic";
  return null;
};

const DepartmentBanner = () => {
  const email   = getEmailFromToken();
  const deptKey = getDepartmentFromEmail(email);
  const cfg     = DEPARTMENT_CONFIG[deptKey];

  if (!cfg) return null;

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${cfg.lightBg} ${cfg.border} mb-6`}>
      {/* Icon — نفس شكل أيقونة الكارد في الماب */}
      <div className={`flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 ${cfg.iconBg}`}>
        <span
          className={`material-symbols-outlined text-lg ${cfg.iconColor}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {cfg.icon}
        </span>
      </div>

      {/* Label */}
      <div className="flex items-center gap-2 flex-grow min-w-0">
        <p className={`font-semibold text-sm ${cfg.textColor}`}>{cfg.label}</p>
        {/* Badge نفس شكل badge الماب */}
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.badge}`}>
          {deptKey === "fire" ? "Fire" : deptKey === "municipality" ? "Roads" : "Traffic"}
        </span>
        {/* Live dot */}
        <span className="flex items-center gap-1 ml-1">
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
          <span className="text-xs text-gray-400 dark:text-gray-500">Live</span>
        </span>
      </div>

      {/* Email */}
      <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 font-mono truncate max-w-[200px]">
        {email}
      </p>
    </div>
  );
};

export default DepartmentBanner;