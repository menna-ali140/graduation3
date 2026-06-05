// import React, { useState, useEffect } from 'react';

// const AnalyticsPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // محاكاة جلب البيانات
//     setTimeout(() => {
//       setChartData([
//         { month: 'Jan', incidents: 120, resolved: 95 },
//         { month: 'Feb', incidents: 145, resolved: 110 },
//         { month: 'Mar', incidents: 98, resolved: 85 },
//         { month: 'Apr', incidents: 165, resolved: 140 },
//         { month: 'May', incidents: 142, resolved: 115 },
//         { month: 'Jun', incidents: 178, resolved: 155 },
//       ]);
//       setLoading(false);
//     }, 800);
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full p-8 overflow-y-auto">
//         <p className="text-slate-500">Loading analytics...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
//           <p className="text-gray-500 dark:text-gray-400">Track incident trends and performance metrics</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Incidents</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">848</p>
//             <p className="text-green-600 text-sm mt-1">+12.5% from last month</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Resolution Rate</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">92.5%</p>
//             <p className="text-green-600 text-sm mt-1">+2.3% improvement</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Avg Response Time</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">4.2 min</p>
//             <p className="text-red-600 text-sm mt-1">+0.5 min slower</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">High Priority</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">23</p>
//             <p className="text-red-600 text-sm mt-1">-5 from last month</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Incident Trend */}
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Incident Trends</h2>
//             <div className="space-y-4">
//               {chartData.map((item) => (
//                 <div key={item.month}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{item.incidents}</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <div 
//                       className="bg-blue-500 h-2 rounded-full" 
//                       style={{width: `${(item.incidents / 200) * 100}%`}}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Resolution Rate */}
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resolution Comparison</h2>
//             <div className="space-y-4">
//               {chartData.map((item) => (
//                 <div key={`res-${item.month}`}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{item.resolved}</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <div 
//                       className="bg-green-500 h-2 rounded-full" 
//                       style={{width: `${(item.resolved / 200) * 100}%`}}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Category Breakdown */}
//         <div className="mt-8 bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//           <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Incident Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
//               <p className="text-2xl font-bold text-red-500">245</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fire</p>
//               <p className="text-xs text-gray-500 mt-1">28.9%</p>
//             </div>
//             <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
//               <p className="text-2xl font-bold text-orange-500">189</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Medical</p>
//               <p className="text-xs text-gray-500 mt-1">22.3%</p>
//             </div>
//             <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
//               <p className="text-2xl font-bold text-blue-500">312</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Crime</p>
//               <p className="text-xs text-gray-500 mt-1">36.8%</p>
//             </div>
//             <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
//               <p className="text-2xl font-bold text-green-500">102</p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Infrastructure</p>
//               <p className="text-xs text-gray-500 mt-1">12.0%</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsPage;












// دا ال ui  المظبوط
// داينمك بالموك داتا
// import React, { useState, useEffect } from 'react';

// const AnalyticsPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categoriesData, setCategoriesData] = useState([]);

//   useEffect(() => {
//     // محاكاة جلب البيانات من API
//     setTimeout(() => {
//       const incidents = [
//         { month: 'Jan', incidents: 120, resolved: 95 },
//         { month: 'Feb', incidents: 145, resolved: 110 },
//         { month: 'Mar', incidents: 98, resolved: 85 },
//         { month: 'Apr', incidents: 165, resolved: 140 },
//         { month: 'May', incidents: 142, resolved: 115 },
//         { month: 'Jun', incidents: 178, resolved: 155 },
//       ];

//       const categories = [
//         { name: 'Fire', count: 245, color: 'text-red-500' },
//         { name: 'Medical', count: 189, color: 'text-orange-500' },
//         { name: 'Crime', count: 312, color: 'text-blue-500' },
//         { name: 'Infrastructure', count: 102, color: 'text-green-500' },
//       ];

//       setChartData(incidents);
//       setCategoriesData(categories);
//       setLoading(false);
//     }, 800);
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full p-8 overflow-y-auto">
//         <p className="text-slate-500">Loading analytics...</p>
//       </div>
//     );
//   }

//   // حسابات دايناميك للـ Stats Cards
//   const totalIncidents = chartData.reduce((sum, i) => sum + i.incidents, 0);
//   const totalResolved = chartData.reduce((sum, i) => sum + i.resolved, 0);
//   const resolutionRate = ((totalResolved / totalIncidents) * 100).toFixed(1);

//   const maxIncidents = Math.max(...chartData.map(i => i.incidents));
//   const maxResolved = Math.max(...chartData.map(i => i.resolved));

//   const highPriority = categoriesData.find(cat => cat.name === 'Fire')?.count || 0; // مثال
//   const avgResponseTime = 4.2; // لو عندك API ممكن تحسبها دايناميك

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
//           <p className="text-gray-500 dark:text-gray-400">Track incident trends and performance metrics</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Incidents</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{totalIncidents}</p>
//             <p className="text-green-600 text-sm mt-1">+12.5% from last month</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Resolution Rate</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{resolutionRate}%</p>
//             <p className="text-green-600 text-sm mt-1">+2.3% improvement</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Avg Response Time</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{avgResponseTime} min</p>
//             <p className="text-red-600 text-sm mt-1">+0.5 min slower</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">High Priority</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{highPriority}</p>
//             <p className="text-red-600 text-sm mt-1">-5 from last month</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Incident Trend */}
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Incident Trends</h2>
//             <div className="space-y-4">
//               {chartData.map((item) => (
//                 <div key={item.month}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{item.incidents}</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <div
//                       className="bg-blue-500 h-2 rounded-full"
//                       style={{ width: `${(item.incidents / maxIncidents) * 100}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Resolution Rate */}
//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resolution Comparison</h2>
//             <div className="space-y-4">
//               {chartData.map((item) => (
//                 <div key={`res-${item.month}`}>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
//                     <span className="text-gray-900 dark:text-white font-semibold">{item.resolved}</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <div
//                       className="bg-green-500 h-2 rounded-full"
//                       style={{ width: `${(item.resolved / maxResolved) * 100}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Category Breakdown */}
//         <div className="mt-8 bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
//           <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Incident Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {categoriesData.map((cat) => {
//               const percentage = ((cat.count / totalIncidents) * 100).toFixed(1);
//               return (
//                 <div key={cat.name} className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
//                   <p className={`text-2xl font-bold ${cat.color}`}>{cat.count}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cat.name}</p>
//                   <p className="text-xs text-gray-500 mt-1">{percentage}%</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsPage;








// import React, { useState, useEffect } from 'react';

// const AnalyticsPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categoriesData, setCategoriesData] = useState([]);

//   const [totalIncidentsApi, setTotalIncidentsApi] = useState(0);
//   const [resolutionRateApi, setResolutionRateApi] = useState(0);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [
//   //         totalRes,
//   //         rateRes,
//   //         monthlyTotalRes,
//   //         monthlySolvedRes,
//   //         categoryRes
//   //       ] = await Promise.all([
//   //         fetch('http://207.180.209.101:5000/api/Analytics/TotalIncidents'),
//   //         fetch('http://207.180.209.101:5000/api/Analytics/ResolutionRate'),
//   //         fetch('http://207.180.209.101:5000/api/Analytics/MonthlyTotal'),
//   //         fetch('http://207.180.209.101:5000/api/Analytics/MonthlySolved'),
//   //         fetch('http://207.180.209.101:5000/api/Analytics/CategoryDistribution')
//   //       ]);

//   //       const totalData = await totalRes.json();
//   //       const rateData = await rateRes.json();
//   //       const monthlyTotalData = await monthlyTotalRes.json();
//   //       const monthlySolvedData = await monthlySolvedRes.json();
//   //       const categoryData = await categoryRes.json();

//   //       //  FIX: ضمان إنهم Arrays
//   //       const monthlyTotal = Array.isArray(monthlyTotalData)
//   //         ? monthlyTotalData
//   //         : monthlyTotalData.data || monthlyTotalData.result || [];

//   //       const monthlySolved = Array.isArray(monthlySolvedData)
//   //         ? monthlySolvedData
//   //         : monthlySolvedData.data || monthlySolvedData.result || [];

//   //       const categories = Array.isArray(categoryData)
//   //         ? categoryData
//   //         : categoryData.data || categoryData.result || [];

//   //       // دمج الداتا
//   //       const mergedChart = monthlyTotal.map((item, index) => ({
//   //         month: item.month,
//   //         incidents: item.count,
//   //         resolved: monthlySolved[index]?.count || 0
//   //       }));

//   //       setChartData(mergedChart);

//   //       setCategoriesData(
//   //         categories.map(cat => ({
//   //           name: cat.name,
//   //           count: cat.count,
//   //           color:
//   //             cat.name === "Fire"
//   //               ? "text-red-500"
//   //               : cat.name === "Medical"
//   //               ? "text-orange-500"
//   //               : cat.name === "Crime"
//   //               ? "text-blue-500"
//   //               : "text-green-500"
//   //         }))
//   //       );

//   //       setTotalIncidentsApi(totalData.total || 0);
//   //       setResolutionRateApi(rateData.rate || 0);

//   //       setLoading(false);

//   //     } catch (error) {
//   //       console.error("API Error:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);


//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         "http://207.180.209.101:5005/api/Authority/Analytics"
//       );

//       const data = await res.json();

//       // fallback handling
//       const monthlyTotal = data.monthlyTotal || [];
//       const monthlySolved = data.monthlySolved || [];
//       const categories = data.categories || [];

//       // chart
//       const mergedChart = monthlyTotal.map((item, index) => ({
//         month: item.month,
//         incidents: item.count,
//         resolved: monthlySolved[index]?.count || 0
//       }));

//       setChartData(mergedChart);

//       // categories
//       setCategoriesData(
//         categories.map(cat => ({
//           name: cat.name,
//           count: cat.count,
//           color:
//             cat.name === "Fire"
//               ? "text-red-500"
//               : cat.name === "Medical"
//               ? "text-orange-500"
//               : cat.name === "Crime"
//               ? "text-blue-500"
//               : "text-green-500"
//         }))
//       );

//       // stats
//       // setTotalIncidentsApi(data.totalIncidents || 0);
//       // setResolutionRateApi(data.resolutionRate || 0);

//       setTotalIncidentsApi(data.totalIncidents || data.total || 0);
//       setResolutionRateApi(data.resolutionRate || data.rate || 0);

//       setLoading(false);

//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };

//   fetchData();
// }, []);

//   if (loading) {
//     return (
//       <div className="w-full p-8 overflow-y-auto">
//         <p className="text-slate-500">Loading analytics...</p>
//       </div>
//     );
//   }

//   const totalIncidents =
//     totalIncidentsApi || chartData.reduce((sum, i) => sum + i.incidents, 0);

//   const totalResolved =
//     chartData.reduce((sum, i) => sum + i.resolved, 0);

//   const resolutionRate =
//     resolutionRateApi || ((totalResolved / totalIncidents) * 100 || 0).toFixed(1);

//   const maxIncidents = Math.max(...chartData.map(i => i.incidents), 1);
//   const maxResolved = Math.max(...chartData.map(i => i.resolved), 1);

//   const highPriority =
//     categoriesData.find(cat => cat.name === 'Fire')?.count || 0;

//   const avgResponseTime = 4.2;

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//             Analytics
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400">
//             Track incident trends and performance metrics
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <p>Total Incidents</p>
//             <p className="text-3xl font-bold">{totalIncidents}</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <p>Resolution Rate</p>
//             <p className="text-3xl font-bold">{resolutionRate}%</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <p>Avg Response Time</p>
//             <p className="text-3xl font-bold">{avgResponseTime} min</p>
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <p>High Priority</p>
//             <p className="text-3xl font-bold">{highPriority}</p>
//           </div>

//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <h2 className="font-bold mb-4">Incident Trends</h2>

//             {chartData.map(item => (
//               <div key={item.month} className="mb-3">
//                 <div className="flex justify-between text-sm">
//                   <span>{item.month}</span>
//                   <span>{item.incidents}</span>
//                 </div>

//                 <div className="w-full bg-gray-200 h-2 rounded">
//                   <div
//                     className="bg-blue-500 h-2 rounded"
//                     style={{
//                       width: `${(item.incidents / maxIncidents) * 100}%`
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//             <h2 className="font-bold mb-4">Resolution Comparison</h2>

//             {chartData.map(item => (
//               <div key={item.month} className="mb-3">
//                 <div className="flex justify-between text-sm">
//                   <span>{item.month}</span>
//                   <span>{item.resolved}</span>
//                 </div>

//                 <div className="w-full bg-gray-200 h-2 rounded">
//                   <div
//                     className="bg-green-500 h-2 rounded"
//                     style={{
//                       width: `${(item.resolved / maxResolved) * 100}%`
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* Categories */}
//         <div className="mt-8 bg-white dark:bg-gray-900/50 p-6 rounded-xl border">
//           <h2 className="font-bold mb-4">Incident Categories</h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {categoriesData.map(cat => {
//               const percentage =
//                 ((cat.count / totalIncidents) * 100 || 0).toFixed(1);

//               return (
//                 <div key={cat.name} className="text-center p-4 bg-gray-50 rounded">
//                   <p className={`text-2xl font-bold ${cat.color}`}>
//                     {cat.count}
//                   </p>
//                   <p>{cat.name}</p>
//                   <p className="text-xs">{percentage}%</p>
//                 </div>
//               );
//             })}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AnalyticsPage;



// import React, { useState, useEffect } from "react";
// import { API_BASE_URL, getAuthHeaders } from '../config/api';
// import { useT } from '../context/AppContext';

// const AnalyticsPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categoriesData, setCategoriesData] = useState([]);

//   const [totalIncidentsApi, setTotalIncidentsApi] = useState(0);
//   const [resolutionRateApi, setResolutionRateApi] = useState(0);
//   const [avgTime, setAvgTime] = useState("");
//   const t = useT();

//   // =====================
//   // TOKEN HEADER HELPER
//   // =====================
//   const getAuthHeaders = () => {
//     const token = localStorage.getItem("token");

//     return {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     };
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const [
//           totalRes,
//           rateRes,
//           avgRes,
//           monthlyTotalRes,
//           monthlySolvedRes,
//         ] = await Promise.all([
//           fetch(`${API_BASE_URL}/Analytics/TotalIncidents`, {
//             headers: getAuthHeaders(),
//           }),

//           fetch(`${API_BASE_URL}/Analytics/ResolutionRate`, {
//             headers: getAuthHeaders(),
//           }),

//           fetch(`${API_BASE_URL}/Analytics/AverageResolutionTime`, {
//             headers: getAuthHeaders(),
//           }),

//           fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonths`, {
//             headers: getAuthHeaders(),
//           }),

//           fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonthsOnlySolved`, {
//             headers: getAuthHeaders(),
//           }),
//         ]);

//         const totalData = await totalRes.json();
//         const rateData = await rateRes.json();
//         const avgData = await avgRes.json();
//         const monthlyTotal = await monthlyTotalRes.json();
//         const monthlySolved = await monthlySolvedRes.json();

//         // =====================
//         // FIX TOTAL + RATE
//         // =====================
//         setTotalIncidentsApi(totalData.total || 0);
//         setResolutionRateApi(parseFloat(rateData.rate) || 0);
//         setAvgTime(avgData.averageFormatted || "0h 0m");

//         // =====================
//         // FIX CHART DATA
//         // =====================
//         const mergedChart = monthlyTotal.map((item, index) => ({
//           month: item.month,
//           incidents: item.count,
//           resolved: monthlySolved[index]?.count || 0,
//         }));

//         setChartData(mergedChart);

//         // =====================
//         // CATEGORY (لو مش موجود من الباك هنسيبه فاضي)
//         // =====================
//         setCategoriesData([]);

//         setLoading(false);
//       } catch (error) {
//         console.error("Analytics Error:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // =====================
//   // LOADING
//   // =====================
//   if (loading) {
//     return (
//       <div className="w-full p-8 overflow-y-auto">
//         <p className="text-slate-500">Loading analytics...</p>
//       </div>
//     );
//   }

//   // =====================
//   // CALCULATIONS
//   // =====================
//   const totalIncidents = totalIncidentsApi;

//   const totalResolved = chartData.reduce(
//     (sum, i) => sum + i.resolved,
//     0
//   );

//   const resolutionRate =
//     resolutionRateApi || ((totalResolved / totalIncidents) * 100 || 0).toFixed(1);

//   const maxIncidents = Math.max(...chartData.map((i) => i.incidents), 1);
//   const maxResolved = Math.max(...chartData.map((i) => i.resolved), 1);

//   const highPriority = 0;

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">Analytics</h1>
//           <p className="text-gray-500">Track performance metrics</p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

//           <div className="bg-white p-6 rounded-xl border">
//             <p>Total Incidents</p>
//             <p className="text-3xl font-bold">{totalIncidents}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl border">
//             <p>Resolution Rate</p>
//             <p className="text-3xl font-bold">{resolutionRate}%</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl border">
//             <p>Avg Time</p>
//             <p className="text-3xl font-bold">{avgTime}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl border">
//             <p>High Priority</p>
//             <p className="text-3xl font-bold">{highPriority}</p>
//           </div>

//         </div>

//         {/* CHARTS */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* INCIDENTS */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="font-bold mb-4">Incidents</h2>

//             {chartData.map((item) => (
//               <div key={item.month} className="mb-3">
//                 <div className="flex justify-between text-sm">
//                   <span>{item.month}</span>
//                   <span>{item.incidents}</span>
//                 </div>

//                 <div className="w-full bg-gray-200 h-2 rounded">
//                   <div
//                     className="bg-blue-500 h-2 rounded"
//                     style={{
//                       width: `${(item.incidents / maxIncidents) * 100}%`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RESOLVED */}
//           <div className="bg-white p-6 rounded-xl border">
//             <h2 className="font-bold mb-4">Resolved</h2>

//             {chartData.map((item) => (
//               <div key={item.month} className="mb-3">
//                 <div className="flex justify-between text-sm">
//                   <span>{item.month}</span>
//                   <span>{item.resolved}</span>
//                 </div>

//                 <div className="w-full bg-gray-200 h-2 rounded">
//                   <div
//                     className="bg-green-500 h-2 rounded"
//                     style={{
//                       width: `${(item.resolved / maxResolved) * 100}%`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AnalyticsPage;











import React, { useState, useEffect } from "react";
import { API_BASE_URL, getAuthHeaders } from "../config/api";

const AnalyticsPage = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalIncidentsApi, setTotalIncidentsApi] = useState(0);
  const [resolutionRateApi, setResolutionRateApi] = useState(0);
  const [avgTime, setAvgTime] = useState("—");
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [totalRes, rateRes, avgRes, monthlyTotalRes, monthlySolvedRes] =
          await Promise.all([
            fetch(`${API_BASE_URL}/Analytics/TotalIncidents`, { headers: getAuthHeaders() }),
            fetch(`${API_BASE_URL}/Analytics/ResolutionRate`, { headers: getAuthHeaders() }),
            fetch(`${API_BASE_URL}/Analytics/AverageResolutionTime`, { headers: getAuthHeaders() }),
            fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonths`, { headers: getAuthHeaders() }),
            fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonthsOnlySolved`, { headers: getAuthHeaders() }),
          ]);

        const totalData = await totalRes.json();
        const rateData = await rateRes.json();
        const avgData = await avgRes.json();
        const monthlyTotal = await monthlyTotalRes.json();
        const monthlySolved = await monthlySolvedRes.json();

        // Stats
        setTotalIncidentsApi(totalData?.total ?? totalData?.value ?? 0);
        setResolutionRateApi(parseFloat(rateData?.rate ?? rateData?.value ?? 0));
        setAvgTime(avgData?.averageFormatted ?? avgData?.average ?? "—");

        // Chart data
        const totalArray = Array.isArray(monthlyTotal) ? monthlyTotal : [];
        const solvedArray = Array.isArray(monthlySolved) ? monthlySolved : [];

        const merged = totalArray.map((item, index) => ({
          month: item.month ?? item.name ?? `M${index + 1}`,
          incidents: item.count ?? item.total ?? 0,
          resolved: solvedArray[index]?.count ?? solvedArray[index]?.total ?? 0,
        }));

        setChartData(merged);

        // Try to fetch categories if endpoint exists
        try {
          const catRes = await fetch(`${API_BASE_URL}/Analytics/IncidentsByCategory`, {
            headers: getAuthHeaders(),
          });
          if (catRes.ok) {
            const catData = await catRes.json();
            const catArray = Array.isArray(catData) ? catData : [];
            setCategoriesData(
              catArray.map((c) => ({
                name: c.category ?? c.name ?? "Unknown",
                count: c.count ?? c.total ?? 0,
                color: getCategoryColor(c.category ?? c.name),
              }))
            );
          }
        } catch {
          // categories endpoint optional
        }

        setLoading(false);
      } catch (err) {
        console.error("Analytics Error:", err);
        setError("Failed to load analytics data. Please check your connection.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCategoryColor = (name) => {
    const map = {
      Fire: "text-red-500",
      Medical: "text-orange-500",
      Crime: "text-blue-500",
      Infrastructure: "text-green-500",
    };
    return map[name] || "text-purple-500";
  };

  // ─── Calculations ───────────────────────────────────────
  const totalResolved = chartData.reduce((sum, i) => sum + i.resolved, 0);
  const resolutionRate =
    resolutionRateApi > 0
      ? resolutionRateApi.toFixed(1)
      : totalIncidentsApi > 0
      ? ((totalResolved / totalIncidentsApi) * 100).toFixed(1)
      : "0.0";

  const maxIncidents = Math.max(...chartData.map((i) => i.incidents), 1);
  const maxResolved = Math.max(...chartData.map((i) => i.resolved), 1);

  const statCards = [
    {
      label: "Total Incidents",
      value: totalIncidentsApi,
      trend: "",
      trendClass: "text-gray-400",
      icon: "warning",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-500",
    },
    {
      label: "Resolution Rate",
      value: `${resolutionRate}%`,
      trend: "",
      trendClass: "text-green-600",
      icon: "check_circle",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-500",
    },
    {
      label: "Avg Response Time",
      value: avgTime,
      trend: "",
      trendClass: "text-gray-400",
      icon: "schedule",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-500",
    },
    {
      label: "Months Tracked",
      value: chartData.length,
      trend: "",
      trendClass: "text-gray-400",
      icon: "calendar_month",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-500",
    },
  ];

  // ─── Loading ─────────────────────────────────────────────
  if (loading) {
    return (
      <div className="w-full p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4">
            Loading analytics...
          </p>
        </div>
      </div>
    );
  }

  // ─── Error ────────────────────────────────────────────────
  if (error) {
    return (
      <div className="w-full p-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="material-symbols-outlined text-red-500 text-5xl">error</span>
          <p className="mt-4 text-red-600 dark:text-red-400 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#022F72] text-white rounded-lg hover:bg-[#022F72]/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track incident trends and performance metrics
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{card.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {card.value}
                  </p>
                  {card.trend && (
                    <p className={`${card.trendClass} text-sm mt-1`}>{card.trend}</p>
                  )}
                </div>
                <div className={`${card.iconBg} p-2 rounded-lg`}>
                  <span className={`material-symbols-outlined ${card.iconColor}`}>
                    {card.icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {chartData.length === 0 ? (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
            <span className="material-symbols-outlined text-5xl mb-4 block text-gray-300">bar_chart</span>
            <p className="font-medium">No monthly data available yet.</p>
            <p className="text-sm mt-1">Data will appear here once incidents are recorded.</p>
          </div>
        ) : (
          <>
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

              {/* Incidents Trend */}
              <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Incident Trends
                </h2>
                <div className="space-y-3">
                  {chartData.map((item) => (
                    <div key={item.month}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
                        <span className="text-gray-900 dark:text-white font-semibold">
                          {item.incidents}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#022F72] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(item.incidents / maxIncidents) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resolution Trend */}
              <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Resolution Comparison
                </h2>
                <div className="space-y-3">
                  {chartData.map((item) => (
                    <div key={`res-${item.month}`}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
                        <span className="text-gray-900 dark:text-white font-semibold">
                          {item.resolved}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(item.resolved / maxResolved) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories */}
            {categoriesData.length > 0 && (
              <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Incident Categories
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categoriesData.map((cat) => {
                    const percentage =
                      totalIncidentsApi > 0
                        ? ((cat.count / totalIncidentsApi) * 100).toFixed(1)
                        : "0.0";
                    return (
                      <div
                        key={cat.name}
                        className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <p className={`text-2xl font-bold ${cat.color}`}>{cat.count}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cat.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{percentage}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;































