
// import './App.css';
// import IncidentDetail from './Page/IncidentDetail';
// import IncidentMap from './Page/IncidentMap';
// import IncidentReports from './Page/IncidentReports';
// import LoginPage from './Page/LoginPage';
// import SIRSDashboard from './Page/SIRSDashboard';

// function App() {
//   return (
//     <div >
//      <LoginPage></LoginPage>
//      <SIRSDashboard></SIRSDashboard>
//      <IncidentReports></IncidentReports>
//      <IncidentDetail></IncidentDetail>
//      <IncidentMap></IncidentMap>
//     </div>
//   );
// }

// export default App;






// layout في حاله واسبت سايد مثلا او هيدر
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Layout from "./Layout/Layout";
// import LoginPage from "./Page/LoginPage";
// import SignUpPage from "./Page/SignUpPage";
// import SIRSDashboard from "./Page/SIRSDashboard";
// import IncidentReports from "./Page/IncidentReports";
// import IncidentDetail from "./Page/IncidentDetail";
// import IncidentMap from "./Page/IncidentMap";
// import AnalyticsPage from "./Page/AnalyticsPage";
// import NotificationsPage from "./Page/NotificationsPage";
// import SettingsPage from "./Page/SettingsPage";
// import  {IncidentProvider}  from "./context/IncidentContext";

// function App() {
//   return (
//     <IncidentProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* صفحات بدون Layout */}
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />

//           {/* كل الصفحات الأخرى داخل الـ Layout */}
//           <Route element={<Layout />}>
//             <Route path="/dashboard" element={<SIRSDashboard />} />
//             <Route path="/reports" element={<IncidentReports />} />
//             <Route path="/reports/:id" element={<IncidentDetail />} />
//             <Route path="/map" element={<IncidentMap />} />
//             <Route path="/analytics" element={<AnalyticsPage />} />
//             <Route path="/notifications" element={<NotificationsPage />} />
//             <Route path="/settings" element={<SettingsPage />} />
//           </Route>

//           {/* 404 - صفحة غير موجودة */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </BrowserRouter>
//     </IncidentProvider>
//   );
// }

// export default App;














// src/App.js
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { AppProvider }        from "./context/AppContext";
// import { IncidentProvider }   from "./context/IncidentContext";

// import Layout             from "./Layout/Layout";
// import LoginPage          from "./Page/LoginPage";
// import SignUpPage         from "./Page/SignUpPage";
// import SIRSDashboard      from "./Page/SIRSDashboard";
// import IncidentReports    from "./Page/IncidentReports";
// import IncidentDetail     from "./Page/IncidentDetail";
// import IncidentMap        from "./Page/IncidentMap";
// import AnalyticsPage      from "./Page/AnalyticsPage";
// import NotificationsPage  from "./Page/NotificationsPage";
// import SettingsPage       from "./Page/SettingsPage";

// function App() {
//   return (
//     // ✅ AppProvider اللفّ الخارجي — بيوفر theme و language لكل الصفحات
//     <AppProvider>
//       <IncidentProvider>
//         <BrowserRouter>
//           <Routes>
//             {/* صفحات بدون Layout */}
//             <Route path="/"       element={<LoginPage />} />
//             <Route path="/signup" element={<SignUpPage />} />

//             {/* كل الصفحات الأخرى داخل Layout */}
//             <Route element={<Layout />}>
//               <Route path="/dashboard"    element={<SIRSDashboard />} />
//               <Route path="/reports"      element={<IncidentReports />} />
//               <Route path="/reports/:id"  element={<IncidentDetail />} />
//               <Route path="/map"          element={<IncidentMap />} />
//               <Route path="/analytics"    element={<AnalyticsPage />} />
//               <Route path="/notifications" element={<NotificationsPage />} />
//               <Route path="/settings"     element={<SettingsPage />} />
//             </Route>

//             {/* 404 */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </BrowserRouter>
//       </IncidentProvider>
//     </AppProvider>
//   );
// }

// export default App;

   


import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";
import LoginPage from "./Page/LoginPage";
import SignUpPage from "./Page/SignUpPage";
import SIRSDashboard from "./Page/SIRSDashboard";
import IncidentReports from "./Page/IncidentReports";
import IncidentDetail from "./Page/IncidentDetail";
import IncidentMap from "./Page/IncidentMap";
import AnalyticsPage from "./Page/AnalyticsPage";
import NotificationsPage from "./Page/NotificationsPage";
import SettingsPage from "./Page/SettingsPage";
import AdminPage from "./Page/AdminPage";
import { IncidentProvider } from "./context/IncidentContext";
import { AppProvider } from "./context/AppContext"; // ← أضفنا ده

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace />;
  return children;
};

function App() {
  return (
    <AppProvider>         {/* ← لازم يكون أول حاجة */}
      <IncidentProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard"      element={<SIRSDashboard />} />
              <Route path="/reports"        element={<IncidentReports />} />
              <Route path="/reports/:id"    element={<IncidentDetail />} />
              <Route path="/map"            element={<IncidentMap />} />
              <Route path="/analytics"      element={<AnalyticsPage />} />
              <Route path="/notifications"  element={<NotificationsPage />} />
              <Route path="/settings"       element={<SettingsPage />} />
              <Route path="/admin"          element={<AdminPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </IncidentProvider>
    </AppProvider>
  );
}

export default App;
