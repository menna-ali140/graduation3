// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';

// const IncidentDetail = () => {
//   const { id } = useParams();
//   const { selectedIncident, MOCK_INCIDENTS } = useIncident();
  
//   const [reportData, setReportData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);

//   useEffect(() => {
//     const fetchReportDetails = async () => {
//       setLoading(true);
//       try {
//         // Try to find the incident by ID from context or MOCK_INCIDENTS
//         const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
//           ? selectedIncident 
//           : MOCK_INCIDENTS.find(inc => inc.id === id);

//         if (incident) {
//           const mockData = {
//             id: incident.id || "#INC-2024-08-15-001",
//             type: incident.type || "Fire",
//             location: incident.location || "Unknown Location",
//             time: incident.time || Date.now(),
//             status: incident.status || "In Progress",
//             priority: incident.priority || "High",
//             category: incident.type || "Fire",
//             description: incident.description || "Detailed incident description...",
//             reporter: { name: "John D.", time: incident.time || "August 15, 2024, 10:32 AM" },
//             aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] },
//             timeline: [
//               { id: 1, text: `Status: ${incident.status}`, sub: `Report ID: ${incident.id}`, icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//               { id: 2, text: `Type: ${incident.type}`, sub: `Location: ${incident.location}`, icon: "assignment_ind", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
//               { id: 3, text: "Report Details", sub: `Time: ${incident.time}`, icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//             ]
//           };
//           setReportData(mockData);
//         } else {
//           // Fallback to default mock data
//           const mockData = {
//             id: id || "#INC-2024-08-15-001",
//             status: "In Progress",
//             priority: "High",
//             category: "Infrastructure",
//             description: "A large pothole has formed on the eastbound lane of Elm Street...",
//             reporter: { name: "John D.", time: "August 15, 2024, 10:32 AM" },
//             aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] },
//             timeline: [
//               { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//               { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
//               { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//             ]
//           };
//           setReportData(mockData);
//         }
//       } catch (error) {
//         console.error("Error fetching report details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReportDetails();
//   }, [id, selectedIncident, MOCK_INCIDENTS]);

//   if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">Loading Report Details...</div>;

//   const handleRefresh = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   };

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//         <div className="max-w-7xl mx-auto">
//           {/* PageHeading */}
//           <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//             <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
//             <div className="flex items-center gap-2 relative">
//               <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//                 <span className="material-symbols-outlined text-base">download</span> Download Report
//               </button>
//               <button 
//                 onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
//                 className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="Toggle details"
//               >
//                 <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
//               </button>
//               <button 
//                 onClick={handleRefresh}
//                 className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`}
//                 title="Refresh"
//               >
//                 <span className="material-symbols-outlined">refresh</span>
//               </button>
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//                 title="More options"
//               >
//                 <span className="material-symbols-outlined">more_vert</span>
//               </button>
              
//               {/* Menu Dropdown */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                   <div className="py-2">
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">edit</span>
//                       <span>Edit Report</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">share</span>
//                       <span>Share</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">print</span>
//                       <span>Print</span>
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">archive</span>
//                       <span>Archive</span>
//                     </button>
//                     <hr className="my-2 border-slate-200 dark:border-slate-700" />
//                     <button className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 text-sm">
//                       <span className="material-symbols-outlined text-base">delete</span>
//                       <span>Delete Report</span>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </header>

//           {/* Chips - Dynamic Values */}
//           <div className="flex gap-3 mb-8 flex-wrap">
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
//               <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
//             </div>
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//               <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
//             </div>
//             <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//               <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
//             </div>
//           </div>

//           {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 flex flex-col gap-8">
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <img className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwHVVjDcrhjoreE48lpV65NrV1ER7AQfKILTI9FeXMCuNLJIQrdf9N92t2xIJN3gebRe2vXSFGMzUZyfVo9lKHdZHW59eVGP4tCdOJt5UQyOEQwShjf9AzRpaozShVFt_bjnlLDEFLFC12qWPQWSxvnRDDZ4QXGO5NOsDAWljoMphF19tpNxAv75zaIXw9bpcp2ZncUkE0ltP1rxxHsKkloAzRI7FhQr8Wxf-4K5w-ZG4rZddm_2PXdDZ17zmVfKA5c09Jq4DnS_7j" alt="Media 1"/>
//                   <img className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByQl_twm0gmLW8j0b7Cjv3F5Ntriy6J5gsIj2JVbXQE3Ke6ctPsrICdDNBID9N2-U7MTX9b8adq7-NJKltJFD6uNOhA1zxsv5RlCbeC2og2EK9JO4TAMyH1lOBNbtk67b5S7Qhckg7i1sKcnfp7g7fb-f_uGLPcn_nJJtmaVrnw0uV4subrk9pj10ds_aOl4lFDctzf8MqyIobqjSC8QAOBQncBgMKBlI6T6B8TKKIGN5xpv8n0GmxwjaX3OBNstxIV4hCHRl9X80y" alt="Media 2"/>
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative">
//                     <img className="rounded-lg aspect-video object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLFbRRjIMPlkOpG5Ppa_rJbmTS_x1sNmLZdQgz-1gPAElH1_HavZEiYZOBg35R6uiWx_GXwoFtSaMAD4-KTSNhNcpJnJAysDbUG9D3wHNbTOijVufI8tHPsKRQo1jRsttXO5p30HqU26ul2acB3gy-PVgns4XFKlv39NXYYxDBsSqcEyjJ8WmifqXMh03CRo80FLX27p_8y5J1BoqiRBufI-a0STVFe9gnEt0tCRUfIrwgU4HK8h7HyAcabn_-t-XWa4J4ekVB1pU" alt="Video thumb"/>
//                     <span className="material-symbols-outlined text-white text-5xl absolute">play_circle</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
//                   <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMLaA4IgrDDhBYONE10OHSY7rD0fiAhNNC5m7oInMfI-ms7NusBSraPuprXTFyhh4RZf-VWjpXhoWvTAu432spD5n63UxXkWv8x3ru1Hg5UXlhMEJp3D45RZxewPXq3SwnZ_olhumiriHXe2A0f3X66mOdB8ymFEKe23lXxAnbMultYMKKLHyU-aBnRMRgOfvWWnhOq-9YW2Qhs8Yz3rzKc8Xk0O8wPr8fZbnn52IY106DU_RqK7fZ9gP3qvw5shOT1tSVVdK6Y2m" alt="Map View"/>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 flex flex-col gap-8">
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full">Update Status</button>
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full">Add Internal Note</button>
//                   <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full">Escalate</button>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.name}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.time}</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {reportData.aiAnalysis.entities.map(entity => (
//                         <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
//                 <div className="flex flex-col gap-6">
//                   {reportData.timeline.map((item, index) => (
//                     <div className="flex gap-4" key={item.id}>
//                       <div className="flex flex-col items-center">
//                         <div className={`flex items-center justify-center size-8 rounded-full ${item.color}`}>
//                           <span className="material-symbols-outlined text-base">{item.icon}</span>
//                         </div>
//                         {index !== reportData.timeline.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
//                       </div>
//                       <div>
//                         <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
//                         <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           )}
//         </div>
//     </div>
//   );
// };

// export default IncidentDetail;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon issue with Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// const IncidentDetail = () => {
//   const { id } = useParams();
//   const { selectedIncident, MOCK_INCIDENTS } = useIncident();

//   const [reportData, setReportData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);

//   useEffect(() => {
//     const fetchReportDetails = async () => {
//       setLoading(true);
//       try {
//         const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
//           ? selectedIncident 
//           : MOCK_INCIDENTS.find(inc => inc.id === id);

//         const mockData = incident
//           ? {
//               id: incident.id || "#INC-2024-08-15-001",
//               type: incident.type || "Fire",
//               location: incident.location || "Unknown Location",
//               time: incident.time || "July 15, 2024, 14:32",
//               status: incident.status || "In Progress",
//               priority: incident.priority || "High",
//               category: incident.type || "Fire",
//               description: incident.description || "Detailed incident description...",
//               reporter: { name: "John D.", time: incident.time || "July 15, 2024, 14:32" },
//               aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] },
//               timeline: [
//                 { id: 1, text: `Status: ${incident.status}`, sub: `Report ID: ${incident.id}`, icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//                 { id: 2, text: `Type: ${incident.type}`, sub: `Location: ${incident.location}`, icon: "assignment_ind", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
//                 { id: 3, text: "Report Details", sub: `Time: ${incident.time}`, icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//               ]
//             }
//           : {
//               id: id || "#INC-2024-08-15-001",
//               status: "In Progress",
//               priority: "High",
//               category: "Infrastructure",
//               description: "A large pothole has formed on the eastbound lane of Elm Street...",
//               reporter: { name: "John D.", time: "July 15, 2024, 14:32" },
//               aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] },
//               timeline: [
//                 { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//                 { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
//                 { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//               ]
//             };

//         setReportData(mockData);
//       } catch (error) {
//         console.error("Error fetching report details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReportDetails();
//   }, [id, selectedIncident, MOCK_INCIDENTS]);

//   if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">Loading Report Details...</div>;

//   const handleRefresh = () => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 500);
//   };

//   const handleAction = (action) => console.log('Action clicked:', action);

//   const coords = { lat: 34.0522, lng: -118.2437 };

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Page Heading */}
//         <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//           <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
//           <div className="flex items-center gap-2 relative">
//             <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//               <span className="material-symbols-outlined text-base">download</span> Download Report
//             </button>
//             <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Toggle details">
//               <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
//             </button>
//             <button onClick={handleRefresh} className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`} title="Refresh">
//               <span className="material-symbols-outlined">refresh</span>
//             </button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {isMenuOpen && (
//               <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                 <div className="py-2">
//                   {['Edit Report', 'Share', 'Print', 'Archive', 'Delete Report'].map((item, idx) => (
//                     <button key={idx} className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${item.includes('Delete') ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>
//                       <span className="material-symbols-outlined text-base">{item === 'Edit Report' ? 'edit' : item === 'Share' ? 'share' : item === 'Print' ? 'print' : item === 'Archive' ? 'archive' : 'delete'}</span>
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* Chips */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
//             <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//             <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//             <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
//           </div>
//         </div>

//         {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 flex flex-col gap-8">
//               {/* Report Description */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
//               </div>

//               {/* Submitted Media - Display Only */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
//                     <span className="text-white text-sm">Media display only</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Map */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <div className="aspect-video rounded-lg overflow-hidden">
//                   <MapContainer center={[coords.lat, coords.lng]} zoom={13} className="h-full w-full rounded-lg">
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                     <Marker position={[coords.lat, coords.lng]}>
//                       <Popup>Incident Location: {reportData.location}</Popup>
//                     </Marker>
//                   </MapContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 flex flex-col gap-8">
//               {/* Actions */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   {['Update Status', 'Add Internal Note', 'Escalate'].map(a => (
//                     <button key={a} onClick={() => handleAction(a)} className={`flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg ${a === 'Update Status' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10'} transition-colors w-full`}>
//                       {a}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Reporter Info & AI Analysis & Timeline */}
//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
//                 {/* Reporter Information */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.name}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.reporter.time}</p>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {reportData.aiAnalysis.entities.map(entity => (
//                         <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Activity Timeline */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
//                   <div className="flex flex-col gap-6">
//                     {reportData.timeline.map((item, index) => (
//                       <div className="flex gap-4" key={item.id}>
//                         <div className="flex flex-col items-center">
//                           <div className={`flex items-center justify-center size-8 rounded-full ${item.color}`}>
//                             <span className="material-symbols-outlined text-base">{item.icon}</span>
//                           </div>
//                           {index !== reportData.timeline.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
//                         </div>
//                         <div>
//                           <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
//                           <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncidentDetail;




// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';

// const BASE_URL = 'http://207.180.209.101:5000/api/ReportsAuthority';

// // Status helpers
// const STATUS_MAP = { 1: 'Pending', 2: 'In Progress', 3: 'Solved' };
// const STATUS_COLORS = {
//   Pending:     'bg-yellow-500/20 text-yellow-800 dark:text-yellow-300',
//   'In Progress': 'bg-blue-500/20 text-blue-800 dark:text-blue-300',
//   Solved:      'bg-green-500/20 text-green-800 dark:text-green-300',
// };
// const TIMELINE_ICONS = {
//   Pending:     { icon: 'flag',         color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
//   'In Progress': { icon: 'assignment_ind', color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400' },
//   Solved:      { icon: 'check_circle', color: 'bg-green-500/20 text-green-600 dark:text-green-400' },
// };

// const formatTimestamp = (ts) => {
//   if (!ts) return '—';
//   const d = new Date(ts);
//   return isNaN(d) ? ts : d.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
// };

// // ── UpdateStatus Modal ────────────────────────────────────────────────────────
// const UpdateStatusModal = ({ currentStatus, reportId, onClose, onUpdated }) => {
//   const [selected, setSelected] = useState('');
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState('');

//   const handleSubmit = async () => {
//     if (!selected) return;
//     setLoading(true);
//     setError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/UpdateStatus`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ reportId: Number(reportId), newStatus: Number(selected) }),
//       });
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       onUpdated(STATUS_MAP[selected]);
//       onClose();
//     } catch (e) {
//       setError(`Failed to update: ${e.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-sm shadow-2xl">
//         <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-1">Update Status</h3>
//         <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
//           Current: <span className="font-medium">{currentStatus}</span>
//         </p>

//         <div className="flex flex-col gap-2 mb-4">
//           {Object.entries(STATUS_MAP).map(([val, label]) => (
//             <label
//               key={val}
//               className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
//                 selected === val
//                   ? 'border-primary bg-primary/10'
//                   : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="status"
//                 value={val}
//                 checked={selected === val}
//                 onChange={(e) => setSelected(e.target.value)}
//                 className="accent-primary"
//               />
//               <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[label]}`}>{label}</span>
//             </label>
//           ))}
//         </div>

//         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//         <div className="flex gap-2">
//           <button
//             onClick={onClose}
//             className="flex-1 h-10 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={!selected || loading}
//             className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving…' : 'Confirm'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── Main Component ────────────────────────────────────────────────────────────
// const IncidentDetail = () => {
//   const { id } = useParams();
//   const reportId = id;

//   const [reportData,      setReportData]      = useState(null);
//   const [timeline,        setTimeline]        = useState([]);
//   const [loadingDetails,  setLoadingDetails]  = useState(true);
//   const [loadingTimeline, setLoadingTimeline] = useState(true);
//   const [detailsError,    setDetailsError]    = useState('');
//   const [timelineError,   setTimelineError]   = useState('');

//   const [isMenuOpen,        setIsMenuOpen]        = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
//   const [showStatusModal,   setShowStatusModal]   = useState(false);

//   // ── Fetch report details ──────────────────────────────────────────────────
//   const fetchDetails = useCallback(async () => {
//     setLoadingDetails(true);
//     setDetailsError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/GetReportDetails/${reportId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const text = await res.text();
//       const data = text ? JSON.parse(text) : null;

//       if (!res.ok || !data || data?.message === 'Report not found.') {
//         setDetailsError(data?.message || `Report #${reportId} not found.`);
//         setReportData(null);
//       } else {
//         setReportData(data);
//       }
//     } catch (e) {
//       setDetailsError(`Could not load report details: ${e.message}`);
//     } finally {
//       setLoadingDetails(false);
//     }
//   }, [reportId]);

//   // ── Fetch activity / timeline ─────────────────────────────────────────────
//   const fetchActivity = useCallback(async () => {
//     setLoadingTimeline(true);
//     setTimelineError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/GetReportActivity?reportId=${reportId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const text = await res.text();
//       const data = text ? JSON.parse(text) : null;

//       if (!res.ok || !data) {
//         setTimelineError(data?.message || `HTTP ${res.status}`);
//         setTimeline([]);
//       } else {
//         // API returns { report_ID, timeline: [...] }
//         setTimeline(data?.timeline ?? []);
//       }
//     } catch (e) {
//       setTimelineError(`Could not load activity: ${e.message}`);
//       setTimeline([]);
//     } finally {
//       setLoadingTimeline(false);
//     }
//   }, [reportId]);

//   useEffect(() => {
//     fetchDetails();
//     fetchActivity();
//   }, [fetchDetails, fetchActivity]);

//   const handleRefresh = () => {
//     fetchDetails();
//     fetchActivity();
//   };

//   const handleStatusUpdated = (newStatus) => {
//     setReportData((prev) => prev ? { ...prev, status: newStatus } : prev);
//     fetchActivity(); // refresh timeline after status change
//   };

//   // ── Loading state ─────────────────────────────────────────────────────────
//   if (loadingDetails) {
//     return (
//       <div className="p-8 text-center text-text-light dark:text-text-dark animate-pulse">
//         Loading Report Details…
//       </div>
//     );
//   }

//   // ── "Not found" state ─────────────────────────────────────────────────────
//   if (detailsError) {
//     return (
//       <div className="p-8 text-center">
//         <p className="text-red-500 font-medium mb-2">{detailsError}</p>
//         <p className="text-slate-500 text-sm">Report ID: {reportId}</p>
//         <button
//           onClick={handleRefresh}
//           className="mt-4 px-4 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   // ── Derived display values ────────────────────────────────────────────────
//   const status   = reportData?.status   ?? '—';
//   const priority = reportData?.priority ?? '—';
//   const category = reportData?.category ?? reportData?.type ?? '—';

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">

//         {/* ── Header ── */}
//         <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//           <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
//             Report Details: #{reportId}
//           </h1>

//           <div className="flex items-center gap-2 relative">
//             <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//               <span className="material-symbols-outlined text-base">download</span>
//               Download Report
//             </button>

//             <button
//               onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
//               className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Toggle details"
//             >
//               <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>
//                 expand_more
//               </span>
//             </button>

//             <button
//               onClick={handleRefresh}
//               className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loadingDetails || loadingTimeline ? 'animate-spin' : ''}`}
//               title="Refresh"
//             >
//               <span className="material-symbols-outlined">refresh</span>
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="More options"
//             >
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {isMenuOpen && (
//               <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                 <div className="py-2">
//                   {[
//                     { label: 'Edit Report', icon: 'edit' },
//                     { label: 'Share',       icon: 'share' },
//                     { label: 'Print',       icon: 'print' },
//                     { label: 'Archive',     icon: 'archive' },
//                     { label: 'Delete Report', icon: 'delete', danger: true },
//                   ].map(({ label, icon, danger }) => (
//                     <button
//                       key={label}
//                       className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${danger ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}
//                     >
//                       <span className="material-symbols-outlined text-base">{icon}</span>
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* ── Status chips ── */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           <div className={`flex h-8 items-center justify-center gap-x-2 rounded-full px-4 ${STATUS_COLORS[status] ?? 'bg-gray-500/20 text-gray-800 dark:text-gray-300'}`}>
//             <p className="text-sm font-medium">Status: {status}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//             <p className="text-sm font-medium">Priority: {priority}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//             <p className="text-sm font-medium">Category: {category}</p>
//           </div>
//         </div>

//         {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//             {/* ── Left column ── */}
//             <div className="lg:col-span-2 flex flex-col gap-8">

//               {/* Description */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
//                   {reportData?.description || '—'}
//                 </p>
//               </div>

//               {/* Submitted Media */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
//                     <span className="text-white text-sm">Media display only</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
//                   {reportData?.location || 'Location not available'}
//                 </p>
//               </div>
//             </div>

//             {/* ── Right column ── */}
//             <div className="lg:col-span-1 flex flex-col gap-8">

//               {/* Actions */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   <button
//                     onClick={() => setShowStatusModal(true)}
//                     className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full"
//                   >
//                     Update Status
//                   </button>
//                   {['Add Internal Note', 'Escalate'].map((a) => (
//                     <button
//                       key={a}
//                       className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full"
//                     >
//                       {a}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Reporter Info + AI Analysis + Timeline */}
//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">

//                 {/* Reporter */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData?.reporter?.name ?? reportData?.reporterName ?? '—'}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{formatTimestamp(reportData?.reporter?.time ?? reportData?.createdAt ?? reportData?.time)}</p>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 {reportData?.aiAnalysis && (
//                   <div className="p-6">
//                     <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                     <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                       <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                       <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                       <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                       <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                       {reportData.aiAnalysis.entities?.length > 0 && (
//                         <>
//                           <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                           <div className="flex flex-wrap gap-2">
//                             {reportData.aiAnalysis.entities.map((entity) => (
//                               <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">
//                                 {entity}
//                               </span>
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* Activity Timeline */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>

//                   {loadingTimeline ? (
//                     <p className="text-sm text-slate-400 animate-pulse">Loading activity…</p>
//                   ) : timelineError ? (
//                     <p className="text-sm text-red-500">{timelineError}</p>
//                   ) : timeline.length === 0 ? (
//                     <p className="text-sm text-slate-400">No activity recorded yet.</p>
//                   ) : (
//                     <div className="flex flex-col gap-6">
//                       {timeline.map((item, index) => {
//                         const cfg = TIMELINE_ICONS[item.status] ?? TIMELINE_ICONS['Pending'];
//                         return (
//                           <div className="flex gap-4" key={index}>
//                             <div className="flex flex-col items-center">
//                               <div className={`flex items-center justify-center size-8 rounded-full ${cfg.color}`}>
//                                 <span className="material-symbols-outlined text-base">{cfg.icon}</span>
//                               </div>
//                               {index !== timeline.length - 1 && (
//                                 <div className="w-px flex-grow bg-border-light dark:border-border-dark mt-1" />
//                               )}
//                             </div>
//                             <div className="pb-1">
//                               <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.message}</p>
//                               <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-0.5">
//                                 {item.status} · {formatTimestamp(item.timestamp)}
//                               </p>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ── Update Status Modal ── */}
//       {showStatusModal && (
//         <UpdateStatusModal
//           currentStatus={status}
//           reportId={reportId}
//           onClose={() => setShowStatusModal(false)}
//           onUpdated={handleStatusUpdated}
//         />
//       )}
//     </div>
//   );
// };

// export default IncidentDetail;







// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';

// const BASE_URL = 'http://207.180.209.101:5000/api/ReportsAuthority';

// // Status helpers
// const STATUS_MAP = { 1: 'Pending', 2: 'In Progress', 3: 'Solved' };
// const STATUS_COLORS = {
//   Pending:     'bg-yellow-500/20 text-yellow-800 dark:text-yellow-300',
//   'In Progress': 'bg-blue-500/20 text-blue-800 dark:text-blue-300',
//   Solved:      'bg-green-500/20 text-green-800 dark:text-green-300',
// };
// const TIMELINE_ICONS = {
//   Pending:     { icon: 'flag',         color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
//   'In Progress': { icon: 'assignment_ind', color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400' },
//   Solved:      { icon: 'check_circle', color: 'bg-green-500/20 text-green-600 dark:text-green-400' },
// };

// const formatTimestamp = (ts) => {
//   if (!ts) return '—';
//   const d = new Date(ts);
//   return isNaN(d) ? ts : d.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
// };

// // ── UpdateStatus Modal ────────────────────────────────────────────────────────
// const UpdateStatusModal = ({ currentStatus, reportId, onClose, onUpdated }) => {
//   const [selected, setSelected] = useState('');
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState('');

//   const handleSubmit = async () => {
//     if (!selected) return;
//     setLoading(true);
//     setError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/UpdateStatus`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ reportId: Number(reportId), newStatus: Number(selected) }),
//       });
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       onUpdated(STATUS_MAP[selected]);
//       onClose();
//     } catch (e) {
//       setError(`Failed to update: ${e.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-sm shadow-2xl">
//         <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-1">Update Status</h3>
//         <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
//           Current: <span className="font-medium">{currentStatus}</span>
//         </p>

//         <div className="flex flex-col gap-2 mb-4">
//           {Object.entries(STATUS_MAP).map(([val, label]) => (
//             <label
//               key={val}
//               className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
//                 selected === val
//                   ? 'border-primary bg-primary/10'
//                   : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="status"
//                 value={val}
//                 checked={selected === val}
//                 onChange={(e) => setSelected(e.target.value)}
//                 className="accent-primary"
//               />
//               <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[label]}`}>{label}</span>
//             </label>
//           ))}
//         </div>

//         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//         <div className="flex gap-2">
//           <button
//             onClick={onClose}
//             className="flex-1 h-10 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={!selected || loading}
//             className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Saving…' : 'Confirm'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── Main Component ────────────────────────────────────────────────────────────
// const IncidentDetail = () => {
//   const { id } = useParams();
//   const reportId = id;

//   const [reportData,      setReportData]      = useState(null);
//   const [timeline,        setTimeline]        = useState([]);
//   const [loadingDetails,  setLoadingDetails]  = useState(true);
//   const [loadingTimeline, setLoadingTimeline] = useState(true);
//   const [detailsError,    setDetailsError]    = useState('');
//   const [timelineError,   setTimelineError]   = useState('');

//   const [isMenuOpen,        setIsMenuOpen]        = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
//   const [showStatusModal,   setShowStatusModal]   = useState(false);

//   // ── Fetch report details ──────────────────────────────────────────────────
//   const fetchDetails = useCallback(async () => {
//     setLoadingDetails(true);
//     setDetailsError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/GetReportDetails/${reportId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const text = await res.text();
//       const data = text ? JSON.parse(text) : null;

//       if (!res.ok || !data || data?.message === 'Report not found.') {
//         setDetailsError(data?.message || `Report #${reportId} not found.`);
//         setReportData(null);
//       } else {
//         setReportData(data);
//       }
//     } catch (e) {
//       setDetailsError(`Could not load report details: ${e.message}`);
//     } finally {
//       setLoadingDetails(false);
//     }
//   }, [reportId]);

//   // ── Fetch activity / timeline ─────────────────────────────────────────────
//   const fetchActivity = useCallback(async () => {
//     setLoadingTimeline(true);
//     setTimelineError('');
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`${BASE_URL}/GetReportActivity?reportId=${reportId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const text = await res.text();
//       const data = text ? JSON.parse(text) : null;

//       if (!res.ok || !data) {
//         setTimelineError(data?.message || `HTTP ${res.status}`);
//         setTimeline([]);
//       } else {
//         // API returns { report_ID, timeline: [...] }
//         setTimeline(data?.timeline ?? []);
//       }
//     } catch (e) {
//       setTimelineError(`Could not load activity: ${e.message}`);
//       setTimeline([]);
//     } finally {
//       setLoadingTimeline(false);
//     }
//   }, [reportId]);

//   useEffect(() => {
//     fetchDetails();
//     fetchActivity();
//   }, [fetchDetails, fetchActivity]);

//   const handleRefresh = () => {
//     fetchDetails();
//     fetchActivity();
//   };

//   const handleStatusUpdated = (newStatus) => {
//     setReportData((prev) => prev ? { ...prev, status: newStatus } : prev);
//     fetchActivity(); // refresh timeline after status change
//   };

//   // ── Loading state ─────────────────────────────────────────────────────────
//   if (loadingDetails) {
//     return (
//       <div className="p-8 text-center text-text-light dark:text-text-dark animate-pulse">
//         Loading Report Details…
//       </div>
//     );
//   }

//   // ── "Not found" state ─────────────────────────────────────────────────────
//   if (detailsError) {
//     return (
//       <div className="p-8 text-center">
//         <p className="text-red-500 font-medium mb-2">{detailsError}</p>
//         <p className="text-slate-500 text-sm">Report ID: {reportId}</p>
//         <button
//           onClick={handleRefresh}
//           className="mt-4 px-4 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   // ── Derived display values ────────────────────────────────────────────────
//   const status   = reportData?.status   ?? '—';
//   const priority = reportData?.priority ?? '—';
//   const category = reportData?.category ?? reportData?.type ?? '—';

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">

//         {/* ── Header ── */}
//         <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//           <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
//             Report Details: #{reportId}
//           </h1>

//           <div className="flex items-center gap-2 relative">
//             <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//               <span className="material-symbols-outlined text-base">download</span>
//               Download Report
//             </button>

//             <button
//               onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
//               className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="Toggle details"
//             >
//               <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>
//                 expand_more
//               </span>
//             </button>

//             <button
//               onClick={handleRefresh}
//               className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loadingDetails || loadingTimeline ? 'animate-spin' : ''}`}
//               title="Refresh"
//             >
//               <span className="material-symbols-outlined">refresh</span>
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
//               title="More options"
//             >
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {isMenuOpen && (
//               <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                 <div className="py-2">
//                   {[
//                     { label: 'Edit Report', icon: 'edit' },
//                     { label: 'Share',       icon: 'share' },
//                     { label: 'Print',       icon: 'print' },
//                     { label: 'Archive',     icon: 'archive' },
//                     { label: 'Delete Report', icon: 'delete', danger: true },
//                   ].map(({ label, icon, danger }) => (
//                     <button
//                       key={label}
//                       className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${danger ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}
//                     >
//                       <span className="material-symbols-outlined text-base">{icon}</span>
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* ── Status chips ── */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           <div className={`flex h-8 items-center justify-center gap-x-2 rounded-full px-4 ${STATUS_COLORS[status] ?? 'bg-gray-500/20 text-gray-800 dark:text-gray-300'}`}>
//             <p className="text-sm font-medium">Status: {status}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//             <p className="text-sm font-medium">Priority: {priority}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//             <p className="text-sm font-medium">Category: {category}</p>
//           </div>
//         </div>

//         {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//             {/* ── Left column ── */}
//             <div className="lg:col-span-2 flex flex-col gap-8">

//               {/* Description */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
//                   {reportData?.description || '—'}
//                 </p>
//               </div>

//               {/* Submitted Media */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
//                     <span className="text-white text-sm">Media display only</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
//                   {reportData?.location || 'Location not available'}
//                 </p>
//               </div>
//             </div>

//             {/* ── Right column ── */}
//             <div className="lg:col-span-1 flex flex-col gap-8">

//               {/* Actions */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   <button
//                     onClick={() => setShowStatusModal(true)}
//                     className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full"
//                   >
//                     Update Status
//                   </button>
//                   {['Add Internal Note', 'Escalate'].map((a) => (
//                     <button
//                       key={a}
//                       className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full"
//                     >
//                       {a}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Reporter Info + AI Analysis + Timeline */}
//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">

//                 {/* Reporter */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reportData?.reporter?.name ?? reportData?.reporterName ?? '—'}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{formatTimestamp(reportData?.reporter?.time ?? reportData?.createdAt ?? reportData?.time)}</p>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 {reportData?.aiAnalysis && (
//                   <div className="p-6">
//                     <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                     <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                       <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                       <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
//                       <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                       <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
//                       {reportData.aiAnalysis.entities?.length > 0 && (
//                         <>
//                           <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                           <div className="flex flex-wrap gap-2">
//                             {reportData.aiAnalysis.entities.map((entity) => (
//                               <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">
//                                 {entity}
//                               </span>
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* Activity Timeline */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>

//                   {loadingTimeline ? (
//                     <p className="text-sm text-slate-400 animate-pulse">Loading activity…</p>
//                   ) : timelineError ? (
//                     <p className="text-sm text-red-500">{timelineError}</p>
//                   ) : timeline.length === 0 ? (
//                     <p className="text-sm text-slate-400">No activity recorded yet.</p>
//                   ) : (
//                     <div className="flex flex-col gap-6">
//                       {timeline.map((item, index) => {
//                         const cfg = TIMELINE_ICONS[item.status] ?? TIMELINE_ICONS['Pending'];
//                         return (
//                           <div className="flex gap-4" key={index}>
//                             <div className="flex flex-col items-center">
//                               <div className={`flex items-center justify-center size-8 rounded-full ${cfg.color}`}>
//                                 <span className="material-symbols-outlined text-base">{cfg.icon}</span>
//                               </div>
//                               {index !== timeline.length - 1 && (
//                                 <div className="w-px flex-grow bg-border-light dark:border-border-dark mt-1" />
//                               )}
//                             </div>
//                             <div className="pb-1">
//                               <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.message}</p>
//                               <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-0.5">
//                                 {item.status} · {formatTimestamp(item.timestamp)}
//                               </p>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ── Update Status Modal ── */}
//       {showStatusModal && (
//         <UpdateStatusModal
//           currentStatus={status}
//           reportId={reportId}
//           onClose={() => setShowStatusModal(false)}
//           onUpdated={handleStatusUpdated}
//         />
//       )}
//     </div>
//   );
// };

// export default IncidentDetail;



import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL, getAuthHeaders } from '../config/api';
import { useT } from '../context/AppContext';


const BASE_URL = `${API_BASE_URL}/ReportsAuthority`;


// Status helpers
const STATUS_MAP = { 1: 'Pending', 2: 'In Progress', 3: 'Solved' };
const STATUS_COLORS = {
  Pending:     'bg-yellow-500/20 text-yellow-800 dark:text-yellow-300',
  'In Progress': 'bg-blue-500/20 text-blue-800 dark:text-blue-300',
  Solved:      'bg-green-500/20 text-green-800 dark:text-green-300',
};
const TIMELINE_ICONS = {
  Pending:     { icon: 'flag',         color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
  'In Progress': { icon: 'assignment_ind', color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400' },
  Solved:      { icon: 'check_circle', color: 'bg-green-500/20 text-green-600 dark:text-green-400' },
};

const formatTimestamp = (ts) => {
  if (!ts) return '—';
  const d = new Date(ts);
  return isNaN(d) ? ts : d.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
};

// ── UpdateStatus Modal ────────────────────────────────────────────────────────
const UpdateStatusModal = ({ currentStatus, reportId, onClose, onUpdated }) => {
  const [selected, setSelected] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async () => {
    if (!selected) return;
    setLoading(true);
    setError('');
    try {
      const payload = { reportId: Number(reportId), newStatus: Number(selected) };
      const res = await fetch(`${BASE_URL}/UpdateStatus`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (_) {
        data = text;
      }

      if (!res.ok) {
        throw new Error(data?.message || `HTTP ${res.status}`);
      }

      onUpdated(STATUS_MAP[selected]);
      onClose();
    } catch (e) {
      setError(`Failed to update: ${e.message}`);
      console.error('Update Status Error:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-sm shadow-2xl">
        <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-1">Update Status</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Current: <span className="font-medium">{currentStatus}</span>
        </p>

        <div className="flex flex-col gap-2 mb-4">
          {Object.entries(STATUS_MAP).map(([val, label]) => (
            <label
              key={val}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selected === val
                  ? 'border-primary bg-primary/10'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              }`}
            >
              <input
                type="radio"
                name="status"
                value={val}
                checked={selected === val}
                onChange={(e) => setSelected(e.target.value)}
                className="accent-primary"
              />
              <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[label]}`}>{label}</span>
            </label>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 h-10 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selected || loading}
            className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Saving…' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

const EditReportModal = ({ initialValues, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: initialValues?.title || '',
    description: initialValues?.description || '',
    location: initialValues?.location || '',
    category: initialValues?.category || '',
  });

  useEffect(() => {
    setForm({
      title: initialValues?.title || '',
      description: initialValues?.description || '',
      location: initialValues?.location || '',
      category: initialValues?.category || '',
    });
  }, [initialValues]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-lg shadow-2xl">
        <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-1">Edit Report</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Update report title, description, category, and location.</p>

        <div className="grid gap-4">
          <label className="grid gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Title
            <input
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full rounded-lg border border-border-light bg-white dark:bg-slate-900 px-3 py-2 text-text-light dark:text-text-dark"
            />
          </label>

          <label className="grid gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Description
            <textarea
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-border-light bg-white dark:bg-slate-900 px-3 py-2 text-text-light dark:text-text-dark"
            />
          </label>

          <label className="grid gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Category
            <input
              value={form.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full rounded-lg border border-border-light bg-white dark:bg-slate-900 px-3 py-2 text-text-light dark:text-text-dark"
            />
          </label>

          <label className="grid gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Location
            <input
              value={form.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full rounded-lg border border-border-light bg-white dark:bg-slate-900 px-3 py-2 text-text-light dark:text-text-dark"
            />
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="h-10 rounded-lg border border-border-light dark:border-border-dark px-4 text-sm font-medium text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="h-10 rounded-lg bg-primary text-white px-4 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const IncidentDetail = () => {
  const { id } = useParams();
  const reportId = id;
  const t = useT();

  const [reportData,      setReportData]      = useState(null);
  const [timeline,        setTimeline]        = useState([]);
  const [loadingDetails,  setLoadingDetails]  = useState(true);
  const [loadingTimeline, setLoadingTimeline] = useState(true);
  const [detailsError,    setDetailsError]    = useState('');
  const [timelineError,   setTimelineError]   = useState('');

  const [isMenuOpen,        setIsMenuOpen]        = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  const [showStatusModal,   setShowStatusModal]   = useState(false);
  const [showEditModal,     setShowEditModal]     = useState(false);
  const [editDraft,         setEditDraft]         = useState(null);
  const [actionMessage,     setActionMessage]     = useState('');
  const navigate = useNavigate();

  const showMessage = useCallback((message) => {
    setActionMessage(message);
    window.setTimeout(() => setActionMessage(''), 3000);
  }, []);

  const handleSaveEditedReport = useCallback((values) => {
    setReportData((prev) => (prev ? { ...prev, ...values } : prev));
    setShowEditModal(false);
    showMessage('Report updated successfully.');
  }, [showMessage]);

  const downloadReport = useCallback(() => {
    if (!reportData) return;
    const payload = {
      report_ID: reportData.id,
      report_Title: reportData.title,
      report_Description: reportData.description,
      category: reportData.category,
      status: reportData.status,
      location: reportData.location,
      time: reportData.createdAt || reportData.reporter?.time,
      photo: reportData.photo,
      aI_Analysis: reportData.aiAnalysis,
      history: timeline.map((item) => ({ status: item.status, message: item.message, time: item.timestamp })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `report-${reportData.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showMessage('Report downloaded.');
  }, [reportData, showMessage, timeline]);

  const handleMenuAction = useCallback(async (action) => {
    setIsMenuOpen(false);
    if (action === 'Edit Report') {
      setEditDraft({
        title: reportData?.title || '',
        description: reportData?.description || '',
        location: reportData?.location || '',
        category: reportData?.category || '',
      });
      setShowEditModal(true);
      return;
    }
    if (action === 'Share') {
      const shareData = {
        title: reportData?.title || `Report #${reportId}`,
        text: reportData?.description || 'Incident report details',
        url: window.location.href,
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
          showMessage('Report shared successfully.');
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          showMessage('Report link copied to clipboard.');
        } else {
          window.alert('Sharing is not supported in this browser.');
        }
      } catch (error) {
        showMessage('Unable to share report.');
      }
      return;
    }
    if (action === 'Print') {
      window.print();
      return;
    }
    if (action === 'Archive') {
      setReportData((prev) => (prev ? { ...prev, status: 'Archived' } : prev));
      showMessage('Report archived locally.');
      return;
    }
    if (action === 'Delete Report') {
      const confirmDelete = window.confirm('Are you sure you want to delete this report?');
      if (confirmDelete) {
        navigate('/reports');
      }
      return;
    }
  }, [navigate, reportData, reportId, showMessage]);

  // ── Fetch report details ──────────────────────────────────────────────────
  const fetchDetails = useCallback(async () => {
    setLoadingDetails(true);
    setDetailsError('');
    try {
      const res = await fetch(`${BASE_URL}/GetReportDetails/${reportId}`, {
        headers: getAuthHeaders(),
      });
      const text = await res.text();
const data = text ? JSON.parse(text) : null;

if (!res.ok || !data || data?.message === 'Report not found.') {
  setDetailsError(data?.message || `Report #${reportId} not found.`);
  setReportData(null);
} else {
  const normalizeTimeline = (items) =>
    items?.map((item) => ({
      status: item.status || item.statusName || 'Pending',
      message:
        item.message ||
        (item.updatedBy ? `Updated by ${item.updatedBy}` : item.citizenName ? `Updated by ${item.citizenName}` : 'Status changed'),
      timestamp: item.time || item.timestamp || item.updatedAt,
    })) || [];

  const mapped = {
    ...data,
    id: data.report_ID || data.reportId || data.id || reportId,
    title: data.report_Title || data.title || `Report #${reportId}`,
    description: data.report_Description || data.reportDescription || data.description || 'No description available.',
    category: data.category || data.type || 'Unknown',
    status: data.status || data.currentStatus || 'Pending',
    location: data.location || data.address || 'Location not available',
    photo: data.photo || '',
    reporter: {
      name: data.citizenName || data.reporter?.name || '—',
      time: data.time || data.createdAt || data.reporter?.time,
    },
    aiAnalysis: data.aI_Analysis
      ? {
          category: data.aI_Analysis.predicted || data.aI_Analysis.category,
          confidence: data.aI_Analysis.score || data.aI_Analysis.confidence,
          entities: data.aI_Analysis.entities || [],
        }
      : null,
    createdAt: data.time,
  };

  setReportData(mapped);
  setTimeline(normalizeTimeline(data.history || data.timeline));
}
    } catch (e) {
      setDetailsError(`Could not load report details: ${e.message}`);
    } finally {
      setLoadingDetails(false);
    }
  }, [reportId]);

  // ── Fetch activity / timeline ─────────────────────────────────────────────
  const fetchActivity = useCallback(async () => {
    setLoadingTimeline(true);
    setTimelineError('');
    try {
      const res = await fetch(`${BASE_URL}/GetReportActivity?reportId=${reportId}`, {
        headers: getAuthHeaders(),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (!res.ok || !data) {
        setTimelineError(data?.message || `HTTP ${res.status}`);
        setTimeline([]);
      } else {
        // API returns { report_ID, timeline: [...] }
        setTimeline(data?.timeline ?? []);
      }
    } catch (e) {
      setTimelineError(`Could not load activity: ${e.message}`);
      setTimeline([]);
    } finally {
      setLoadingTimeline(false);
    }
  }, [reportId]);

  useEffect(() => {
    fetchDetails();
    fetchActivity();
  }, [fetchDetails, fetchActivity]);

  const handleRefresh = () => {
    fetchDetails();
    fetchActivity();
  };

  const handleStatusUpdated = (newStatus) => {
    setReportData((prev) => prev ? { ...prev, status: newStatus } : prev);
    fetchActivity(); // refresh timeline after status change
  };

// ── UpdateStatus Modal ────────────────────────────────────────────────────────
const UpdateStatusModal = ({ currentStatus, reportId, onClose, onUpdated }) => {
  const [selected, setSelected] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async () => {
    if (!selected) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BASE_URL}/UpdateStatus`, {
        method: 'PUT',
        headers: getAuthHeaders(),          // Content-Type: application/json + Bearer token
        body: JSON.stringify({
          reportId:  Number(reportId),      // ✅ number مش string
          newStatus: Number(selected),      // ✅ number مش string
        }),
      });

      // بعض الـ APIs بترجع 200 بدون body
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data?.message || `HTTP ${res.status}`);
      }

      onUpdated(STATUS_MAP[selected]);
      onClose();
    } catch (e) {
      setError(`Failed to update: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-sm shadow-2xl">
        <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-1">Update Status</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Current: <span className="font-medium">{currentStatus}</span>
        </p>

        <div className="flex flex-col gap-2 mb-4">
          {Object.entries(STATUS_MAP).map(([val, label]) => (
            <label
              key={val}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selected === val
                  ? 'border-primary bg-primary/10'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              }`}
            >
              <input
                type="radio"
                name="status"
                value={val}
                checked={selected === val}
                onChange={(e) => setSelected(e.target.value)}
                className="accent-primary"
              />
              <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[label]}`}>
                {label}
              </span>
            </label>
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3 flex items-center gap-1">
            <span className="material-symbols-outlined text-base">error</span>
            {error}
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 h-10 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selected || loading}
            className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                Saving…
              </>
            ) : (
              'Confirm'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};









  // ── Loading state ─────────────────────────────────────────────────────────
  if (loadingDetails) {
    return (
      <div className="p-8 text-center text-text-light dark:text-text-dark animate-pulse">
        Loading Report Details…
      </div>
    );
  }

  // ── "Not found" state ─────────────────────────────────────────────────────
  if (detailsError) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-medium mb-2">{detailsError}</p>
        <p className="text-slate-500 text-sm">Report ID: {reportId}</p>
        <button
          onClick={handleRefresh}
          className="mt-4 px-4 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90"
        >
          Retry
        </button>
      </div>
    );
  }

  // ── Derived display values ────────────────────────────────────────────────
  const rawStatus   = reportData?.status   ?? '—';
  const rawPriority = reportData?.priority ?? '—';
  const rawCategory = reportData?.category ?? reportData?.type ?? '—';
  const status = t.translateApiValue(rawStatus);
  const priority = t.translateApiValue(rawPriority);
  const category = t.translateApiValue(rawCategory);
  const apiRoot = API_BASE_URL.replace(/\/api\/?$/, '');
  const photoSrc = reportData?.photo
    ? reportData.photo.startsWith('http')
      ? reportData.photo
      : reportData.photo.startsWith('/')
      ? `${apiRoot}${reportData.photo}`
      : reportData.photo
    : null;

  return (
    <div className="w-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
          <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
            {reportData?.title || `Report #${reportId}`}
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">
            Report ID: {reportId}
          </p>
        </div>

          <div className="flex items-center gap-2 relative">
            <button
              onClick={downloadReport}
              className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-base">download</span>
              Download Report
            </button>

            <button
              onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
              title="Toggle details"
            >
              <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            <button
              onClick={handleRefresh}
              className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loadingDetails || loadingTimeline ? 'animate-spin' : ''}`}
              title="Refresh"
            >
              <span className="material-symbols-outlined">refresh</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all"
              title="More options"
            >
              <span className="material-symbols-outlined">more_vert</span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
                <div className="py-2">
                  {[
                    { label: 'Edit Report', icon: 'edit' },
                    { label: 'Share',       icon: 'share' },
                    { label: 'Print',       icon: 'print' },
                    { label: 'Archive',     icon: 'archive' },
                    { label: 'Delete Report', icon: 'delete', danger: true },
                  ].map(({ label, icon, danger }) => (
                    <button
                      key={label}
                      onClick={() => handleMenuAction(label)}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${danger ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      <span className="material-symbols-outlined text-base">{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* ── Action status message ── */}
        {actionMessage && (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
            {actionMessage}
          </div>
        )}

        {/* ── Status chips ── */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <div className={`flex h-8 items-center justify-center gap-x-2 rounded-full px-4 ${STATUS_COLORS[rawStatus] ?? 'bg-gray-500/20 text-gray-800 dark:text-gray-300'}`}>
            <p className="text-sm font-medium">Status: {status}</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
            <p className="text-sm font-medium">Priority: {priority}</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
            <p className="text-sm font-medium">Category: {category}</p>
          </div>
        </div>

        {isDetailsExpanded && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Left column ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Description */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                  {reportData?.description || '—'}
                </p>
              </div>

              {/* Submitted Media */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center overflow-hidden">
                    {photoSrc ? (
                      <img
                        src={photoSrc}
                        alt={reportData?.title || 'Report media'}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-white text-sm">No media</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                  {reportData?.location || 'Location not available'}
                </p>
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="lg:col-span-1 flex flex-col gap-8">

              {/* Actions */}
              <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setShowStatusModal(true)}
                    className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full"
                  >
                    Update Status
                  </button>
                  {['Add Internal Note', 'Escalate'].map((a) => (
                    <button
                      key={a}
                      className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors w-full"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reporter Info + AI Analysis + Timeline */}
              <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">

                {/* Reporter */}
                <div className="p-6">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
                    <p className="text-text-light dark:text-text-dark">{reportData?.reporter?.name ?? reportData?.reporterName ?? '—'}</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
                    <p className="text-text-light dark:text-text-dark">{formatTimestamp(reportData?.reporter?.time ?? reportData?.createdAt ?? reportData?.time)}</p>
                  </div>
                </div>

                {/* AI Analysis */}
                {reportData?.aiAnalysis && (
                  <div className="p-6">
                    <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                      <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
                      <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.category}</p>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
                      <p className="text-text-light dark:text-text-dark">{reportData.aiAnalysis.confidence}</p>
                      {reportData.aiAnalysis.entities?.length > 0 && (
                        <>
                          <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
                          <div className="flex flex-wrap gap-2">
                            {reportData.aiAnalysis.entities.map((entity) => (
                              <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">
                                {entity}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Activity Timeline */}
                <div className="p-6">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>

                  {loadingTimeline ? (
                    <p className="text-sm text-slate-400 animate-pulse">Loading activity…</p>
                  ) : timelineError ? (
                    <p className="text-sm text-red-500">{timelineError}</p>
                  ) : timeline.length === 0 ? (
                    <p className="text-sm text-slate-400">No activity recorded yet.</p>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {timeline.map((item, index) => {
                        const cfg = TIMELINE_ICONS[item.status] ?? TIMELINE_ICONS['Pending'];
                        return (
                          <div className="flex gap-4" key={index}>
                            <div className="flex flex-col items-center">
                              <div className={`flex items-center justify-center size-8 rounded-full ${cfg.color}`}>
                                <span className="material-symbols-outlined text-base">{cfg.icon}</span>
                              </div>
                              {index !== timeline.length - 1 && (
                                <div className="w-px flex-grow bg-border-light dark:border-border-dark mt-1" />
                              )}
                            </div>
                            <div className="pb-1">
                              <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.message}</p>
                              <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-0.5">
                                {item.status} · {formatTimestamp(item.timestamp)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Update Status Modal ── */}
      {showStatusModal && (
        <UpdateStatusModal
          currentStatus={status}
          reportId={reportId}
          onClose={() => setShowStatusModal(false)}
          onUpdated={handleStatusUpdated}
        />
      )}
      {showEditModal && editDraft && (
        <EditReportModal
          initialValues={editDraft}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEditedReport}
        />
      )}
    </div>
  );
};

export default IncidentDetail;








































































// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useIncident } from '../context/IncidentContext';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon issue with Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// const API_BASE_URL = 'http://207.180.209.101:5000/api/ReportsAuthority';

// const IncidentDetail = () => {
//   const { id } = useParams();
//   const { selectedIncident, MOCK_INCIDENTS } = useIncident();

//   const [reportData, setReportData] = useState(null);
//   const [activityData, setActivityData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
//   const [updateStatusLoading, setUpdateStatusLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const parseReportDescription = (text) => {
//     if (!text || typeof text !== 'string') return { title: '', description: '' };
//     const titleMatch = text.match(/Title:\s*(.*?)\r?\n/i);
//     const descMatch = text.match(/Description:\s*([\s\S]*)/i);
//     return {
//       title: titleMatch ? titleMatch[1].trim() : '',
//       description: descMatch ? descMatch[1].trim() : text.trim()
//     };
//   };

//   const parseLocationCoords = (location) => {
//     if (!location) return null;
//     if (typeof location === 'string') {
//       const parts = location.split(',').map(p => p.trim());
//       const lat = parseFloat(parts[0]);
//       const lng = parseFloat(parts[1]);
//       if (!Number.isNaN(lat) && !Number.isNaN(lng)) return { lat, lng };
//     }
//     if (Array.isArray(location) && location.length >= 2) {
//       const lat = parseFloat(location[0]);
//       const lng = parseFloat(location[1]);
//       if (!Number.isNaN(lat) && !Number.isNaN(lng)) return { lat, lng };
//     }
//     if (typeof location === 'object' && location !== null && location.lat != null && location.lng != null) {
//       return { lat: Number(location.lat), lng: Number(location.lng) };
//     }
//     return null;
//   };

//   const normalizeReportData = (raw, reportId) => {
//     const data = raw?.data || raw?.report || raw?.reportDetails || raw;
//     const reporterValue = data?.reporter || data?.citizenName || data?.reporterName || data?.reporterInfo;
//     const descriptionText = data?.report_Description || data?.reportDescription || data?.description || '';
//     const parsedDescription = parseReportDescription(descriptionText);
//     const aiSource = data?.aI_Analysis || data?.aiAnalysis || {};
//     const rawImages = data?.images || data?.media || data?.photos || data?.attachments || data?.mediaFiles || data?.photo || data?.photoUrl || data?.image || [];
//     const imageList = Array.isArray(rawImages)
//       ? rawImages
//       : typeof rawImages === 'string'
//         ? [rawImages]
//         : [];
//     const images = imageList
//       .map(item => typeof item === 'string' ? getFullImageUrl(item) : getFullImageUrl(item?.url || item?.path || item?.src))
//       .filter(Boolean);

//     return {
//       id: data?.report_ID || data?.id || data?.reportId || reportId,
//       status: data?.status || data?.reportStatus || 'Pending',
//       priority: data?.priority || (data?.severity ? `${data.severity}` : 'Low'),
//       category: data?.category || data?.type || data?.reportType || 'Unknown',
//       description: parsedDescription.description || '',
//       title: parsedDescription.title || undefined,
//       location: data?.location || data?.address || '',
//       coords: parseLocationCoords(data?.location),
//       time: data?.time || data?.dateTime || data?.reportedAt || '',
//       reporter: typeof reporterValue === 'string'
//         ? { name: reporterValue, time: data?.reporterTime || data?.time || '' }
//         : reporterValue || { name: 'Unknown', time: data?.reporterTime || data?.time || '' },
//       aiAnalysis: {
//         category: aiSource?.predicted || aiSource?.category || aiSource?.type || 'Unknown',
//         confidence: aiSource?.score != null ? `${Math.round(aiSource.score * 100)}%` : aiSource?.confidence || aiSource?.aiConfidence || 'Unknown',
//         entities: aiSource?.entities || aiSource?.aiEntities || []
//       },
//       images
//     };
//   };

//   const normalizeActivityData = (raw) => {
//     const data = Array.isArray(raw)
//       ? raw
//       : raw?.data || raw?.activity || raw?.history || raw?.activityLog || raw?.logs || [];

//     if (!Array.isArray(data)) return [];

//     return data.map((item, index) => {
//       const statusText = item?.status ? `${item.status}` : '';
//       const performedBy = item?.updatedBy || item?.performedBy || item?.by || '';
//       const timestamp = item?.time || item?.timestamp || item?.updatedAt || '';
//       return {
//         id: item?.id || item?.logId || index,
//         text: statusText ? `${statusText}${performedBy ? ` by ${performedBy}` : ''}` : item?.text || item?.description || item?.action || 'No activity details',
//         sub: timestamp ? new Date(timestamp).toLocaleString() : performedBy || '',
//         icon: item?.icon || 'flag',
//         color: item?.color || 'bg-blue-500/20 text-blue-600'
//       };
//     });
//   };

//   const hasAuthToken = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('Please login first to fetch report data.');
//       return false;
//     }
//     return true;
//   };

//   const tryJsonResponse = async (response, normalizeFn, fallbackId) => {
//     if (!response.ok) return null;
//     try {
//       const data = await response.json();
//       console.log('Raw API data:', data);
//       return normalizeFn(data, fallbackId);
//     } catch (parseError) {
//       console.error('JSON parse error:', parseError);
//       return null;
//     }
//   };

//   // جلب تفاصيل التقرير من API
//   const fetchReportFromAPI = async (reportId) => {
//     if (!hasAuthToken()) return { _errorType: 'no-auth' };

//     const tryGet = async () => {
//       const url = `${API_BASE_URL}/GetReportDetails/${reportId}`;
//       console.log('Fetching report via GET:', url);
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: getAuthHeaders()
//       });
//       console.log('GetReportDetails GET status:', response.status);
//       return response;
//     };

//     const tryPost = async () => {
//       const url = `${API_BASE_URL}/GetReportDetails`;
//       console.log('Fetching report via POST:', url);
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: getAuthHeaders(),
//         body: JSON.stringify({ report_ID: reportId })
//       });
//       console.log('GetReportDetails POST status:', response.status);
//       return response;
//     };

//     try {
//       let response = await tryGet();
//       if (!response.ok) {
//         if (response.status === 401) {
//           setError('Unauthorized: please login again.');
//           return { _errorType: 'unauthorized' };
//         }
//         response = await tryPost();
//       }

//       if (!response.ok) {
//         if (response.status === 401) {
//           setError('Unauthorized: please login again.');
//           return { _errorType: 'unauthorized' };
//         } else {
//           console.warn('GetReportDetails final status:', response.status);
//           return { _errorType: 'api-failed' };
//         }
//       }

//       return await tryJsonResponse(response, normalizeReportData, reportId);
//     } catch (error) {
//       console.error('Error fetching report from API:', error);
//       return { _errorType: 'api-error' };
//     }
//   };

//   // جلب سجل النشاط من API
//   const fetchActivityFromAPI = async (reportId) => {
//     if (!hasAuthToken()) return [];

//     const tryGet = async () => {
//       const url = `${API_BASE_URL}/GetReportActivity/${reportId}`;
//       console.log('Fetching activity via GET:', url);
//       return await fetch(url, {
//         method: 'GET',
//         headers: getAuthHeaders()
//       });
//     };

//     const tryPost = async () => {
//       const url = `${API_BASE_URL}/GetReportActivity`;
//       console.log('Fetching activity via POST:', url);
//       return await fetch(url, {
//         method: 'POST',
//         headers: getAuthHeaders(),
//         body: JSON.stringify({ reportId: reportId })
//       });
//     };

//     try {
//       let response = await tryGet();
//       console.log('GetReportActivity GET status:', response.status);

//       if (!response.ok) {
//         if (response.status === 401) {
//           setError('Unauthorized: please login again.');
//           return [];
//         }
//         response = await tryPost();
//       }

//       if (!response.ok) {
//         if (response.status === 401) {
//           setError('Unauthorized: please login again.');
//         } else {
//           console.warn('GetReportActivity final status:', response.status);
//         }
//         return [];
//       }

//       const data = await response.json();
//       console.log('GetReportActivity raw data:', data);
//       return normalizeActivityData(data);
//     } catch (error) {
//       console.error('Error fetching activity from API:', error);
//       return [];
//     }
//   };

//   // تحديث حالة التقرير
//   const updateReportStatus = async (reportId, newStatus) => {
//     setUpdateStatusLoading(true);
//     try {
//       console.log('Updating status for:', reportId, 'to:', newStatus);
//       const payload = { report_ID: reportId, status: newStatus };

//       const response = await fetch(`${API_BASE_URL}/UpdateStatus`, {
//         method: 'POST',
//         headers: getAuthHeaders(),
//         body: JSON.stringify(payload)
//       });

//       console.log('UpdateStatus status:', response.status);

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`UpdateStatus failed: ${response.status} ${errorText}`);
//       }

//       const responseData = await response.json();
//       console.log('UpdateStatus response:', responseData);

//       const updatedReport = await fetchReportFromAPI(reportId);
//       const updatedActivity = await fetchActivityFromAPI(reportId);

//       if (updatedReport) setReportData(updatedReport);
//       if (updatedActivity) setActivityData(updatedActivity);
//       console.log('Status updated successfully');
//     } catch (error) {
//       console.error('Error updating status:', error);
//       alert('خطأ في تحديث الحالة: ' + error.message);
//     } finally {
//       setUpdateStatusLoading(false);
//     }
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         console.log('========== START LOADING DATA ==========');
//         console.log('Report ID:', id);
        
//         // محاولة جلب البيانات من API
//         console.log('Attempting to fetch from API...');
//         const apiReportData = await fetchReportFromAPI(id);
        
//         console.log('API Report Data:', apiReportData);

//         if (apiReportData?._errorType) {
//           if (apiReportData._errorType === 'no-auth' || apiReportData._errorType === 'unauthorized') {
//             console.log('Authentication required; skipping mock fallback.');
//             return;
//           }

//           console.log('❌ API returned an error, using mock data fallback');
//           setError('تعذر تحميل البيانات من الخادم، يتم استخدام بيانات تجريبية');
//         }

//         if (apiReportData && !apiReportData._errorType) {
//           console.log('✅ API Data received successfully');
//           setReportData(apiReportData);
          
//           // جلب سجل النشاط
//           const apiActivityData = await fetchActivityFromAPI(id);
//           console.log('API Activity Data:', apiActivityData);
//           if (apiActivityData) {
//             setActivityData(apiActivityData);
//           }
//         } else if (!apiReportData?._errorType) {
//           console.log('❌ API returned no data, using mock data');
//           setError('تعذر تحميل البيانات من الخادم، يتم استخدام بيانات تجريبية');
//         }

//         if (!apiReportData || apiReportData._errorType) {
//           if (apiReportData?._errorType === 'no-auth' || apiReportData?._errorType === 'unauthorized') {
//             return;
//           }

//           // Fallback إلى البيانات الوهمية إذا فشل API
//           const incident = selectedIncident?.id === id || selectedIncident?.id === (id?.replace(/^2024-/, '')) 
//             ? selectedIncident 
//             : MOCK_INCIDENTS.find(inc => inc.id === id);

//           const mockData = incident
//             ? {
//                 id: incident.id || "#INC-2024-08-15-001",
//                 type: incident.type || "Fire",
//                 location: incident.location || "Unknown Location",
//                 time: incident.time || "July 15, 2024, 14:32",
//                 status: incident.status || "In Progress",
//                 priority: incident.priority || "High",
//                 category: incident.type || "Fire",
//                 description: incident.description || "Detailed incident description...",
//                 reporter: { name: "John D.", time: incident.time || "July 15, 2024, 14:32" },
//                 aiAnalysis: { category: incident.type || "Fire", confidence: "92%", entities: [incident.type, incident.location] }
//               }
//             : {
//                 id: id || "#INC-2024-08-15-001",
//                 status: "In Progress",
//                 priority: "High",
//                 category: "Infrastructure",
//                 description: "A large pothole has formed on the eastbound lane of Elm Street...",
//                 reporter: { name: "John D.", time: "July 15, 2024, 14:32" },
//                 aiAnalysis: { category: "Infrastructure Damage", confidence: "98%", entities: ["Pothole", "Elm Street"] }
//               };

//           console.log('Using mock data:', mockData);
//           setReportData(mockData);
          
//           // بيانات النشاط الوهمية
//           setActivityData([
//             { id: 1, text: "Status changed to In Progress", sub: "by Officer Miller", icon: "check_circle", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
//             { id: 2, text: "Assigned to Infrastructure Dept.", sub: "by System AI", icon: "assignment_ind", color: "bg-primary/20 text-primary" },
//             { id: 3, text: "Report Submitted", sub: "by John D.", icon: "flag", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" }
//           ]);
//         }
//         console.log('========== END LOADING DATA ==========');
//       } catch (error) {
//         console.error("❌ Error loading data:", error);
//         setError(`خطأ غير متوقع: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [id, selectedIncident, MOCK_INCIDENTS]);

//   if (loading || !reportData) return <div className="p-8 text-center text-text-light dark:text-text-dark">
//     {error ? (
//       <div className="text-red-600 dark:text-red-400 mb-4 font-bold text-lg">⚠️ {error}</div>
//     ) : null}
//     <div>جاري تحميل تفاصيل التقرير...</div>
//   </div>;

//   const handleRefresh = async () => {
//     setLoading(true);
//     const apiReportData = await fetchReportFromAPI(id);
//     if (apiReportData) {
//       setReportData(apiReportData);
//       const apiActivityData = await fetchActivityFromAPI(id);
//       if (apiActivityData) setActivityData(apiActivityData);
//     }
//     setLoading(false);
//   };

//   const handleAction = (action) => {
//     if (action === 'Update Status') {
//       // يمكن فتح modal لاختيار الحالة الجديدة
//       console.log('Update Status clicked');
//       // مثال: استدعاء updateReportStatus(id, 'Resolved')
//     } else {
//       console.log('Action clicked:', action);
//     }
//   };

//   const reporter = reportData?.reporter || { name: 'Unknown', time: 'Unknown' };
//   const aiAnalysis = reportData?.aiAnalysis || { category: 'Unknown', confidence: 'Unknown', entities: [] };
//   const coords = reportData?.coords || { lat: 34.0522, lng: -118.2437 };

//   return (
//     <div className="w-full p-8 overflow-y-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Page Heading */}
//         <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
//           <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">Report Details: {reportData.id}</h1>
//           <div className="flex items-center gap-2 relative">
//             <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10 transition-colors">
//               <span className="material-symbols-outlined text-base">download</span> Download Report
//             </button>
//             <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="Toggle details">
//               <span className={`material-symbols-outlined transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`}>expand_more</span>
//             </button>
//             <button onClick={handleRefresh} className={`p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all ${loading ? 'animate-spin' : ''}`} title="Refresh">
//               <span className="material-symbols-outlined">refresh</span>
//             </button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-all" title="More options">
//               <span className="material-symbols-outlined">more_vert</span>
//             </button>

//             {isMenuOpen && (
//               <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg min-w-56">
//                 <div className="py-2">
//                   {['Edit Report', 'Share', 'Print', 'Archive', 'Delete Report'].map((item, idx) => (
//                     <button key={idx} className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 ${item.includes('Delete') ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>
//                       <span className="material-symbols-outlined text-base">{item === 'Edit Report' ? 'edit' : item === 'Share' ? 'share' : item === 'Print' ? 'print' : item === 'Archive' ? 'archive' : 'delete'}</span>
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* Chips */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-blue-500/20 text-blue-800 dark:text-blue-300 px-4">
//             <p className="text-sm font-medium leading-normal">Status: {reportData.status}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/20 text-red-800 dark:text-red-300 px-4">
//             <p className="text-sm font-medium leading-normal">Priority: {reportData.priority}</p>
//           </div>
//           <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-500/20 text-gray-800 dark:text-gray-300 px-4">
//             <p className="text-sm font-medium leading-normal">Category: {reportData.category}</p>
//           </div>
//         </div>

//         {isDetailsExpanded && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column */}
//             <div className="lg:col-span-2 flex flex-col gap-8">
//               {/* Report Description */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Report Description</h2>
//                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">{reportData.description}</p>
//               </div>

//               {/* Submitted Media - Display Only */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Submitted Media</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {reportData.images && reportData.images.length > 0 ? (
//                     reportData.images.slice(0, 3).map((src, idx) => (
//                       <img
//                         key={idx}
//                         className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity"
//                         src={src}
//                         alt={`Submitted media ${idx + 1}`}
//                       />
//                     ))
//                   ) : (
//                     <div className="rounded-lg aspect-video bg-gray-800 flex items-center justify-center">
//                       <span className="text-white text-sm">No media available</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Location Map */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Location</h2>
//                 <div className="aspect-video rounded-lg overflow-hidden">
//                   <MapContainer center={[coords.lat, coords.lng]} zoom={13} className="h-full w-full rounded-lg">
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                     <Marker position={[coords.lat, coords.lng]}>
//                       <Popup>Incident Location: {reportData.location}</Popup>
//                     </Marker>
//                   </MapContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 flex flex-col gap-8">
//               {/* Actions */}
//               <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
//                 <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Actions</h2>
//                 <div className="flex flex-col gap-3">
//                   {['Update Status', 'Add Internal Note', 'Escalate'].map(a => (
//                     <button 
//                       key={a} 
//                       onClick={() => {
//                         if (a === 'Update Status') {
//                           // مثال: تحديث الحالة إلى "Resolved"
//                           updateReportStatus(id, 'Resolved');
//                         } else {
//                           handleAction(a);
//                         }
//                       }}
//                       disabled={updateStatusLoading && a === 'Update Status'}
//                       className={`flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-lg ${a === 'Update Status' ? 'bg-primary text-white hover:bg-primary/90 disabled:opacity-50' : 'bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary/10'} transition-colors w-full`}
//                     >
//                       {updateStatusLoading && a === 'Update Status' ? 'جاري التحديث...' : a}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Reporter Info & AI Analysis & Timeline */}
//               <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
//                 {/* Reporter Information */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">Reporter Information</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Name</p>
//                     <p className="text-text-light dark:text-text-dark">{reporter.name}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Time</p>
//                     <p className="text-text-light dark:text-text-dark">{reporter.time}</p>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-4">AI Analysis</h2>
//                   <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Category</p>
//                     <p className="text-text-light dark:text-text-dark">{aiAnalysis.category}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Confidence</p>
//                     <p className="text-text-light dark:text-text-dark">{aiAnalysis.confidence}</p>
//                     <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium align-top">Entities</p>
//                     <div className="flex flex-wrap gap-2">
//                       {aiAnalysis.entities.map(entity => (
//                         <span key={entity} className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-md">{entity}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Activity Timeline */}
//                 <div className="p-6">
//                   <h2 className="text-text-light dark:text-text-dark text-xl font-bold mb-6">Activity Timeline</h2>
//                   <div className="flex flex-col gap-6">
//                     {activityData.length > 0 ? (
//                       activityData.map((item, index) => (
//                         <div className="flex gap-4" key={item.id}>
//                           <div className="flex flex-col items-center">
//                             <div className={`flex items-center justify-center size-8 rounded-full ${item.color || 'bg-blue-500/20 text-blue-600'}`}>
//                               <span className="material-symbols-outlined text-base">{item.icon || 'flag'}</span>
//                             </div>
//                             {index !== activityData.length - 1 && <div className="w-px flex-grow bg-border-light dark:border-border-dark"></div>}
//                           </div>
//                           <div>
//                             <p className="font-medium text-text-light dark:text-text-dark text-sm">{item.text}</p>
//                             <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">{item.sub}</p>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">لا توجد أنشطة متاحة</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncidentDetail;












