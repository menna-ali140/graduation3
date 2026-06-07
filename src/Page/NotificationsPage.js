// import React, { useState } from 'react';

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, text: "New High Priority Incident Reported", type: "priority_high", color: "bg-red-100 text-red-800", icon: "text-red-600", time: "5 mins ago", read: false },
//     { id: 2, text: "Incident #1254 has been Resolved", type: "check_circle", color: "bg-green-100 text-green-800", icon: "text-green-600", time: "15 mins ago", read: false },
//     { id: 3, text: "New Report Submitted by Citizen", type: "flag", color: "bg-yellow-100 text-yellow-800", icon: "text-yellow-600", time: "1 hour ago", read: true },
//     { id: 4, text: "System Maintenance Scheduled", type: "construction", color: "bg-blue-100 text-blue-800", icon: "text-blue-600", time: "2 hours ago", read: true },
//     { id: 5, text: "3 New Reports Pending Review", type: "mail", color: "bg-purple-100 text-purple-800", icon: "text-purple-600", time: "3 hours ago", read: true },
//   ]);

//   const markAsRead = (id) => {
//     setNotifications(notifications.map(notif => 
//       notif.id === id ? { ...notif, read: true } : notif
//     ));
//   };

//   const deleteNotification = (id) => {
//     setNotifications(notifications.filter(notif => notif.id !== id));
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h1>
//           <p className="text-gray-500 dark:text-gray-400">
//             {unreadCount > 0 ? `${unreadCount} new notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
//           </p>
//         </div>

//         {/* Notifications List */}
//         <div className="space-y-3">
//           {notifications.length > 0 ? (
//             notifications.map((notif) => (
//               <div 
//                 key={notif.id}
//                 className={`p-4 rounded-lg border transition-colors ${
//                   notif.read 
//                     ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
//                     : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
//                 }`}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className={`p-2 rounded-lg ${notif.color}`}>
//                     <span className={`material-symbols-outlined ${notif.icon}`}>{notif.type}</span>
//                   </div>
                  
//                   <div className="flex-1 min-w-0">
//                     <p className="text-gray-900 dark:text-white font-medium">{notif.text}</p>
//                     <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{notif.time}</p>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     {!notif.read && (
//                       <button
//                         onClick={() => markAsRead(notif.id)}
//                         className="px-3 py-1 rounded bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
//                       >
//                         Mark Read
//                       </button>
//                     )}
//                     <button
//                       onClick={() => deleteNotification(notif.id)}
//                       className="p-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
//                       title="Delete"
//                     >
//                       <span className="material-symbols-outlined">close</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-12">
//               <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 block mb-4">done_all</span>
//               <p className="text-gray-500 dark:text-gray-400 text-lg">No notifications</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


















// import React, { useState, useEffect } from 'react';
// import { API_BASE_URL, getAuthHeaders } from '../config/api';

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // ─── Fetch Notifications ─────────────────────────────
//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch(
//         `${API_BASE_URL}/NotificationAuthority/my-notifications`,
//         {
//           headers: getAuthHeaders(),
//         }
//       );

//       const data = await res.json();
//       console.log("API DATA:", data);

//       // setNotifications(Array.isArray(data) ? data : []);
//       const sorted = Array.isArray(data)
//   ? [...data].sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at)
//     )
//   : [];

// setNotifications(sorted);
// // setNotifications(
// //   Array.isArray(data)
// //     ? data.map(n => ({
// //         id: n.id,
// //         title: n.title,
// //         message: n.message,
// //         type: n.type,
// //         isRead: n.is_read,
// //         createdAt: n.created_at,
// //       }))
// //     : []
// // );



//     } catch (err) {
//       console.log("Notifications Error:", err);
//     }
//   };

//   // ─── Fetch Unread Count ─────────────────────────────
//   const fetchUnreadCount = async () => {
//     try {
//       const res = await fetch(
//         `${API_BASE_URL}/NotificationAuthority/unread-count`,
//         {
//           headers: getAuthHeaders(),
//         }
//       );

//       const data = await res.json();

//       setUnreadCount(data.unreadCount || 0);
//     } catch (err) {
//       console.log("Unread Count Error:", err);
//     }
//   };

//   // ─── Mark One Notification As Read ──────────────────
//   const markAsRead = async (id) => {
//     try {
//       await fetch(
//         `${API_BASE_URL}/NotificationAuthority/mark-as-read/${id}`,
//         {
//           method: "PUT",
//           headers: getAuthHeaders(),
//         }
//       );

//       setNotifications((prev) =>
//         prev.map((notif) =>
//           notif.id === id
//             ? { ...notif, is_read: true }
//             : notif
//         )
//       );

//       fetchUnreadCount();

//     } catch (err) {
//       console.log("Mark Read Error:", err);
//     }
//   };

//   // ─── Mark All As Read ───────────────────────────────
//   const markAllAsRead = async () => {
//     try {
//       await fetch(
//         `${API_BASE_URL}/NotificationAuthority/mark-all-as-read`,
//         {
//           method: "PUT",
//           headers: getAuthHeaders(),
//         }
//       );

//       setNotifications((prev) =>
//         prev.map((notif) => ({
//           ...notif,
//           is_read: true,
//         }))
//       );

//       setUnreadCount(0);

//     } catch (err) {
//       console.log("Mark All Error:", err);
//     }
//   };

//   // ─── Delete From UI Only ────────────────────────────
//   // const deleteNotification = (id) => {
//   //   setNotifications((prev) =>
//   //     prev.filter((notif) => notif.id !== id)
//   //   );
//   // };
//   const deleteNotification = (id) => {
//   setNotifications((prev) => {
//     const updated = prev.filter((notif) => notif.id !== id);
//     return updated;
//   });
// };




//   const getNotificationIcon = (type) => {
//   if (!type) return "notifications";

//   const t = type.toLowerCase();

//   if (t.includes("high")) return "priority_high";
//   if (t.includes("resolve")) return "check_circle";
//   if (t.includes("report")) return "flag";

//   return "notifications";
// };

//   // ─── First Load ─────────────────────────────────────
//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);

//       await Promise.all([
//         fetchNotifications(),
//         fetchUnreadCount(),
//       ]);

//       setLoading(false);
//     };

//     loadData();
//   }, []);





// console.log("STATE:", notifications);





  

// const latestNotifications = notifications.slice(0, 3);
//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="mb-8 flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//               Notifications
//             </h1>

//             <p className="text-gray-500 dark:text-gray-400">
//               {unreadCount > 0
//                 ? `${unreadCount} new notification${unreadCount !== 1 ? 's' : ''}`
//                 : 'All caught up!'}
//             </p>
//           </div>

//           {unreadCount > 0 && (
//             <button
//               onClick={markAllAsRead}
//               className="px-4 py-2 rounded-lg bg-[#022F72] text-white text-sm font-medium hover:opacity-90"
//             >
//               Mark All Read
//             </button>
//           )}
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="text-center py-10 text-gray-500">
//             Loading...
//           </div>
//         ) : (
//           <div className="space-y-3">

//             {/* {notifications.length > 0 ? (
//               notifications.map((notif) => ( */}

//               {latestNotifications.length > 0 ? (
//   latestNotifications.map((notif) => (
                
//                 <div
//                   key={notif.id}
//                   className={`p-4 rounded-lg border transition-colors ${
//                     // notif.isRead
//                     notif.is_read
//                       ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
//                       : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">

//                     {/* Icon */}
//                     <div
//                       className={`p-2 rounded-lg ${
//                         // notif.isRead
//                         notif.is_read
//                           ? 'bg-gray-100 text-gray-600'
//                           : 'bg-blue-100 text-blue-700'
//                       }`}
//                     >
//                       {/* <span className="material-symbols-outlined">
//                         notifications
//                       </span> */}
//                       <span className="material-symbols-outlined">
//   {getNotificationIcon(notif.type)}
// </span>

//                     </div>

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       <p className="text-xs text-gray-400">ID: {notif.id}</p>
//                       <p className="text-gray-900 dark:text-white font-semibold">
//                         {notif.title}
//                       </p>

//                       <p className="text-xs text-gray-500 mt-1">Type: {notif.type}</p>

//                       <p className="text-gray-600 dark:text-gray-300 mt-1">
//                         {notif.message}
//                       </p>

//                       <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
//                         {new Date(notif.created_at).toLocaleString()}
//                       </p>
//                     </div>

//                     {/* Actions */}
//                     <div className="flex items-center gap-2">

//                       {!notif.is_read && (
//                         <button
//                           onClick={() => markAsRead(notif.id)}
//                           className="px-3 py-1 rounded bg-[#022F72] text-white text-sm font-medium hover:opacity-90"
//                         >
//                           Mark Read
//                         </button>
//                       )}

//                       <button
//                         onClick={() => deleteNotification(notif.id)}
//                         className="p-2 text-gray-500 hover:text-red-500 transition-colors"
//                       >
//                         <span className="material-symbols-outlined">
//                           close
//                         </span>
//                       </button>

//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-12">
//                 <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 block mb-4">
//                   done_all
//                 </span>

//                 <p className="text-gray-500 dark:text-gray-400 text-lg">
//                   No notifications
//                 </p>
//               </div>
//             )}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;








import React, { useState, useEffect } from 'react';
import { API_BASE_URL, getAuthHeaders } from '../config/api';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // ─── Fetch All Notifications ─────────────────────────────
  const fetchNotifications = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/NotificationAuthority/my-notifications`, {
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      
      // ترتيب الإشعارات من الأحدث للأقدم
      const sorted = Array.isArray(data)
        ? [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        : [];
      setNotifications(sorted);
    } catch (err) {
      console.log("Notifications Error:", err);
    }
  };

  // ─── Fetch Unread Count ─────────────────────────────
  const fetchUnreadCount = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/NotificationAuthority/unread-count`, {
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      setUnreadCount(data.unreadCount || 0);
    } catch (err) {
      console.log("Unread Count Error:", err);
    }
  };

  // ─── Mark One Notification As Read ──────────────────
  const markAsRead = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/NotificationAuthority/mark-as-read/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
      });
      
      setNotifications((prev) =>
        prev.map((notif) => notif.id === id ? { ...notif, is_read: true } : notif)
      );
      fetchUnreadCount();
    } catch (err) {
      console.log("Mark Read Error:", err);
    }
  };

  // ─── Mark All As Read ───────────────────────────────
  const markAllAsRead = async () => {
    try {
      await fetch(`${API_BASE_URL}/NotificationAuthority/mark-all-as-read`, {
        method: "PUT",
        headers: getAuthHeaders(),
      });
      
      setNotifications((prev) => prev.map((notif) => ({ ...notif, is_read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.log("Mark All Error:", err);
    }
  };

  // ─── Delete From UI Only ────────────────────────────
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // ─── دالة الأيقونات والألوان الديناميكية لكل حالة ───
  const getNotificationConfig = (type) => {
    if (!type) return { icon: "notifications", colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/20" };
    const t = type.toLowerCase();

    // 1. حالة الـ inprogress (برتقالي)
    if (t.includes("inprogress") || t.includes("progress")) {
      return { icon: "pending", colorClass: "bg-amber-100 text-amber-600 dark:bg-amber-900/20" };
    }
    // 2. حالة الـ solved / resolved (أخضر)
    if (t.includes("solved") || t.includes("resolve")) {
      return { icon: "check_circle", colorClass: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20" };
    }
    // 3. حالة الـ high priority (أحمر)
    if (t.includes("high") || t.includes("priority")) {
      return { icon: "priority_high", colorClass: "bg-red-100 text-red-600 dark:bg-red-900/20" };
    }
    // 4. البلاغات الجديدة أو العادية (بنفسجي)
    if (t.includes("report") || t.includes("submit")) {
      return { icon: "flag", colorClass: "bg-purple-100 text-purple-600 dark:bg-purple-900/20" };
    }

    return { icon: "notifications", colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/20" };
  };

  // ─── First Load ─────────────────────────────────────
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchNotifications(), fetchUnreadCount()]);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="w-full p-8 overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Notifications</h1>
            <p className="text-gray-500 dark:text-gray-400">
              {unreadCount > 0 ? `${unreadCount} new notifications` : 'All caught up!'}
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 rounded-lg bg-[#022F72] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Mark All Read
            </button>
          )}
        </div>

        {/* Loading / List Content */}
        {loading ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading notifications...</div>
        ) : (
          <div className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map((notif) => {
                const config = getNotificationConfig(notif.type);
                return (
                  <div
                    key={notif.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      notif.is_read
                        ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                        : 'bg-blue-50/40 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* علامة الأيقونة الملونة الديناميكية */}
                      <div className={`p-2 rounded-lg ${config.colorClass}`}>
                        <span className="material-symbols-outlined block">{config.icon}</span>
                      </div>

                      {/* تفاصيل الإشعار */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">ID: {notif.id}</p>
                        <h4 className="text-gray-900 dark:text-white font-semibold text-base">{notif.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Type: {notif.type}</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{notif.message}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                          {new Date(notif.created_at).toLocaleString()}
                        </p>
                      </div>

                      {/* أزرار التحكم الجانبية */}
                      <div className="flex items-center gap-2">
                        {!notif.is_read && (
                          <button
                            onClick={() => markAsRead(notif.id)}
                            className="px-3 py-1 rounded bg-[#022F72] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                          >
                            Mark Read
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notif.id)}
                          className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                          <span className="material-symbols-outlined block">close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600 block mb-2">done_all</span>
                <p className="text-gray-500 dark:text-gray-400">No notifications found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;