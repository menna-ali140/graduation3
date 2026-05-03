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



import React, { useState, useEffect } from "react";
import { API_BASE_URL, getAuthHeaders } from '../config/api';
import { useT } from '../context/AppContext';

const AnalyticsPage = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);

  const [totalIncidentsApi, setTotalIncidentsApi] = useState(0);
  const [resolutionRateApi, setResolutionRateApi] = useState(0);
  const [avgTime, setAvgTime] = useState("");
  const t = useT();

  // =====================
  // TOKEN HEADER HELPER
  // =====================
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [
          totalRes,
          rateRes,
          avgRes,
          monthlyTotalRes,
          monthlySolvedRes,
        ] = await Promise.all([
          fetch(`${API_BASE_URL}/Analytics/TotalIncidents`, {
            headers: getAuthHeaders(),
          }),

          fetch(`${API_BASE_URL}/Analytics/ResolutionRate`, {
            headers: getAuthHeaders(),
          }),

          fetch(`${API_BASE_URL}/Analytics/AverageResolutionTime`, {
            headers: getAuthHeaders(),
          }),

          fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonths`, {
            headers: getAuthHeaders(),
          }),

          fetch(`${API_BASE_URL}/Analytics/GetAllReportsInAllMonthsOnlySolved`, {
            headers: getAuthHeaders(),
          }),
        ]);

        const totalData = await totalRes.json();
        const rateData = await rateRes.json();
        const avgData = await avgRes.json();
        const monthlyTotal = await monthlyTotalRes.json();
        const monthlySolved = await monthlySolvedRes.json();

        // =====================
        // FIX TOTAL + RATE
        // =====================
        setTotalIncidentsApi(totalData.total || 0);
        setResolutionRateApi(parseFloat(rateData.rate) || 0);
        setAvgTime(avgData.averageFormatted || "0h 0m");

        // =====================
        // FIX CHART DATA
        // =====================
        const mergedChart = monthlyTotal.map((item, index) => ({
          month: item.month,
          incidents: item.count,
          resolved: monthlySolved[index]?.count || 0,
        }));

        setChartData(mergedChart);

        // =====================
        // CATEGORY (لو مش موجود من الباك هنسيبه فاضي)
        // =====================
        setCategoriesData([]);

        setLoading(false);
      } catch (error) {
        console.error("Analytics Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =====================
  // LOADING
  // =====================
  if (loading) {
    return (
      <div className="w-full p-8 overflow-y-auto">
        <p className="text-slate-500">Loading analytics...</p>
      </div>
    );
  }

  // =====================
  // CALCULATIONS
  // =====================
  const totalIncidents = totalIncidentsApi;

  const totalResolved = chartData.reduce(
    (sum, i) => sum + i.resolved,
    0
  );

  const resolutionRate =
    resolutionRateApi || ((totalResolved / totalIncidents) * 100 || 0).toFixed(1);

  const maxIncidents = Math.max(...chartData.map((i) => i.incidents), 1);
  const maxResolved = Math.max(...chartData.map((i) => i.resolved), 1);

  const highPriority = 0;

  return (
    <div className="w-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-500">Track performance metrics</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl border">
            <p>Total Incidents</p>
            <p className="text-3xl font-bold">{totalIncidents}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <p>Resolution Rate</p>
            <p className="text-3xl font-bold">{resolutionRate}%</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <p>Avg Time</p>
            <p className="text-3xl font-bold">{avgTime}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <p>High Priority</p>
            <p className="text-3xl font-bold">{highPriority}</p>
          </div>

        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* INCIDENTS */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="font-bold mb-4">Incidents</h2>

            {chartData.map((item) => (
              <div key={item.month} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{item.month}</span>
                  <span>{item.incidents}</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{
                      width: `${(item.incidents / maxIncidents) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RESOLVED */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="font-bold mb-4">Resolved</h2>

            {chartData.map((item) => (
              <div key={item.month} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{item.month}</span>
                  <span>{item.resolved}</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{
                      width: `${(item.resolved / maxResolved) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AnalyticsPage;