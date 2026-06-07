// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
  
//   // البيانات الثابتة
//   const MOCK_DATA = [
//     { id: "2024-0715-001", type: "Fire", category: "Fire", priority: "High", aiClass: "Structural Fire - 92%", status: "Pending", location: "123 Maple St", time: "02/12/2026 14:30", reporter: "Citizen-****34", description: "Initial reports indicate..." },
//     { id: "2024-0715-002", type: "Medical", category: "Medical", priority: "Medium", aiClass: "Vehicle Collision - 88%", status: "In Progress", location: "Elm & Oak Ave", time: "02/12/2026 13:55", reporter: "Officer-****12", description: "Multiple vehicle collision..." },
//     { id: "2024-0715-003", type: "Crime", category: "Crime", priority: "High", aiClass: "Cardiac Arrest - 95%", status: "Resolved", location: "456 Pine Ln", time: "02/11/2026 22:10", reporter: "Paramedic-****89", description: "Robbery incident..." },
//     { id: "2024-0715-004", type: "Infrastructure", category: "Infrastructure", priority: "Low", aiClass: "Power Outage - 76%", status: "Closed", location: "789 Birch Rd", time: "02/08/2026 18:00", reporter: "Citizen-****56", description: "Bridge maintenance..." }
//   ];

//   // States
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);
//   const [filters, setFilters] = useState({
//     dateRange: 'All',
//     category: 'All',
//     status: 'All',
//     priority: 'All',
//     aiConfidence: 'All'
//   });
//   const [filteredReports, setFilteredReports] = useState(MOCK_DATA);

//   // تطبيق جميع الفلاتر
//   useEffect(() => {
//     let result = [...MOCK_DATA];

//     // 1. Category Filter
//     if (filters.category !== 'All') {
//       result = result.filter(r => r.category === filters.category);
//     }

//     // 2. Priority Filter
//     if (filters.priority !== 'All') {
//       result = result.filter(r => r.priority === filters.priority);
//     }

//     // 3. Status Filter
//     if (filters.status !== 'All') {
//       result = result.filter(r => r.status === filters.status);
//     }

//     // 4. AI Confidence Filter
//     if (filters.aiConfidence !== 'All') {
//       const confValue = parseInt(filters.aiConfidence);
//       result = result.filter(r => {
//         const match = r.aiClass.match(/(\d+)%/);
//         if (match) {
//           const aiValue = parseInt(match[1]);
//           return aiValue >= confValue;
//         }
//         return true;
//       });
//     }

//     // 5. Date Range Filter
//     if (filters.dateRange !== 'All') {
//       const today = new Date(2026, 1, 12); // Feb 12, 2026
//       result = result.filter(r => {
//         try {
//           const [month, day, year] = r.time.split(' ')[0].split('/');
//           const reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          
//           const isToday = reportDate.toDateString() === today.toDateString();
//           const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
//           const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

//           if (filters.dateRange === 'Today') return isToday;
//           if (filters.dateRange === 'Last 7 Days') return reportDate >= last7Days;
//           if (filters.dateRange === 'Last 30 Days') return reportDate >= last30Days;
//           return true;
//         } catch (e) {
//           return true;
//         }
//       });
//     }

//     setFilteredReports(result);
//   }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

//   // Style Functions
//   const getPriorityStyle = (p) => {
//     const styles = {
//       'High': 'bg-red-600 text-white',
//       'Medium': 'bg-orange-500 text-white',
//       'Low': 'bg-green-500 text-white'
//     };
//     return styles[p] || 'bg-gray-500 text-white';
//   };

//   const getStatusStyle = (s) => {
//     const styles = {
//       'Pending': 'bg-yellow-400 text-gray-900',
//       'In Progress': 'bg-cyan-500 text-white',
//       'Resolved': 'bg-green-500 text-white',
//       'Closed': 'bg-gray-500 text-white'
//     };
//     return styles[s] || 'bg-gray-200 text-gray-800';
//   };

//   // Handlers
//   const handleFilterChange = (filterName, value) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//     setOpenFilterMenu(null);
//   };

//   const handleRefresh = () => {
//     setFilters({
//       dateRange: 'All',
//       category: 'All',
//       status: 'All',
//       priority: 'All',
//       aiConfidence: 'All'
//     });
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedIds(filteredReports.map(r => r.id));
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const toggleSelectId = (id) => {
//     setSelectedIds(prev => 
//       prev.includes(id) 
//         ? prev.filter(x => x !== id)
//         : [...prev, id]
//     );
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-6">
//           <p className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Incident Reports</p>
//           <p className="text-slate-500 dark:text-slate-400 text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 mb-4 relative">
//           {[
//             { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//             { label: 'Category', options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//             { label: 'Status', options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//             { label: 'Priority', options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//             { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' }
//           ].map(filter => (
//             <div key={filter.key} className="relative">
//               <button 
//                 onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                 className="flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 hover:bg-slate-50 transition-colors"
//               >
//                 <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter.label}</p>
//                 <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
//               </button>

//               {openFilterMenu === filter.key && (
//                 <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     {filter.options.map(opt => (
//                       <button 
//                         key={opt}
//                         onClick={() => handleFilterChange(filter.key, opt)} 
//                         className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
//                       >
//                         {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Toolbar */}
//         <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//           <div className="flex items-center gap-4">
//             <input 
//               type="checkbox" 
//               className="h-4 w-4 rounded border-slate-300"
//               checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//               onChange={(e) => handleSelectAll(e.target.checked)}
//             />
//             <p className="text-sm text-slate-600 dark:text-slate-400">Select all ({selectedIds.length})</p>
//           </div>
//           <div className="flex gap-2 relative">
//             <button 
//               onClick={handleRefresh}
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Refresh"
//             >
//               <span className="material-symbols-outlined">refresh</span>
//             </button>
//             <button 
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Upload"
//             >
//               <span className="material-symbols-outlined">upload</span>
//             </button>
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)} 
//               className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="More options"
//             >
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {/* Menu */}
//             {isMenuOpen && (
//               <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                 <div className="py-2">
//                   <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                     <span className="material-symbols-outlined text-base">download</span>
//                     <span>Export as CSV</span>
//                   </button>
//                   <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                     <span className="material-symbols-outlined text-base">print</span>
//                     <span>Print</span>
//                   </button>
//                   {selectedIds.length > 0 && (
//                     <>
//                       <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                       <button className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                         <span className="material-symbols-outlined text-base">delete</span>
//                         <span>Delete Selected ({selectedIds.length})</span>
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//           <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//             <thead className="bg-slate-50 dark:bg-slate-800">
//               <tr>
//                 <th className="py-3.5 pl-4 pr-3 w-12 text-left"></th>
//                 {['Report ID', 'Category', 'Priority', 'AI Classification', 'Status', 'Location', 'Date & Time', 'Reporter Info', 'Actions'].map(h => (
//                   <th key={h} className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-50">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//               {filteredReports.length > 0 ? (
//                 filteredReports.map((r) => (
//                   <tr 
//                     key={r.id} 
//                     className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer  transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                     onClick={() => {
//                       selectIncident({
//                         id: r.id,
//                         type: r.type,
//                         location: r.location,
//                         time: r.time,
//                         status: r.status,
//                         description: r.description
//                       });
//                     }}
//                   >
//                     <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                       <input 
//                         type="checkbox" 
//                         checked={selectedIds.includes(r.id)} 
//                         onChange={() => toggleSelectId(r.id)}
//                       />
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-medium">{r.id}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.category}</td>
//                     <td className="px-3 py-4 text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>
//                         {r.priority}
//                       </span>
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.aiClass}</td>
//                     <td className="px-3 py-4 text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>
//                         {r.status}
//                       </span>
//                     </td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.time}</td>
//                     <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                     <td className="px-3 py-4 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
//                       <Link to={`/reports/${r.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
//                         View Details
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
//                     No reports found matching your filters
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
  
//   // البيانات الثابتة
//   const MOCK_DATA = [
//     { id: "2024-0715-001", type: "Fire", category: "Fire", priority: "High", aiClass: "Structural Fire - 92%", status: "Pending", location: "123 Maple St", time: "02/12/2026 14:30", reporter: "Citizen-****34", description: "Initial reports indicate..." },
//     { id: "2024-0715-002", type: "Medical", category: "Medical", priority: "Medium", aiClass: "Vehicle Collision - 88%", status: "In Progress", location: "Elm & Oak Ave", time: "02/12/2026 13:55", reporter: "Officer-****12", description: "Multiple vehicle collision..." },
//     { id: "2024-0715-003", type: "Crime", category: "Crime", priority: "High", aiClass: "Cardiac Arrest - 95%", status: "Resolved", location: "456 Pine Ln", time: "02/11/2026 22:10", reporter: "Paramedic-****89", description: "Robbery incident..." },
//     { id: "2024-0715-004", type: "Infrastructure", category: "Infrastructure", priority: "Low", aiClass: "Power Outage - 76%", status: "Closed", location: "789 Birch Rd", time: "02/08/2026 18:00", reporter: "Citizen-****56", description: "Bridge maintenance..." }
//   ];

//   // States
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);
//   const [filters, setFilters] = useState({
//     dateRange: 'All',
//     category: 'All',
//     status: 'All',
//     priority: 'All',
//     aiConfidence: 'All'
//   });
//   const [filteredReports, setFilteredReports] = useState(MOCK_DATA);

//   // تطبيق جميع الفلاتر
//   useEffect(() => {
//     let result = [...MOCK_DATA];

//     if (filters.category !== 'All') {
//       result = result.filter(r => r.category === filters.category);
//     }
//     if (filters.priority !== 'All') {
//       result = result.filter(r => r.priority === filters.priority);
//     }
//     if (filters.status !== 'All') {
//       result = result.filter(r => r.status === filters.status);
//     }
//     if (filters.aiConfidence !== 'All') {
//       const confValue = parseInt(filters.aiConfidence);
//       result = result.filter(r => {
//         const match = r.aiClass.match(/(\d+)%/);
//         if (match) {
//           const aiValue = parseInt(match[1]);
//           return aiValue >= confValue;
//         }
//         return true;
//       });
//     }
//     if (filters.dateRange !== 'All') {
//       const today = new Date(2026, 1, 12); // Feb 12, 2026
//       result = result.filter(r => {
//         try {
//           const [month, day, year] = r.time.split(' ')[0].split('/');
//           const reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          
//           const isToday = reportDate.toDateString() === today.toDateString();
//           const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
//           const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

//           if (filters.dateRange === 'Today') return isToday;
//           if (filters.dateRange === 'Last 7 Days') return reportDate >= last7Days;
//           if (filters.dateRange === 'Last 30 Days') return reportDate >= last30Days;
//           return true;
//         } catch (e) {
//           return true;
//         }
//       });
//     }

//     setFilteredReports(result);
//   }, [filters]);

//   // Style Functions
//   const getPriorityStyle = (p) => {
//     const styles = {
//       'High': 'bg-red-600 text-white',
//       'Medium': 'bg-orange-500 text-white',
//       'Low': 'bg-green-500 text-white'
//     };
//     return styles[p] || 'bg-gray-500 text-white';
//   };

//   const getStatusStyle = (s) => {
//     const styles = {
//       'Pending': 'bg-yellow-400 text-gray-900',
//       'In Progress': 'bg-cyan-500 text-white',
//       'Resolved': 'bg-green-500 text-white',
//       'Closed': 'bg-gray-500 text-white'
//     };
//     return styles[s] || 'bg-gray-200 text-gray-800';
//   };

//   // Handlers
//   const handleFilterChange = (filterName, value) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//     setOpenFilterMenu(null);
//   };

//   const handleRefresh = () => {
//     setFilters({
//       dateRange: 'All',
//       category: 'All',
//       status: 'All',
//       priority: 'All',
//       aiConfidence: 'All'
//     });
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedIds(filteredReports.map(r => r.id));
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const toggleSelectId = (id) => {
//     setSelectedIds(prev => 
//       prev.includes(id) 
//         ? prev.filter(x => x !== id)
//         : [...prev, id]
//     );
//   };

//   // Delete handler
//   const handleDeleteSelected = () => {
//     // هنا تقدر تضيف API call: DELETE /api/reports مع selectedIds
//     console.log("Deleting reports:", selectedIds);
//     // Simulate delete
//     setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id)));
//     setSelectedIds([]);
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-6">
//             <p className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Incident Reports</p>
//             <p className="text-slate-500 dark:text-slate-400 text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-wrap gap-3 mb-4 relative">
//             {[
//               { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//               { label: 'Category', options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//               { label: 'Status', options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//               { label: 'Priority', options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//               { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' }
//             ].map(filter => (
//               <div key={filter.key} className="relative">
//                 <button 
//                   onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                   className="flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 hover:bg-slate-50 transition-colors"
//                 >
//                   <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter.label}</p>
//                   <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
//                 </button>

//                 {openFilterMenu === filter.key && (
//                   <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                     <div className="py-2">
//                       {filter.options.map(opt => (
//                         <button 
//                           key={opt}
//                           onClick={() => handleFilterChange(filter.key, opt)} 
//                           className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
//                         >
//                           {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : opt}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Toolbar */}
//           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//             <div className="flex items-center gap-4">
//               <input 
//                 type="checkbox" 
//                 className="h-4 w-4 rounded border-slate-300"
//                 checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//                 onChange={(e) => handleSelectAll(e.target.checked)}
//               />
//               <p className="text-sm text-slate-600 dark:text-slate-400">Select all ({selectedIds.length})</p>
//             </div>
//             <div className="flex gap-2 relative">
//               <button 
//                 onClick={handleRefresh}
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Refresh"
//               >
//                 <span className="material-symbols-outlined">refresh</span>
//               </button>
//               {/* <button 
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Upload"
//               >
//                 <span className="material-symbols-outlined">upload</span>
//               </button> */}
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="More options"
//               >
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>

//               {/* Menu */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">download</span>
//                       <span>Export as CSV</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span>
//                       <span>Print</span>
//                     </button>
//                     {selectedIds.length > 0 && (
//                       <>
//                         <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                         <button 
//                           onClick={handleDeleteSelected}
//                           className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm"
//                         >
//                           <span className="material-symbols-outlined text-base">delete</span>
//                           <span>Delete Selected ({selectedIds.length})</span>
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//             <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//               <thead className="bg-slate-50 dark:bg-slate-800">
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 w-12 text-left"></th>
//                   {['Report ID', 'Category', 'Priority', 'AI Classification', 'Status', 'Location', 'Date & Time', 'Reporter Info', 'Actions'].map(h => (
//                     <th key={h} className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-50">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//                 {filteredReports.length > 0 ? (
//                   filteredReports.map((r) => (
//                     <tr 
//                       key={r.id} 
//                       className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer  transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                       onClick={() => {
//                         selectIncident({
//                           id: r.id,
//                           type: r.type,
//                           location: r.location,
//                           time: r.time,
//                           status: r.status,
//                           description: r.description
//                         });
//                       }}
//                     >
//                       <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                         <input 
//                           type="checkbox" 
//                           checked={selectedIds.includes(r.id)} 
//                           onChange={() => toggleSelectId(r.id)}
//                         />
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-medium">{r.id}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.category}</td>
//                       <td className="px-3 py-4 text-sm">
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>
//                           {r.priority}
//                         </span>
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.aiClass}</td>
//                       <td className="px-3 py-4 text-sm">
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>
//                           {r.status}
//                         </span>
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.time}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                       <td className="px-3 py-4 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
//                         <Link to={`/reports/${r.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
//                           View Details
//                         </Link>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
//                       No reports found matching your filters
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;
















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { useT } from '../context/AppContext';
// import { API_BASE_URL, getAuthHeaders } from '../config/api';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
//   const t = useT();

//   const MOCK_DATA = [
//     { id: "2024-0715-001", type: "Fire", category: "Fire", priority: "High", aiClass: "Structural Fire - 92%", status: "Pending", location: "123 Maple St", time: "02/12/2026 14:30", reporter: "Citizen-****34", description: "Initial reports indicate..." },
//     { id: "2024-0715-002", type: "Medical", category: "Medical", priority: "Medium", aiClass: "Vehicle Collision - 88%", status: "In Progress", location: "Elm & Oak Ave", time: "02/12/2026 13:55", reporter: "Officer-****12", description: "Multiple vehicle collision..." },
//     { id: "2024-0715-003", type: "Crime", category: "Crime", priority: "High", aiClass: "Cardiac Arrest - 95%", status: "Resolved", location: "456 Pine Ln", time: "02/11/2026 22:10", reporter: "Paramedic-****89", description: "Robbery incident..." },
//     { id: "2024-0715-004", type: "Infrastructure", category: "Infrastructure", priority: "Low", aiClass: "Power Outage - 76%", status: "Closed", location: "789 Birch Rd", time: "02/08/2026 18:00", reporter: "Citizen-****56", description: "Bridge maintenance..." }
//   ];

//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);

//   const [filters, setFilters] = useState({
//     dateRange: 'All',
//     category: 'All',
//     status: 'All',
//     priority: 'All',
//     aiConfidence: 'All',
//     searchText: '',
//     location: 'All'
//   });

//   const [debouncedSearchText, setDebouncedSearchText] = useState('');


// const [reportsData, setReportsData] = useState([]);
// const [filteredReports, setFilteredReports] = useState([]);
// const [loading, setLoading] = useState(false);


// const exportCSV = () => {
//   const headers = [
//     "Report ID",
//     "Category",
//     "Priority",
//     "AI Class",
//     "Status",
//     "Location",
//     "Time",
//     "Reporter"
//   ];

//   const rows = filteredReports.map(r => [
//     r.id,
//     t.translateApiValue(r.category),
//     t.translateApiValue(r.priority),
//     t.translateApiValue(r.aiClass),
//     t.translateApiValue(r.status),
//     r.location,
//     r.time,
//     r.reporter
//   ]);

//   const csvContent =
//     "data:text/csv;charset=utf-8," +
//     [headers, ...rows].map(e => e.join(",")).join("\n");

//   const link = document.createElement("a");
//   link.href = encodeURI(csvContent);
//   link.download = "reports.csv";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// const handlePrint = () => {
//   window.print();
// };

// // useEffect(() => {
// //   const fetchReports = async () => {
// //     try {
// //       const res = await fetch(
// //         "http://207.180.209.101:5005/api/Authority/GetReports"
// //       );
// //       const data = await res.json();

// //       const reportsArray = Array.isArray(data)
// //         ? data
// //         : data.data || data.reports || [];

// //       const mappedData = reportsArray.map((r, index) => ({
// //         id: r.id || r.reportId || `API-${index}`,
// //         type: r.type || r.category || "Unknown",
// //         category: r.category || r.type || "Unknown",
// //         priority: r.priority || "Low",
// //         aiClass: r.aiClassification || "N/A",
// //         status: r.status || "Pending",
// //         location: r.location || "Unknown",
// //         time: r.time || r.date || "N/A",
// //         reporter: r.reporter || "Unknown",
// //         description: r.description || ""
// //       }));

// //       setFilteredReports(mappedData);
// //       setReportsData(mappedData);
      
// //     } catch (error) {
// //       console.error("API Error:", error);
// //     }
// //   };

// //   fetchReports();
// // }, []);

// useEffect(() => {
//   const fetchReports = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, {
//         headers: getAuthHeaders(),
//       });

//       const data = await res.json();
//       console.log("API Response:", data);

//       const reportsArray = Array.isArray(data)
//         ? data
//         : data.data || data.reports || [];

//       console.log("Reports Array:", reportsArray);

//       const mapped = reportsArray.map((r, i) => ({
//         id: r.report_ID || r.id,
//         category: r.category,
//         priority: "Low",
//         aiClass: r.confidence ? `${r.confidence}%` : "0%",
//         status: r.status,
//         location: r.location,
//         time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//         reporter: r.citizenName || r.reporter,
//         description: ""
//       }));

//       console.log("Mapped Data:", mapped);

//       setReportsData(mapped);
//       setFilteredReports(mapped);

//     } catch (err) {
//       console.error("Fetch Error:", err);
//     }
//   };

//   fetchReports();
// }, []);

// // Debounce search text (300ms delay)
// useEffect(() => {
//   const timer = setTimeout(() => {
//     setDebouncedSearchText(filters.searchText);
//   }, 300);

//   return () => clearTimeout(timer);
// }, [filters.searchText]);

// useEffect(() => {
//   let result = [...reportsData];

//   const now = new Date();

//   // ======================
//   // 🔍 SEARCH TEXT (NEW)
//   // ======================
//   if (debouncedSearchText.trim()) {
//     const searchLower = debouncedSearchText.toLowerCase().trim();
//     result = result.filter(r =>
//       String(r.id || "").toLowerCase().includes(searchLower) ||
//       String(r.category || "").toLowerCase().includes(searchLower) ||
//       String(r.status || "").toLowerCase().includes(searchLower) ||
//       String(r.location || "").toLowerCase().includes(searchLower) ||
//       String(r.reporter || "").toLowerCase().includes(searchLower) ||
//       String(r.description || "").toLowerCase().includes(searchLower)
//     );
//   }

//   // ======================
//   // CATEGORY
//   // ======================
//   if (filters.category !== "All") {
//     result = result.filter(r =>
//       (r.category || "").trim().toLowerCase() === filters.category.toLowerCase()
//     );
//   }

//   // ======================
//   // PRIORITY
//   // ======================
//   if (filters.priority !== "All") {
//     result = result.filter(r =>
//       (r.priority || "").trim().toLowerCase() === filters.priority.toLowerCase()
//     );
//   }

//   // ======================
//   // STATUS
//   // ======================
//   if (filters.status !== "All") {
//     result = result.filter(r =>
//       (r.status || "").trim().toLowerCase() === filters.status.toLowerCase()
//     );
//   }

//   // ======================
//   // 📍 LOCATION (NEW)
//   // ======================
//   if (filters.location !== "All") {
//     const locationLower = filters.location.toLowerCase();
//     result = result.filter(r =>
//       (r.location || "").toLowerCase().includes(locationLower)
//     );
//   }

//   // ======================
//   // 📅 DATE RANGE (IMPROVED)
//   // ======================
//   if (filters.dateRange !== "All") {
//     result = result.filter(r => {
//       if (!r.time) return false;
      
//       let reportDate;
//       const timeStr = String(r.time || "").trim();
      
//       // Try to parse different date formats
//       if (timeStr) {
//         // Try ISO format first (2026-02-12T14:30:00)
//         reportDate = new Date(timeStr);
        
//         // If that fails, try DD/MM/YYYY HH:mm format
//         if (isNaN(reportDate.getTime())) {
//           const match = timeStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
//           if (match) {
//             const [, month, day, year] = match;
//             reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//           } else {
//             // Try YYYY-MM-DD format
//             const match2 = timeStr.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
//             if (match2) {
//               const [, year, month, day] = match2;
//               reportDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//             } else {
//               return true; // Unknown format, include it
//             }
//           }
//         }
//       } else {
//         return true;
//       }

//       if (isNaN(reportDate.getTime())) return true;

//       // Get today's date at midnight
//       const todayStart = new Date();
//       todayStart.setHours(0, 0, 0, 0);
      
//       // Get report date at midnight
//       const reportDateOnly = new Date(reportDate);
//       reportDateOnly.setHours(0, 0, 0, 0);
      
//       // Calculate days difference
//       const diffDays = Math.floor((todayStart - reportDateOnly) / (1000 * 60 * 60 * 24));

//       if (filters.dateRange === "Today") return diffDays === 0;
//       if (filters.dateRange === "Last 7 Days") return diffDays >= 0 && diffDays < 7;
//       if (filters.dateRange === "Last 30 Days") return diffDays >= 0 && diffDays < 30;

//       return true;
//     });
//   }

//   // ======================
//   // 🤖 AI CONFIDENCE (SAFE + FIXED)
//   // ======================
//   if (filters.aiConfidence !== "All") {
//     const minValue = parseInt(filters.aiConfidence);

//     result = result.filter(r => {
//       const match = (r.aiClass || "").match(/(\d+)/);
//       if (!match) return false;

//       const value = parseInt(match[1]);
//       return value >= minValue;
//     });
//   }

//   setFilteredReports(result);
// }, [filters, reportsData, debouncedSearchText]);

//   // Get unique locations for filter options
//   const uniqueLocations = [...new Set(reportsData.map(r => r.location).filter(Boolean))].sort();
//   const locationOptions = ['All', ...uniqueLocations];

// // useEffect(() => {
// //   let result = [...reportsData];

// //   if (filters.category !== 'All') {
// //     result = result.filter(r => r.category === filters.category);
// //   }

// //   if (filters.priority !== 'All') {
// //     result = result.filter(r => r.priority === filters.priority);
// //   }

// //   if (filters.status !== 'All') {
// //     result = result.filter(r => r.status === filters.status);
// //   }

// //   if (filters.aiConfidence !== 'All') {
// //     const confValue = parseInt(filters.aiConfidence);
// //     result = result.filter(r => {
// //       const match = r.aiClass.match(/(\d+)%/);
// //       if (match) {
// //         const aiValue = parseInt(match[1]);
// //         return aiValue >= confValue;
// //       }
// //       return true;
// //     });
// //   }

// //   setFilteredReports(result);
// // }, [filters,  reportsData]);







//   // Style Functions
//   const getPriorityStyle = (p) => {
//     const styles = {
//       'High': 'bg-red-600 text-white',
//       'Medium': 'bg-orange-500 text-white',
//       'Low': 'bg-green-500 text-white'
//     };
//     return styles[p] || 'bg-gray-500 text-white';
//   };

//   const getStatusStyle = (s) => {
//     const styles = {
//       'Pending': 'bg-yellow-400 text-gray-900',
//       'In Progress': 'bg-cyan-500 text-white',
//       'Resolved': 'bg-green-500 text-white',
//       'Closed': 'bg-gray-500 text-white'
//     };
//     return styles[s] || 'bg-gray-200 text-gray-800';
//   };

//   // Handlers
//   const handleFilterChange = (filterName, value) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//     setOpenFilterMenu(null);
//   };

//   // const handleRefresh = () => {
//   //   setFilters({
//   //     dateRange: 'All',
//   //     category: 'All',
//   //     status: 'All',
//   //     priority: 'All',
//   //     aiConfidence: 'All'
//   //   });
//   // };
//   const handleRefresh = async () => {
//   setLoading(true);

//   try {
//     const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, {
//       headers: getAuthHeaders(),
//     });

//     const data = await res.json();

//     const reportsArray = Array.isArray(data) ? data : data.data || [];

//     const mapped = reportsArray.map((r, i) => ({
//       id: r.report_ID,
//       category: r.category,
//       priority: "Low",
//       aiClass: r.confidence ? `${r.confidence}%` : "0%",
//       time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//       status: r.status,
//       location: r.location,
//       reporter: r.citizenName,
//       description: ""
//     }));

//     setReportsData(mapped);
//     setFilteredReports(mapped);

//     // reset filters كمان
//     setFilters({
//       dateRange: 'All',
//       category: 'All',
//       status: 'All',
//       priority: 'All',
//       aiConfidence: 'All',
//       searchText: '',
//       location: 'All'
//     });

//   } catch (err) {
//     console.log(err);
//   }

//   setLoading(false);
// };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedIds(filteredReports.map(r => r.id));
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const toggleSelectId = (id) => {
//     setSelectedIds(prev => 
//       prev.includes(id) 
//         ? prev.filter(x => x !== id)
//         : [...prev, id]
//     );
//   };

//   // Delete handler
//   const handleDeleteSelected = () => {
//     // هنا تقدر تضيف API call: DELETE /api/reports مع selectedIds
//     console.log("Deleting reports:", selectedIds);
//     // Simulate delete
//     setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id)));
//     setSelectedIds([]);
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header + Search */}
//           <div className="flex items-center justify-between gap-4 mb-6">
//             <div>
//               <p className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">Incident Reports</p>
//               <p className="text-slate-500 dark:text-slate-400 text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//             </div>
//             {/* Search Input - Next to Header */}
//             <div className="relative w-96">
//               <input
//                 type="text"
//                 placeholder="Search reports..."
//                 value={filters.searchText}
//                 onChange={(e) => setFilters(prev => ({ ...prev, searchText: e.target.value }))}
//                 className="w-full h-11 px-4 pr-10 pl-12 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               />
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
//               {filters.searchText && (
//                 <button
//                   onClick={() => setFilters(prev => ({ ...prev, searchText: '' }))}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
//                   title="Clear search"
//                 >
//                   <span className="material-symbols-outlined text-base">close</span>
//                 </button>
//               )}
//               {filters.searchText && (
//                 <div className="absolute left-0 top-14 z-10 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-xs text-blue-700 dark:text-blue-200 font-medium whitespace-nowrap">
//                   Found: <span className="font-bold text-blue-900 dark:text-blue-100">{filteredReports.length}</span> result{filteredReports.length !== 1 ? 's' : ''}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-wrap gap-3 mb-4 relative">

//             {[
//               { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//               { label: 'Category', options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//               { label: 'Status', options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//               { label: 'Priority', options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//               { label: 'Location', options: locationOptions, key: 'location' },
//               { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' }
//             ].map(filter => (
//               <div key={filter.key} className="relative">
//                 <button 
//                   onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                   className="flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 hover:bg-slate-50 transition-colors"
//                 >
//                   <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter.label}</p>
//                   <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
//                 </button>

//                 {openFilterMenu === filter.key && (
//                   <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                     <div className="py-2">
//                       {filter.options.map(opt => (
//                         <button 
//                           key={opt}
//                           onClick={() => handleFilterChange(filter.key, opt)} 
//                           className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
//                         >
//                           {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : t.translateApiValue(opt)}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Clear Filters Button */}
//             <button
//               onClick={() => setFilters({
//                 dateRange: 'All',
//                 category: 'All',
//                 status: 'All',
//                 priority: 'All',
//                 aiConfidence: 'All',
//                 searchText: '',
//                 location: 'All'
//               })}
//               className="flex h-9 items-center gap-x-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-slate-700 dark:text-slate-300 text-sm font-medium"
//             >
//               <span className="material-symbols-outlined text-base">clear_all</span>
//               Clear Filters
//             </button>
//           </div>

//           {/* Active Filters Display */}
//           {(Object.entries(filters).some(([key, value]) => value !== 'All' && value !== '') || filteredReports.length < reportsData.length) && (
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Active filters:</span>
//               {filters.searchText && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
//                   🔍 Search: "{filters.searchText}"
//                   <button onClick={() => setFilters(prev => ({ ...prev, searchText: '' }))} className="hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.category !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
//                   Category: {t.translateApiValue(filters.category)}
//                   <button onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))} className="hover:bg-green-200 dark:hover:bg-green-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.status !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
//                   Status: {t.translateApiValue(filters.status)}
//                   <button onClick={() => setFilters(prev => ({ ...prev, status: 'All' }))} className="hover:bg-yellow-200 dark:hover:bg-yellow-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.priority !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded-full">
//                   Priority: {t.translateApiValue(filters.priority)}
//                   <button onClick={() => setFilters(prev => ({ ...prev, priority: 'All' }))} className="hover:bg-red-200 dark:hover:bg-red-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.aiConfidence !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">
//                   AI ≥ {filters.aiConfidence}%
//                   <button onClick={() => setFilters(prev => ({ ...prev, aiConfidence: 'All' }))} className="hover:bg-purple-200 dark:hover:bg-purple-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.dateRange !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs rounded-full">
//                   Date: {filters.dateRange}
//                   <button onClick={() => setFilters(prev => ({ ...prev, dateRange: 'All' }))} className="hover:bg-indigo-200 dark:hover:bg-indigo-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//               {filters.location !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">
//                   Location: {filters.location}
//                   <button onClick={() => setFilters(prev => ({ ...prev, location: 'All' }))} className="hover:bg-orange-200 dark:hover:bg-orange-800/50 rounded-full p-0.5">
//                     <span className="material-symbols-outlined text-xs">close</span>
//                   </button>
//                 </span>
//               )}
//             </div>
//           )}

//           {/* Toolbar */}
//           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//             <div className="flex items-center gap-4">
//               <input 
//                 type="checkbox" 
//                 className="h-4 w-4 rounded border-slate-300"
//                 checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//                 onChange={(e) => handleSelectAll(e.target.checked)}
//               />
//               <p className="text-sm text-slate-600 dark:text-slate-400">Select all ({selectedIds.length})</p>
//             </div>
//             <div className="flex gap-2 relative">
//               <button 
//                 onClick={handleRefresh}
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Refresh"
//               >
//                 {/* <span className="material-symbols-outlined">refresh</span> */}
//                 <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>
//   refresh
// </span>
//               </button>
//               {/* <button 
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Upload"
//               >
//                 <span className="material-symbols-outlined">upload</span>
//               </button> */}
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                 className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="More options"
//               >
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>

//               {/* Menu */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     {/* <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">download</span>
//                       <span>Export as CSV</span>
//                     </button> */}
//                     <button 
//   onClick={exportCSV}
//   className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm"
// >
//   <span className="material-symbols-outlined text-base">download</span>
//   <span>Export as CSV</span>
// </button>
//                     {/* <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span>
//                       <span>Print</span>
//                     </button> */}

//                     <button 
//   onClick={handlePrint}
//   className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm"
// >
//   <span className="material-symbols-outlined text-base">print</span>
//   <span>Print</span>
// </button>
//                     {selectedIds.length > 0 && (
//                       <>
//                         <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                         <button 
//                           onClick={handleDeleteSelected}
//                           className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm"
//                         >
//                           <span className="material-symbols-outlined text-base">delete</span>
//                           <span>Delete Selected ({selectedIds.length})</span>
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//             <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//               <thead className="bg-slate-50 dark:bg-slate-800">
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 w-12 text-left"></th>
//                   {['Report ID', 'Category', 'Priority', 'AI Classification', 'Status', 'Location', 'Date & Time', 'Reporter Info', 'Actions'].map(h => (
//                     <th key={h} className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-50">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//                 {filteredReports.length > 0 ? (
//                   filteredReports.map((r) => (
//                     <tr 
//                       key={r.id} 
//                       className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer  transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                       onClick={() => {
//                         selectIncident({
//                           id: r.id,
//                           type: r.type,
//                           location: r.location,
//                           time: r.time,
//                           status: r.status,
//                           description: r.description
//                         });
//                       }}
//                     >
//                       <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                         <input 
//                           type="checkbox" 
//                           checked={selectedIds.includes(r.id)} 
//                           onChange={() => toggleSelectId(r.id)}
//                         />
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-medium">{r.id}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{t.translateApiValue(r.category)}</td>
//                       <td className="px-3 py-4 text-sm">
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>
//                           {t.translateApiValue(r.priority)}
//                         </span>
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{t.translateApiValue(r.aiClass)}</td>
//                       <td className="px-3 py-4 text-sm">
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>
//                           {t.translateApiValue(r.status)}
//                         </span>
//                       </td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.time}</td>
//                       <td className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                       <td className="px-3 py-4 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
//                         <Link to={`/reports/${r.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
//                           View Details
//                         </Link>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
//                       No reports found matching your filters
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;








// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { useT } from '../context/AppContext';
// import { API_BASE_URL, getAuthHeaders } from '../config/api';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
//   const t = useT();

//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);
//   const [filters, setFilters] = useState({
//     dateRange: 'All', category: 'All', status: 'All',
//     priority: 'All', aiConfidence: 'All', searchText: '', location: 'All'
//   });
//   const [debouncedSearchText, setDebouncedSearchText] = useState('');
//   const [reportsData, setReportsData] = useState([]);
//   const [filteredReports, setFilteredReports] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // ── mobile: show filters panel
//   const [showFilters, setShowFilters] = useState(false);

//   const exportCSV = () => {
//     const headers = ["Report ID","Category","Priority","AI Class","Status","Location","Time","Reporter"];
//     const rows = filteredReports.map(r => [r.id, t.translateApiValue(r.category), t.translateApiValue(r.priority), t.translateApiValue(r.aiClass), t.translateApiValue(r.status), r.location, r.time, r.reporter]);
//     const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
//     const link = document.createElement("a");
//     link.href = encodeURI(csvContent);
//     link.download = "reports.csv";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handlePrint = () => window.print();

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
//         const data = await res.json();
//         const reportsArray = Array.isArray(data) ? data : data.data || data.reports || [];
//         const mapped = reportsArray.map((r) => ({
//           id: r.report_ID || r.id, category: r.category, priority: "Low",
//           aiClass: r.confidence ? `${r.confidence}%` : "0%", status: r.status,
//           location: r.location, time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//           reporter: r.citizenName || r.reporter, description: ""
//         }));
//         setReportsData(mapped);
//         setFilteredReports(mapped);
//       } catch (err) { console.error("Fetch Error:", err); }
//     };
//     fetchReports();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearchText(filters.searchText), 300);
//     return () => clearTimeout(timer);
//   }, [filters.searchText]);

//   useEffect(() => {
//     let result = [...reportsData];
//     if (debouncedSearchText.trim()) {
//       const s = debouncedSearchText.toLowerCase().trim();
//       result = result.filter(r =>
//         String(r.id||"").toLowerCase().includes(s) || String(r.category||"").toLowerCase().includes(s) ||
//         String(r.status||"").toLowerCase().includes(s) || String(r.location||"").toLowerCase().includes(s) ||
//         String(r.reporter||"").toLowerCase().includes(s) || String(r.description||"").toLowerCase().includes(s)
//       );
//     }
//     if (filters.category !== "All") result = result.filter(r => (r.category||"").trim().toLowerCase() === filters.category.toLowerCase());
//     if (filters.priority !== "All") result = result.filter(r => (r.priority||"").trim().toLowerCase() === filters.priority.toLowerCase());
//     if (filters.status   !== "All") result = result.filter(r => (r.status||"").trim().toLowerCase()   === filters.status.toLowerCase());
//     if (filters.location !== "All") result = result.filter(r => (r.location||"").toLowerCase().includes(filters.location.toLowerCase()));
//     if (filters.dateRange !== "All") {
//       result = result.filter(r => {
//         if (!r.time) return false;
//         const timeStr = String(r.time).trim();
//         let reportDate = new Date(timeStr);
//         if (isNaN(reportDate.getTime())) {
//           const m = timeStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
//           if (m) reportDate = new Date(parseInt(m[3]), parseInt(m[1])-1, parseInt(m[2]));
//           else { const m2 = timeStr.match(/(\d{4})-(\d{1,2})-(\d{1,2})/); if (m2) reportDate = new Date(parseInt(m2[1]), parseInt(m2[2])-1, parseInt(m2[3])); else return true; }
//         }
//         if (isNaN(reportDate.getTime())) return true;
//         const todayStart = new Date(); todayStart.setHours(0,0,0,0);
//         const rDate = new Date(reportDate); rDate.setHours(0,0,0,0);
//         const diff = Math.floor((todayStart - rDate) / 86400000);
//         if (filters.dateRange === "Today") return diff === 0;
//         if (filters.dateRange === "Last 7 Days") return diff >= 0 && diff < 7;
//         if (filters.dateRange === "Last 30 Days") return diff >= 0 && diff < 30;
//         return true;
//       });
//     }
//     if (filters.aiConfidence !== "All") {
//       const min = parseInt(filters.aiConfidence);
//       result = result.filter(r => { const m = (r.aiClass||"").match(/(\d+)/); return m ? parseInt(m[1]) >= min : false; });
//     }
//     setFilteredReports(result);
//   }, [filters, reportsData, debouncedSearchText]);

//   const uniqueLocations = [...new Set(reportsData.map(r => r.location).filter(Boolean))].sort();
//   const locationOptions = ['All', ...uniqueLocations];

//   const getPriorityStyle = (p) => ({ High: 'bg-red-600 text-white', Medium: 'bg-orange-500 text-white', Low: 'bg-green-500 text-white' }[p] || 'bg-gray-500 text-white');
//   const getStatusStyle   = (s) => ({ Pending: 'bg-yellow-400 text-gray-900', 'In Progress': 'bg-cyan-500 text-white', Resolved: 'bg-green-500 text-white', Closed: 'bg-gray-500 text-white' }[s] || 'bg-gray-200 text-gray-800');

//   const handleFilterChange = (filterName, value) => { setFilters(prev => ({ ...prev, [filterName]: value })); setOpenFilterMenu(null); };

//   const handleRefresh = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
//       const data = await res.json();
//       const reportsArray = Array.isArray(data) ? data : data.data || [];
//       const mapped = reportsArray.map((r) => ({
//         id: r.report_ID, category: r.category, priority: "Low",
//         aiClass: r.confidence ? `${r.confidence}%` : "0%",
//         time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//         status: r.status, location: r.location, reporter: r.citizenName, description: ""
//       }));
//       setReportsData(mapped); setFilteredReports(mapped);
//       setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });
//     } catch (err) { console.log(err); }
//     setLoading(false);
//   };

//   const handleSelectAll = (checked) => checked ? setSelectedIds(filteredReports.map(r => r.id)) : setSelectedIds([]);
//   const toggleSelectId = (id) => setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
//   const handleDeleteSelected = () => { setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id))); setSelectedIds([]); setIsMenuOpen(false); };

//   const clearFilters = () => setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });
//   const hasActiveFilters = Object.entries(filters).some(([k, v]) => v !== 'All' && v !== '');

//   const FILTER_DEFS = [
//     { label: 'Date Range', options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//     { label: 'Category',   options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//     { label: 'Status',     options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//     { label: 'Priority',   options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//     { label: 'Location',   options: locationOptions, key: 'location' },
//     { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' },
//   ];

//   return (
//     <div className="w-full flex flex-col min-h-0">
//       <div className="flex-1 overflow-y-auto p-4 md:p-8">
//         <div className="max-w-7xl mx-auto">

//           {/* ── Header + Search ── */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
//             <div>
//               <p className="text-slate-900 dark:text-slate-50 text-2xl md:text-3xl font-bold tracking-tight">Incident Reports</p>
//               <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//             </div>
//             {/* Search */}
//             <div className="relative w-full sm:w-80 md:w-96">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
//               <input
//                 type="text"
//                 placeholder="Search reports..."
//                 value={filters.searchText}
//                 onChange={(e) => setFilters(prev => ({ ...prev, searchText: e.target.value }))}
//                 className="w-full h-11 pl-10 pr-8 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#022F72]"
//               />
//               {filters.searchText && (
//                 <button onClick={() => setFilters(prev => ({ ...prev, searchText: '' }))} className="absolute right-3 top-1/2 -translate-y-1/2">
//                   <span className="material-symbols-outlined text-slate-400 text-base">close</span>
//                 </button>
//               )}
//               {filters.searchText && (
//                 <div className="absolute left-0 top-14 z-10 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg text-xs text-blue-700 dark:text-blue-200 font-medium whitespace-nowrap">
//                   Found: <span className="font-bold">{filteredReports.length}</span> result{filteredReports.length !== 1 ? 's' : ''}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ── Filter Toggle (mobile) + Filter Bar (desktop) ── */}
//           <div className="mb-4">
//             {/* Mobile: toggle button */}
//             <div className="flex items-center gap-2 mb-3 md:hidden">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center gap-2 h-9 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium"
//               >
//                 <span className="material-symbols-outlined text-base">filter_list</span>
//                 Filters {hasActiveFilters && <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#022F72] text-white text-xs">{Object.values(filters).filter(v => v !== 'All' && v !== '').length}</span>}
//               </button>
//               {hasActiveFilters && (
//                 <button onClick={clearFilters} className="flex items-center gap-1 h-9 px-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm">
//                   <span className="material-symbols-outlined text-base">clear_all</span>
//                   Clear
//                 </button>
//               )}
//             </div>

//             {/* Filter pills — hidden on mobile unless toggled */}
//             <div className={`flex flex-wrap gap-3 relative ${showFilters ? 'flex' : 'hidden md:flex'}`}>
//               {FILTER_DEFS.map(filter => (
//                 <div key={filter.key} className="relative">
//                   <button
//                     onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                     className={`flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border px-3 hover:bg-slate-50 transition-colors text-sm font-medium ${filters[filter.key] !== 'All' ? 'border-[#022F72] text-[#022F72]' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
//                   >
//                     {filter.label}
//                     {filters[filter.key] !== 'All' && <span className="text-xs">: {filters[filter.key]}</span>}
//                     <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
//                   </button>
//                   {openFilterMenu === filter.key && (
//                     <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48 max-h-60 overflow-y-auto">
//                       <div className="py-2">
//                         {filter.options.map(opt => (
//                           <button key={opt} onClick={() => handleFilterChange(filter.key, opt)}
//                             className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}>
//                             {filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : t.translateApiValue(opt)}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button onClick={clearFilters} className="hidden md:flex h-9 items-center gap-x-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 hover:bg-slate-200 transition-colors text-slate-700 dark:text-slate-300 text-sm font-medium">
//                 <span className="material-symbols-outlined text-base">clear_all</span>
//                 Clear Filters
//               </button>
//             </div>
//           </div>

//           {/* Active filter chips */}
//           {hasActiveFilters && (
//             <div className="flex flex-wrap gap-2 mb-4">
//               <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Active:</span>
//               {filters.searchText && <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">🔍 "{filters.searchText}" <button onClick={() => setFilters(p=>({...p,searchText:''}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.category  !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">Cat: {t.translateApiValue(filters.category)} <button onClick={()=>setFilters(p=>({...p,category:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.status    !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">Status: {t.translateApiValue(filters.status)} <button onClick={()=>setFilters(p=>({...p,status:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.priority  !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded-full">Priority: {t.translateApiValue(filters.priority)} <button onClick={()=>setFilters(p=>({...p,priority:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.aiConfidence !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">AI ≥{filters.aiConfidence}% <button onClick={()=>setFilters(p=>({...p,aiConfidence:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.dateRange !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs rounded-full">Date: {filters.dateRange} <button onClick={()=>setFilters(p=>({...p,dateRange:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//               {filters.location  !== 'All' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">Loc: {filters.location} <button onClick={()=>setFilters(p=>({...p,location:'All'}))}><span className="material-symbols-outlined text-xs">close</span></button></span>}
//             </div>
//           )}

//           {/* Toolbar */}
//           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//             <div className="flex items-center gap-3">
//               <input type="checkbox" className="h-4 w-4 rounded border-slate-300"
//                 checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//                 onChange={(e) => handleSelectAll(e.target.checked)} />
//               <p className="text-sm text-slate-600 dark:text-slate-400 hidden sm:block">Select all ({selectedIds.length})</p>
//               <p className="text-sm text-slate-600 dark:text-slate-400 sm:hidden">({selectedIds.length})</p>
//             </div>
//             <div className="flex gap-2 relative">
//               <button onClick={handleRefresh} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Refresh">
//                 <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>refresh</span>
//               </button>
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     <button onClick={exportCSV} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">download</span><span>Export as CSV</span>
//                     </button>
//                     <button onClick={handlePrint} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span><span>Print</span>
//                     </button>
//                     {selectedIds.length > 0 && (
//                       <>
//                         <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                         <button onClick={handleDeleteSelected} className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                           <span className="material-symbols-outlined text-base">delete</span><span>Delete Selected ({selectedIds.length})</span>
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Table — scrollable horizontally on mobile */}
//           <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//             <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//               <thead className="bg-slate-50 dark:bg-slate-800">
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 w-10 text-left"></th>
//                   {['Report ID','Category','Priority','AI Classification','Status','Location','Date & Time','Reporter','Actions'].map(h => (
//                     <th key={h} className="px-3 py-3.5 text-left text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-50 whitespace-nowrap">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//                 {filteredReports.length > 0 ? filteredReports.map((r) => (
//                   <tr key={r.id}
//                     className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                     onClick={() => selectIncident({ id: r.id, type: r.type, location: r.location, time: r.time, status: r.status, description: r.description })}
//                   >
//                     <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                       <input type="checkbox" checked={selectedIds.includes(r.id)} onChange={() => toggleSelectId(r.id)} />
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{r.id}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{t.translateApiValue(r.category)}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>{t.translateApiValue(r.priority)}</span>
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.translateApiValue(r.aiClass)}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>{t.translateApiValue(r.status)}</span>
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{r.time}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm font-medium whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                       <Link to={`/reports/${r.id}`} className="text-[#022F72] dark:text-blue-400 hover:underline">View Details</Link>
//                     </td>
//                   </tr>
//                 )) : (
//                   <tr>
//                     <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">No reports found matching your filters</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;


















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { useT } from '../context/AppContext';
// import { API_BASE_URL, getAuthHeaders } from '../config/api';

// const IncidentReports = () => {
//   const { selectIncident } = useIncident();
//   const t = useT();

//   const [selectedIds, setSelectedIds] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openFilterMenu, setOpenFilterMenu] = useState(null);
//   const [filters, setFilters] = useState({
//     dateRange: 'All', category: 'All', status: 'All',
//     priority: 'All', aiConfidence: 'All', searchText: '', location: 'All'
//   });
//   const [debouncedSearchText, setDebouncedSearchText] = useState('');
//   const [reportsData, setReportsData] = useState([]);
//   const [filteredReports, setFilteredReports] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   const exportCSV = () => {
//     const headers = ["Report ID","Category","Priority","AI Class","Status","Location","Time","Reporter"];
//     const rows = filteredReports.map(r => [r.id, t.translateApiValue(r.category), t.translateApiValue(r.priority), t.translateApiValue(r.aiClass), t.translateApiValue(r.status), r.location, r.time, r.reporter]);
//     const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
//     const link = document.createElement("a");
//     link.href = encodeURI(csvContent);
//     link.download = "reports.csv";
//     document.body.appendChild(link); link.click(); document.body.removeChild(link);
//   };

//   const handlePrint = () => window.print();

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
//         const data = await res.json();
//         const reportsArray = Array.isArray(data) ? data : data.data || data.reports || [];
//         const mapped = reportsArray.map((r) => ({
//           id: r.report_ID || r.id, category: r.category, priority: "Low",
//           aiClass: r.confidence ? `${r.confidence}%` : "0%", status: r.status,
//           location: r.location, time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//           reporter: r.citizenName || r.reporter, description: ""
//         }));
//         setReportsData(mapped);
//         setFilteredReports(mapped);
//       } catch (err) { console.error("Fetch Error:", err); }
//     };
//     fetchReports();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearchText(filters.searchText), 300);
//     return () => clearTimeout(timer);
//   }, [filters.searchText]);

//   // ─── helper: parse any date string robustly ───────────────────────────────
//   const parseDate = (timeStr) => {
//     if (!timeStr) return null;
//     const s = String(timeStr).trim();

//     // ISO or standard formats (2026-05-01, 2026-05-01T14:30:00)
//     let d = new Date(s);
//     if (!isNaN(d.getTime())) return d;

//     // DD/MM/YYYY or MM/DD/YYYY — try both and pick the one that makes sense
//     const slashMatch = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
//     if (slashMatch) {
//       const [, a, b, year] = slashMatch;
//       // assume DD/MM/YYYY (most common outside US)
//       d = new Date(parseInt(year), parseInt(b) - 1, parseInt(a));
//       if (!isNaN(d.getTime())) return d;
//       // fallback MM/DD/YYYY
//       d = new Date(parseInt(year), parseInt(a) - 1, parseInt(b));
//       if (!isNaN(d.getTime())) return d;
//     }

//     // YYYY-MM-DD without time
//     const dashMatch = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
//     if (dashMatch) {
//       const [, year, month, day] = dashMatch;
//       d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//       if (!isNaN(d.getTime())) return d;
//     }

//     return null;
//   };

//   useEffect(() => {
//     let result = [...reportsData];

//     // Search
//     if (debouncedSearchText.trim()) {
//       const s = debouncedSearchText.toLowerCase().trim();
//       result = result.filter(r =>
//         String(r.id||"").toLowerCase().includes(s) || String(r.category||"").toLowerCase().includes(s) ||
//         String(r.status||"").toLowerCase().includes(s) || String(r.location||"").toLowerCase().includes(s) ||
//         String(r.reporter||"").toLowerCase().includes(s) || String(r.description||"").toLowerCase().includes(s)
//       );
//     }

//     // Category
//     if (filters.category !== "All")
//       result = result.filter(r => (r.category||"").trim().toLowerCase() === filters.category.toLowerCase());

//     // Priority
//     if (filters.priority !== "All")
//       result = result.filter(r => (r.priority||"").trim().toLowerCase() === filters.priority.toLowerCase());

//     // Status
//     if (filters.status !== "All")
//       result = result.filter(r => (r.status||"").trim().toLowerCase() === filters.status.toLowerCase());

//     // Location
//     if (filters.location !== "All")
//       result = result.filter(r => (r.location||"").toLowerCase().includes(filters.location.toLowerCase()));

//     // ── Date Range (fixed) ────────────────────────────────────────────────────
//     if (filters.dateRange !== "All") {
//       const todayStart = new Date();
//       todayStart.setHours(0, 0, 0, 0);

//       result = result.filter(r => {
//         const reportDate = parseDate(r.time);
//         if (!reportDate) return true; // unknown format → include

//         const rDay = new Date(reportDate);
//         rDay.setHours(0, 0, 0, 0);

//         // diffDays: positive = report is in the past
//         const diffDays = Math.round((todayStart - rDay) / 86400000);

//         if (filters.dateRange === "Today")        return diffDays === 0;
//         if (filters.dateRange === "Last 7 Days")  return diffDays >= 0 && diffDays <= 6;
//         if (filters.dateRange === "Last 30 Days") return diffDays >= 0 && diffDays <= 29;
//         return true;
//       });
//     }

//     // AI Confidence
//     if (filters.aiConfidence !== "All") {
//       const min = parseInt(filters.aiConfidence);
//       result = result.filter(r => {
//         const m = (r.aiClass||"").match(/(\d+)/);
//         return m ? parseInt(m[1]) >= min : false;
//       });
//     }

//     setFilteredReports(result);
//   }, [filters, reportsData, debouncedSearchText]);

//   const uniqueLocations = [...new Set(reportsData.map(r => r.location).filter(Boolean))].sort();
//   const locationOptions = ['All', ...uniqueLocations];

//   const getPriorityStyle = (p) => ({ High: 'bg-red-600 text-white', Medium: 'bg-orange-500 text-white', Low: 'bg-green-500 text-white' }[p] || 'bg-gray-500 text-white');
//   const getStatusStyle   = (s) => ({ Pending: 'bg-yellow-400 text-gray-900', 'In Progress': 'bg-cyan-500 text-white', Resolved: 'bg-green-500 text-white', Closed: 'bg-gray-500 text-white' }[s] || 'bg-gray-200 text-gray-800');

//   const handleFilterChange = (filterName, value) => { setFilters(prev => ({ ...prev, [filterName]: value })); setOpenFilterMenu(null); };

//   const handleRefresh = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
//       const data = await res.json();
//       const reportsArray = Array.isArray(data) ? data : data.data || [];
//       const mapped = reportsArray.map((r) => ({
//         id: r.report_ID, category: r.category, priority: "Low",
//         aiClass: r.confidence ? `${r.confidence}%` : "0%",
//         time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
//         status: r.status, location: r.location, reporter: r.citizenName, description: ""
//       }));
//       setReportsData(mapped); setFilteredReports(mapped);
//       setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });
//     } catch (err) { console.log(err); }
//     setLoading(false);
//   };

//   const handleSelectAll = (checked) => checked ? setSelectedIds(filteredReports.map(r => r.id)) : setSelectedIds([]);
//   const toggleSelectId = (id) => setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
//   const handleDeleteSelected = () => { setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id))); setSelectedIds([]); setIsMenuOpen(false); };

//   const clearFilters = () => setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });

//   // ── active filter chips — always visible when any filter is set ────────────
//   const activeChips = [
//     filters.searchText && {
//       key: 'searchText', label: `🔍 "${filters.searchText}"`,
//       color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
//       clear: () => setFilters(p => ({ ...p, searchText: '' }))
//     },
//     filters.category !== 'All' && {
//       key: 'category', label: `Category: ${t.translateApiValue(filters.category)}`,
//       color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
//       clear: () => setFilters(p => ({ ...p, category: 'All' }))
//     },
//     filters.status !== 'All' && {
//       key: 'status', label: `Status: ${t.translateApiValue(filters.status)}`,
//       color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
//       clear: () => setFilters(p => ({ ...p, status: 'All' }))
//     },
//     filters.priority !== 'All' && {
//       key: 'priority', label: `Priority: ${t.translateApiValue(filters.priority)}`,
//       color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
//       clear: () => setFilters(p => ({ ...p, priority: 'All' }))
//     },
//     filters.dateRange !== 'All' && {
//       key: 'dateRange', label: `Date: ${filters.dateRange}`,
//       color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200',
//       clear: () => setFilters(p => ({ ...p, dateRange: 'All' }))
//     },
//     filters.location !== 'All' && {
//       key: 'location', label: `Location: ${filters.location}`,
//       color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
//       clear: () => setFilters(p => ({ ...p, location: 'All' }))
//     },
//     filters.aiConfidence !== 'All' && {
//       key: 'aiConfidence', label: `AI ≥ ${filters.aiConfidence}%`,
//       color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
//       clear: () => setFilters(p => ({ ...p, aiConfidence: 'All' }))
//     },
//   ].filter(Boolean);

//   const hasActiveFilters = activeChips.length > 0;

//   const FILTER_DEFS = [
//     { label: 'Date Range',    options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
//     { label: 'Category',      options: ['All', 'Fire', 'Accident', 'Medical', 'Infrastructure'], key: 'category' },
//     { label: 'Status',        options: ['All', 'Pending', 'In Progress', 'Resolved', 'Closed'], key: 'status' },
//     { label: 'Priority',      options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
//     { label: 'Location',      options: locationOptions, key: 'location' },
//     { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' },
//   ];

//   return (
//     <div className="w-full flex flex-col min-h-0">
//       <div className="flex-1 overflow-y-auto p-4 md:p-8">
//         <div className="max-w-7xl mx-auto">

//           {/* ── Header + Search ── */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
//             <div>
//               <p className="text-slate-900 dark:text-slate-50 text-2xl md:text-3xl font-bold tracking-tight">Incident Reports</p>
//               <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
//             </div>
//             <div className="relative w-full sm:w-80 md:w-96">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
//               <input
//                 type="text"
//                 placeholder="Search reports..."
//                 value={filters.searchText}
//                 onChange={(e) => setFilters(prev => ({ ...prev, searchText: e.target.value }))}
//                 className="w-full h-11 pl-10 pr-8 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#022F72]"
//               />
//               {filters.searchText && (
//                 <button onClick={() => setFilters(prev => ({ ...prev, searchText: '' }))} className="absolute right-3 top-1/2 -translate-y-1/2">
//                   <span className="material-symbols-outlined text-slate-400 text-base">close</span>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* ── Filter Bar ── */}
//           <div className="mb-2">
//             {/* Mobile toggle */}
//             <div className="flex items-center gap-2 mb-3 md:hidden">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center gap-2 h-9 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium"
//               >
//                 <span className="material-symbols-outlined text-base">filter_list</span>
//                 Filters
//                 {hasActiveFilters && (
//                   <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#022F72] text-white text-xs">
//                     {activeChips.length}
//                   </span>
//                 )}
//               </button>
//               {hasActiveFilters && (
//                 <button onClick={clearFilters} className="flex items-center gap-1 h-9 px-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm">
//                   <span className="material-symbols-outlined text-base">clear_all</span>
//                   Clear
//                 </button>
//               )}
//             </div>

//             {/* Filter pills */}
//             <div className={`flex flex-wrap gap-3 relative ${showFilters ? 'flex' : 'hidden md:flex'}`}>
//               {FILTER_DEFS.map(filter => (
//                 <div key={filter.key} className="relative">
//                   <button
//                     onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
//                     className={`flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border px-3 hover:bg-slate-50 transition-colors text-sm font-medium ${
//                       filters[filter.key] !== 'All'
//                         ? 'border-[#022F72] text-[#022F72]'
//                         : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
//                     }`}
//                   >
//                     {filter.label}
//                     {filters[filter.key] !== 'All' && (
//                       <span className="text-xs font-semibold">: {filters[filter.key]}</span>
//                     )}
//                     <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>
//                       expand_more
//                     </span>
//                   </button>
//                   {openFilterMenu === filter.key && (
//                     <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48 max-h-60 overflow-y-auto">
//                       <div className="py-2">
//                         {filter.options.map(opt => (
//                           <button key={opt} onClick={() => handleFilterChange(filter.key, opt)}
//                             className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center justify-between ${
//                               filters[filter.key] === opt
//                                 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium'
//                                 : 'text-slate-700 dark:text-slate-300'
//                             }`}
//                           >
//                             <span>{filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : t.translateApiValue(opt)}</span>
//                             {filters[filter.key] === opt && (
//                               <span className="material-symbols-outlined text-blue-600 text-base">check</span>
//                             )}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button onClick={clearFilters} className="hidden md:flex h-9 items-center gap-x-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 hover:bg-slate-200 transition-colors text-slate-700 dark:text-slate-300 text-sm font-medium">
//                 <span className="material-symbols-outlined text-base">clear_all</span>
//                 Clear Filters
//               </button>
//             </div>
//           </div>

//           {/* ── Active filter chips — always shown under filters ── */}
//           {hasActiveFilters && (
//             <div className="flex flex-wrap items-center gap-2 mb-4 mt-3 px-1">
//               <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
//                 {filteredReports.length} result{filteredReports.length !== 1 ? 's' : ''}
//               </span>
//               <span className="text-slate-300 dark:text-slate-600">·</span>
//               {activeChips.map(chip => (
//                 <span key={chip.key} className={`inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full text-xs font-medium ${chip.color}`}>
//                   {chip.label}
//                   <button
//                     onClick={chip.clear}
//                     className="ml-0.5 flex items-center justify-center w-4 h-4 rounded-full hover:bg-black/10 transition-colors"
//                     title="Remove filter"
//                   >
//                     <span className="material-symbols-outlined text-[11px]">close</span>
//                   </button>
//                 </span>
//               ))}
//               {activeChips.length > 1 && (
//                 <button onClick={clearFilters} className="text-xs text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors underline underline-offset-2">
//                   Clear all
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Toolbar */}
//           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
//             <div className="flex items-center gap-3">
//               <input type="checkbox" className="h-4 w-4 rounded border-slate-300"
//                 checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
//                 onChange={(e) => handleSelectAll(e.target.checked)} />
//               <p className="text-sm text-slate-600 dark:text-slate-400 hidden sm:block">Select all ({selectedIds.length})</p>
//               <p className="text-sm text-slate-600 dark:text-slate-400 sm:hidden">({selectedIds.length})</p>
//             </div>
//             <div className="flex gap-2 relative">
//               <button onClick={handleRefresh} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Refresh">
//                 <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>refresh</span>
//               </button>
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
//                   <div className="py-2">
//                     <button onClick={exportCSV} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">download</span><span>Export as CSV</span>
//                     </button>
//                     <button onClick={handlePrint} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span><span>Print</span>
//                     </button>
//                     {selectedIds.length > 0 && (
//                       <>
//                         <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                         <button onClick={handleDeleteSelected} className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                           <span className="material-symbols-outlined text-base">delete</span><span>Delete Selected ({selectedIds.length})</span>
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
//             <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
//               <thead className="bg-slate-50 dark:bg-slate-800">
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 w-10 text-left"></th>
//                   {['Report ID','Category','Priority','AI Confidence','Status','Location','Date & Time','Reporter','Actions'].map(h => (
//                     <th key={h} className="px-3 py-3.5 text-left text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-50 whitespace-nowrap">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//                 {filteredReports.length > 0 ? filteredReports.map((r) => (
//                   <tr key={r.id}
//                     className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
//                     onClick={() => selectIncident({ id: r.id, type: r.type, location: r.location, time: r.time, status: r.status, description: r.description })}
//                   >
//                     <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
//                       <input type="checkbox" checked={selectedIds.includes(r.id)} onChange={() => toggleSelectId(r.id)} />
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{r.id}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{t.translateApiValue(r.category)}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>{t.translateApiValue(r.priority)}</span>
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.translateApiValue(r.aiClass)}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm">
//                       <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>{t.translateApiValue(r.status)}</span>
//                     </td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{r.time}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
//                     <td className="px-3 py-4 text-xs md:text-sm font-medium whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                       <Link to={`/reports/${r.id}`} className="text-[#022F72] dark:text-blue-400 hover:underline">View Details</Link>
//                     </td>
//                   </tr>
//                 )) : (
//                   <tr>
//                     <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">
//                       No reports found matching your filters
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncidentReports;













import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useIncident } from '../context/IncidentContext';
import { useT } from '../context/AppContext';
import { API_BASE_URL, getAuthHeaders } from '../config/api';

const IncidentReports = () => {
  const { selectIncident } = useIncident();
  const t = useT();
  const location = useLocation();

  const [selectedIds, setSelectedIds] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFilterMenu, setOpenFilterMenu] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: 'All', category: 'All', status: 'All',
    priority: 'All', aiConfidence: 'All', searchText: '', location: 'All'
  });
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const [reportsData, setReportsData] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const exportCSV = () => {
    const headers = ["Report ID","Category","Priority","AI Confidence","Status","Location","Time","Reporter"];
    const rows = filteredReports.map(r => [r.id, t.translateApiValue(r.category), t.translateApiValue(r.priority), r.aiClass, t.translateApiValue(r.status), r.location, r.time, r.reporter]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "reports.csv";
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
  };

  const handlePrint = () => window.print();

  const normalizeAiClass = (confidence) => {
    if (!confidence && confidence !== 0) return "0%";
    const s = String(confidence).trim();
    if (s.includes('%')) return s;
    if (!s || s === "0") return "0%";
    return `${s}%`;
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
        const data = await res.json();
        const reportsArray = Array.isArray(data) ? data : data.data || data.reports || [];
        console.log(JSON.stringify(reportsArray[0], null, 2));
        const mapped = reportsArray.map((r) => ({
          id: String(r.report_ID ?? r.id ?? ""),  // ✅ دايماً string
          category: r.category,
          // priority: "Low",
           priority: r.priority,
          aiClass: normalizeAiClass(r.confidence),
          status: r.status,
          location: r.location,
          time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
          reporter: r.citizenName || r.reporter,
          description: ""
        }));
        setReportsData(mapped);
        console.log(mapped);
        console.log(
  mapped.map(r => ({
    id: r.id,
    time: r.time
  }))
);
  
       console.log(
  reportsArray.map(r => ({
    id: r.report_ID,
    priority: r.priority
  }))
);






        setFilteredReports(mapped);
      } catch (err) { console.error("Fetch Error:", err); }
    };
    fetchReports();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchText(filters.searchText), 300);
    return () => clearTimeout(timer);
  }, [filters.searchText]);

// دا الجديد 
    useEffect(() => {
  const filterType = location.state?.filterType;
  const filterValue = location.state?.filterValue;

  if (!filterType) return;

  if (filterType === "all") {
    setFilters(prev => ({
      ...prev,
      status: "All",
      priority: "All"
    }));
  }

  if (filterType === "status") {
    setFilters(prev => ({
      ...prev,
      status: filterValue
    }));
  }

  if (filterType === "priority") {
    setFilters(prev => ({
      ...prev,
      priority: filterValue
    }));
  }
}, [location.state]);



const parseDate = (timeStr) => {
  if (!timeStr) return null;

  const match = String(timeStr).match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s*(\d{1,2}):(\d{1,2})?$/
  );

  if (match) {
    const [, day, month, year, hour, minute] = match;

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour || 0),
      Number(minute || 0)
    );
  }

  return null;
};



  

  // const parseDate = (timeStr) => {
  //   if (!timeStr) return null;
  //   const s = String(timeStr).trim();
  //   let d = new Date(s);
  //   if (!isNaN(d.getTime())) return d;
   
   
  //   const slashMatch = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  //   if (slashMatch) {
  //     const [, a, b, year] = slashMatch;
  //     d = new Date(parseInt(year), parseInt(b) - 1, parseInt(a));
  //     if (!isNaN(d.getTime())) return d;
  //     d = new Date(parseInt(year), parseInt(a) - 1, parseInt(b));
  //     if (!isNaN(d.getTime())) return d;
  //   }
  //   const dashMatch = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  //   if (dashMatch) {
  //     const [, year, month, day] = dashMatch;
  //     d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  //     if (!isNaN(d.getTime())) return d;
  //   }
  //   return null;
  // };
  
useEffect(() => {
  if (!location.state) return;

  const { filterType, filterValue } = location.state;

  if (filterType === "status") {
    setFilters(prev => ({
      ...prev,
      status: filterValue
    }));
  }

  if (filterType === "highConfidence") {
    setFilters(prev => ({
      ...prev,
      aiConfidence: String(filterValue)
    }));
  }
}, [location]);


  useEffect(() => {
    console.log(filters);
    let result = [...reportsData];
   if (debouncedSearchText.trim()) {
  const s = debouncedSearchText.trim();

  result = result.filter(r =>
    String(r.id ?? "").trim() === s
  );
}





// دا في حاله اشغل السيرش علي كله بس مش مظبوط
//     if (debouncedSearchText.trim()) {
//       const s = debouncedSearchText.toLowerCase().trim();
//       console.log("search =", s);
// console.log(
//   reportsData.map(x => ({
//     id: x.id,
//     type: typeof x.id
//   }))
// );
//       result = result.filter(r =>
//         String(r.id          ?? "").toLowerCase().includes(s) ||
//         String(r.category    ?? "").toLowerCase().includes(s) ||
//         String(r.status      ?? "").toLowerCase().includes(s) ||
//         String(r.location    ?? "").toLowerCase().includes(s) ||
//         String(r.reporter    ?? "").toLowerCase().includes(s) ||
//         String(r.description ?? "").toLowerCase().includes(s) ||
//         String(r.aiClass     ?? "").toLowerCase().includes(s)
//       );
//     }

    if (filters.category !== "All")
      result = result.filter(r => (r.category||"").trim().toLowerCase() === filters.category.toLowerCase());
    if (filters.priority !== "All")
      result = result.filter(r => (r.priority||"").trim().toLowerCase() === filters.priority.toLowerCase());
    if (filters.status !== "All")
      result = result.filter(r => (r.status||"").trim().toLowerCase() === filters.status.toLowerCase());
    if (filters.location !== "All")
      result = result.filter(r => (r.location||"").toLowerCase().includes(filters.location.toLowerCase()));

    if (filters.dateRange !== "All") {
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      result = result.filter(r => {
        const reportDate = parseDate(r.time);
        console.log("Time =", r.time);
     console.log("Parsed Date =", reportDate);

        if (!reportDate) return true;
        const rDay = new Date(reportDate);
        rDay.setHours(0, 0, 0, 0);
        const diffDays = Math.round((todayStart - rDay) / 86400000);
        console.log("Diff Days =", diffDays);
        if (filters.dateRange === "Today")        return diffDays === 0;
        if (filters.dateRange === "Last 7 Days")  return diffDays >= 0 && diffDays <= 6;
        if (filters.dateRange === "Last 30 Days") return diffDays >= 0 && diffDays <= 29;
        return true;
      });
    }

    if (filters.aiConfidence !== "All") {
      const min = parseInt(filters.aiConfidence);
      result = result.filter(r => {
        const m = (r.aiClass||"").match(/(\d+)/);
        return m ? parseInt(m[1]) >= min : false;
      });
    }

    setFilteredReports(result);
  }, [filters, reportsData, debouncedSearchText]);

  const uniqueLocations = [...new Set(reportsData.map(r => r.location).filter(Boolean))].sort();
  const locationOptions = ['All', ...uniqueLocations];

  const getPriorityStyle = (p) => ({ High: 'bg-red-600 text-white', Medium: 'bg-orange-500 text-white', Low: 'bg-green-500 text-white' }[p] || 'bg-gray-500 text-white');
  const getStatusStyle   = (s) => ({ Pending: 'bg-yellow-400 text-gray-900', 'In Progress': 'bg-cyan-500 text-white', Resolved: 'bg-green-500 text-white', Solved: 'bg-green-500 text-white', Closed: 'bg-gray-500 text-white' }[s] || 'bg-gray-200 text-gray-800');

  const handleFilterChange = (filterName, value) => { setFilters(prev => ({ ...prev, [filterName]: value })); setOpenFilterMenu(null); };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/ReportsAuthority/GetAllReports`, { headers: getAuthHeaders() });
      const data = await res.json();
      const reportsArray = Array.isArray(data) ? data : data.data || [];
      const mapped = reportsArray.map((r) => ({
        id: String(r.report_ID ?? ""),  // ✅ دايماً string
        category: r.category,
        priority: r.priority,
        aiClass: normalizeAiClass(r.confidence),
        time: r.dateTime || r.time || r.createdAt || new Date().toISOString(),
        status: r.status,
        location: r.location,
        reporter: r.citizenName,
        description: ""
      }));
      setReportsData(mapped); setFilteredReports(mapped);
      setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });
    } catch (err) { console.log(err); }
    setLoading(false);
  };

  const handleSelectAll = (checked) => checked ? setSelectedIds(filteredReports.map(r => r.id)) : setSelectedIds([]);
  const toggleSelectId = (id) => setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const handleDeleteSelected = () => { setFilteredReports(prev => prev.filter(r => !selectedIds.includes(r.id))); setSelectedIds([]); setIsMenuOpen(false); };
  const clearFilters = () => setFilters({ dateRange:'All', category:'All', status:'All', priority:'All', aiConfidence:'All', searchText:'', location:'All' });

  const activeChips = [
    filters.searchText && { key: 'searchText', label: `🔍 "${filters.searchText}"`, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200', clear: () => setFilters(p => ({ ...p, searchText: '' })) },
    filters.category  !== 'All' && { key: 'category',     label: `Category: ${t.translateApiValue(filters.category)}`,  color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',   clear: () => setFilters(p => ({ ...p, category: 'All' })) },
    filters.status    !== 'All' && { key: 'status',       label: `Status: ${t.translateApiValue(filters.status)}`,      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200', clear: () => setFilters(p => ({ ...p, status: 'All' })) },
    filters.priority  !== 'All' && { key: 'priority',     label: `Priority: ${t.translateApiValue(filters.priority)}`,  color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',             clear: () => setFilters(p => ({ ...p, priority: 'All' })) },
    filters.dateRange !== 'All' && { key: 'dateRange',    label: `Date: ${filters.dateRange}`,                          color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200', clear: () => setFilters(p => ({ ...p, dateRange: 'All' })) },
    filters.location  !== 'All' && { key: 'location',     label: `Location: ${filters.location}`,                      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200', clear: () => setFilters(p => ({ ...p, location: 'All' })) },
    filters.aiConfidence !== 'All' && { key: 'aiConfidence', label: `AI ≥ ${filters.aiConfidence}%`,                   color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200', clear: () => setFilters(p => ({ ...p, aiConfidence: 'All' })) },
  ].filter(Boolean);

  const hasActiveFilters = activeChips.length > 0;

  const FILTER_DEFS = [
    { label: 'Date Range',    options: ['All', 'Today', 'Last 7 Days', 'Last 30 Days'], key: 'dateRange' },
    { label: 'Category',      options: [ 'All','Fire' ], key: 'category' },
    { label: 'Status',        options: ['All', 'Pending', 'In Progress', 'Resolved', ], key: 'status' },
    { label: 'Priority',      options: ['All', 'High', 'Medium', 'Low'], key: 'priority' },
    { label: 'Location',      options: locationOptions, key: 'location' },
    { label: 'AI Confidence', options: ['All', '80', '85', '90', '95'], key: 'aiConfidence' },
  ];

  return (
    <div className="w-full flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-slate-900 dark:text-slate-50 text-2xl md:text-3xl font-bold tracking-tight">Incident Reports</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal mt-1">Manage and track all assigned incident reports.</p>
            </div>
            <div className="relative w-full sm:w-80 md:w-96">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
              <input type="text" placeholder="Search reports..." value={filters.searchText}
                onChange={(e) => setFilters(prev => ({ ...prev, searchText: e.target.value }))}
                className="w-full h-11 pl-10 pr-8 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#022F72]"
              />
              {filters.searchText && (
                <button onClick={() => setFilters(prev => ({ ...prev, searchText: '' }))} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="material-symbols-outlined text-slate-400 text-base">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3 md:hidden">
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 h-9 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <span className="material-symbols-outlined text-base">filter_list</span>
                Filters
                {hasActiveFilters && <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#022F72] text-white text-xs">{activeChips.length}</span>}
              </button>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 h-9 px-3 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm">
                  <span className="material-symbols-outlined text-base">clear_all</span>Clear
                </button>
              )}
            </div>

            <div className={`flex flex-wrap gap-3 relative ${showFilters ? 'flex' : 'hidden md:flex'}`}>
              {FILTER_DEFS.map(filter => (
                <div key={filter.key} className="relative">
                  <button onClick={() => setOpenFilterMenu(openFilterMenu === filter.key ? null : filter.key)}
                    className={`flex h-9 items-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border px-3 hover:bg-slate-50 transition-colors text-sm font-medium ${filters[filter.key] !== 'All' ? 'border-[#022F72] text-[#022F72]' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}>
                    {filter.label}
                    {filters[filter.key] !== 'All' && <span className="text-xs font-semibold">: {filters[filter.key]}</span>}
                    <span className={`material-symbols-outlined text-slate-500 text-base transition-transform ${openFilterMenu === filter.key ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {openFilterMenu === filter.key && (
                    <div className="absolute top-10 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48 max-h-60 overflow-y-auto">
                      <div className="py-2">
                        {filter.options.map(opt => (
                          <button key={opt} onClick={() => handleFilterChange(filter.key, opt)}
                            className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center justify-between ${filters[filter.key] === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium' : 'text-slate-700 dark:text-slate-300'}`}>
                            <span>{filter.key === 'aiConfidence' && opt !== 'All' ? `${opt}% or higher` : t.translateApiValue(opt)}</span>
                            {filters[filter.key] === opt && <span className="material-symbols-outlined text-blue-600 text-base">check</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button onClick={clearFilters} className="hidden md:flex h-9 items-center gap-x-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 hover:bg-slate-200 transition-colors text-slate-700 dark:text-slate-300 text-sm font-medium">
                <span className="material-symbols-outlined text-base">clear_all</span>Clear Filters
              </button>
            </div>
          </div>

          {/* Active chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-4 mt-3 px-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{filteredReports.length} result{filteredReports.length !== 1 ? 's' : ''}</span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              {activeChips.map(chip => (
                <span key={chip.key} className={`inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full text-xs font-medium ${chip.color}`}>
                  {chip.label}
                  <button onClick={chip.clear} className="ml-0.5 flex items-center justify-center w-4 h-4 rounded-full hover:bg-black/10 transition-colors">
                    <span className="material-symbols-outlined text-[11px]">close</span>
                  </button>
                </span>
              ))}
              {activeChips.length > 1 && (
                <button onClick={clearFilters} className="text-xs text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors underline underline-offset-2">Clear all</button>
              )}
            </div>
          )}

          {/* Toolbar */}
          <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900/50 rounded-t-lg border border-b-0 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300"
                checked={selectedIds.length === filteredReports.length && filteredReports.length > 0}
                onChange={(e) => handleSelectAll(e.target.checked)} />
              <p className="text-sm text-slate-600 dark:text-slate-400 hidden sm:block">Select all ({selectedIds.length})</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 sm:hidden">({selectedIds.length})</p>
            </div>
            <div className="flex gap-2 relative">
              <button onClick={handleRefresh} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Refresh">
                <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>refresh</span>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 top-10 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-48">
                  <div className="py-2">
                    <button onClick={exportCSV} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-base">download</span><span>Export as CSV</span>
                    </button>
                    <button onClick={handlePrint} className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-base">print</span><span>Print</span>
                    </button>
                    {selectedIds.length > 0 && (
                      <>
                        <hr className="my-2 border-slate-200 dark:border-slate-700" />
                        <button onClick={handleDeleteSelected} className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
                          <span className="material-symbols-outlined text-base">delete</span><span>Delete Selected ({selectedIds.length})</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-b-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 w-10 text-left"></th>
                  {['Report ID','Category','Priority','AI Confidence','Status','Location','Date & Time','Reporter','Actions'].map(h => (
                    <th key={h} className="px-3 py-3.5 text-left text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-50 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredReports.length > 0 ? filteredReports.map((r) => (
                  <tr key={r.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors ${selectedIds.includes(r.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => selectIncident({ id: r.id, type: r.type, location: r.location, time: r.time, status: r.status, description: r.description })}
                  >
                    <td className="py-4 pl-4 pr-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={selectedIds.includes(r.id)} onChange={() => toggleSelectId(r.id)} />
                    </td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{r.id}</td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{t.translateApiValue(r.category)}</td>
                    <td className="px-3 py-4 text-xs md:text-sm">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getPriorityStyle(r.priority)}`}>{t.translateApiValue(r.priority)}</span>
                    </td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{r.aiClass}</td>
                    <td className="px-3 py-4 text-xs md:text-sm">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${getStatusStyle(r.status)}`}>{t.translateApiValue(r.status)}</span>
                    </td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.location}</td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{r.time}</td>
                    <td className="px-3 py-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">{r.reporter}</td>
                    <td className="px-3 py-4 text-xs md:text-sm font-medium whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <Link to={`/reports/${r.id}`} className="text-[#022F72] dark:text-blue-400 hover:underline">View Details</Link>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="10" className="px-3 py-8 text-center text-slate-500 dark:text-slate-400">No reports found matching your filters</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IncidentReports;
