// import React, { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const validate = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold leading-tight">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               <form className="space-y-4" onSubmit={validate}>

//                 {/* Email */}
//                 <div>
//                   <label className="block pb-2 text-slate-800 dark:text-slate-200">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       mail
//                     </span>
//                     <input
//                       type="email"
//                       className="w-full h-14 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 pl-12 pr-4"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block pb-2 text-slate-800 dark:text-slate-200">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       lock
//                     </span>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full h-14 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 pl-12 pr-12"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       <span className="material-symbols-outlined text-slate-400">
//                         {showPassword ? "visibility" : "visibility_off"}
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   <a href="#" className="text-primary text-sm hover:underline">
//                     Forgot Password?
//                   </a>
//                 </div>

//                 <button className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium">
//                   Secure Login
//                 </button>

//               </form>
//             </div>
//           </div>

//           {/* Footer */}
          
//            <div className="text-center text-sm text-slate-500 dark:text-slate-400 space-y-2 break-words mt-6">
//                   <p>Unauthorized access is strictly prohibited. All activities are monitored.</p>
//            <div className="flex justify-center items-center gap-x-4">
//                   <p>© 2024 Incident Reporting Authority</p>
//                   <span>·</span>
//                   <a className="hover:text-primary hover:underline" href="#">Help & Support</a>
//             </div>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;















// import React, { useState } from "react";



// const LoginPage = () => {
//   // 1. حالة تخزين البيانات
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   // 2. حالة إظهار وإخفاء كلمة المرور
//   const [showPassword, setShowPassword] = useState(false);

//   // 3. منع الريفرش عند تسجيل الدخول
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Data to send:", { email, password });
//     alert(`Attempting login for: ${email}`);
//   };

//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">security</span>
//               <h1 className="text-slate-800 dark:text-slate-200 tracking-light text-[32px] font-bold leading-tight">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Login Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">
//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2" htmlFor="email">
//                     Email Address
//                   </label>
//                   <div className="relative flex items-center">
//                     <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 absolute left-4">mail</span>
//                     <input
//                       className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] pl-12 text-base font-normal leading-normal"
//                       id="email"
//                       placeholder="Enter your email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       autoComplete="email"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2" htmlFor="password">
//                     Password
//                   </label>
//                   <div className="relative flex items-center">
//                     <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 absolute left-4">lock</span>
//                     <input
//                       className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] pl-12 pr-12 text-base font-normal leading-normal"
//                       id="password"
//                       placeholder="Enter your password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       autoComplete="current-password"
//                     />
//                     <button
//                       className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       <span className="material-symbols-outlined">
//                         {showPassword ? "visibility" : "visibility_off"}
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-end pt-1">
//                   <a className="text-primary hover:underline text-sm font-normal leading-normal" href="#">Forgot Password?</a>
//                 </div>

//                 <button
//                   className="flex w-full items-center justify-center rounded-lg bg-[#022F72] h-14 px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
//                   type="submit"
//                 >
//                   Secure Login
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="text-center text-sm text-slate-500 dark:text-slate-400 space-y-1 mt-6">
//             <p>Unauthorized access is strictly prohibited. All activities are monitored.</p>
//             <div className="flex justify-center items-center gap-x-4">
//               <p>© 2024 Incident Reporting Authority</p>
//               <span>·</span>
//               <a className="hover:text-primary hover:underline" href="#">Help & Support</a>
//             </div>
//           </footer>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;










// دا لو عايزه اربطها بالداش بورد 
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const LoginPage = () => {
//   // 1. حالة تخزين البيانات
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // 2. حالة إظهار وإخفاء كلمة المرور
//   const [showPassword, setShowPassword] = useState(false);

//   // 3. navigation
//   const navigate = useNavigate();

//   // 4. منع الريفرش + روح على الداشبورد
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Data to send:", { email, password });

//     // بعد اللوجين روحي الداشبورد
//     navigate("/dashboard");
//   };

//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Login Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Email Address</label>
//                   <div className="relative">
//                     <input
//                       className="w-full h-14 pl-12 pr-4 rounded-lg border"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Password</label>
//                   <div className="relative">
//                     <input
//                       className="w-full h-14 pl-12 pr-12 rounded-lg border"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium"
//                 >
//                   Secure Login
//                 </button>
//               </form>

//               {/* SignUp Link */}
//               <div className="text-center text-sm">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Don't have an account?{" "}
//                   <Link to="/signup" className="text-[#022F72] font-semibold hover:underline">
//                     Sign up here
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="text-center text-sm text-slate-500 mt-6">
//             © 2024 Incident Reporting Authority
//           </footer>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;








 





// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { API_BASE_URL } from '../config/api';
// // import { API_BASE_URL, getAuthHeaders, getJsonHeaders } from '../config/api';
// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch(`${API_BASE_URL}/LoginAuthority/login`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         // body: JSON.stringify({
// //         //   email,
// //         //   password
// //         // })
// //         body: JSON.stringify({
// //         Email: email,
// //         Password: password
// //         })
// //       });

// //       if (!res.ok) {
// //   const errorText = await res.text();
// //   console.log("ERROR FROM SERVER:", errorText);
// //   throw new Error("Login failed");
// // }

// //       const data = await res.json();

// //       const authToken = data.token || data.access_token || data.accessToken || data.jwt;
// //       if (!authToken) {
// //         throw new Error("Login response did not include a token.");
// //       }

// //       localStorage.setItem("token", authToken);
// //       navigate("/dashboard");

// //     } catch (err) {
// //       setError("Invalid email or password");
// //       console.error(err);
// //     }
// //   };








// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const res = await fetch(
// //       "http://207.180.209.101:5000/api/LoginAuthority/Login",
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },

// //         body: JSON.stringify({
// //           email,
// //           password,
// //           deviceToken: ""
// //         })
// //       }
// //     );

// //     if (!res.ok) {
// //       const errorText = await res.text();
// //       console.log("ERROR FROM SERVER:", errorText);
// //       throw new Error("Login failed");
// //     }

// //     const data = await res.json();

// //     const authToken =
// //       data.token ||
// //       data.access_token ||
// //       data.accessToken ||
// //       data.jwt;

// //     if (!authToken) {
// //       throw new Error("Login response did not include a token.");
// //     }

// //     localStorage.setItem("token", authToken);

// //     navigate("/dashboard");

// //   } catch (err) {
// //     setError("Invalid email or password");
// //     console.error(err);
// //   }
// // };


// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setError("");

// //   try {
// //     const res = await fetch(`${API_BASE_URL}/LoginAuthority/Login`, {
// //       method: "POST",
// //       headers: getJsonHeaders(), // مهم: هنا NOT auth headers

// //       body: JSON.stringify({
// //         email: email.trim(),
// //         password: password,
// //         deviceToken: "web_client_test" 
// //       }),
// //     });

// //     const data = await res.json();

// //     if (!res.ok) {
// //       console.log("LOGIN ERROR:", data);
// //       throw new Error(data?.message || "Login failed");
// //     }

// //     const token =
// //       data?.token ||
// //       data?.accessToken ||
// //       data?.access_token ||
// //       data?.jwt;

// //     if (!token) {
// //       console.log("NO TOKEN RESPONSE:", data);
// //       throw new Error("Token not returned from server");
// //     }

// //     localStorage.setItem("token", token);
// //     navigate("/dashboard");

// //   } catch (err) {
// //     console.error(err);
// //     setError("Invalid email or password");
// //   }
// // };









// // 1. تأكدي أولاً من استيراد getJsonHeaders في أعلى الملف مع الـ API_BASE_URL هكذا:
// import { API_BASE_URL, getJsonHeaders } from '../config/api';

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // استخدمي الـ API_BASE_URL المستورد بدلاً من الرابط اليدوي الثابت
//     const res = await fetch(`${API_BASE_URL}/LoginAuthority/Login`, {
//       method: "POST",
//       headers: getJsonHeaders(), // استخدام الهيدرز الديناميكية لتخطي تحذير ngrok

//       body: JSON.stringify({
//         email,
//         password,
//         deviceToken: ""
//       })
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.log("ERROR FROM SERVER:", errorText);
//       throw new Error("Login failed");
//     }

//     const data = await res.json();

//     const authToken =
//       data.token ||
//       data.access_token ||
//       data.accessToken ||
//       data.jwt;

//     if (!authToken) {
//       throw new Error("Login response did not include a token.");
//     }

//     localStorage.setItem("token", authToken);

//     navigate("/dashboard");

//   } catch (err) {
//     setError("Invalid email or password");
//     console.error(err);
//   }
// };



//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Login Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {error && (
//                 <p className="text-red-500 text-sm text-center">{error}</p>
//               )}

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Email Address</label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       mail
//                     </span>
//                     <input
//                       className="w-full h-14 pl-12 pr-4 rounded-lg border"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Password</label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       lock
//                     </span>
//                     <input
//                       className="w-full h-14 pl-12 pr-12 rounded-lg border"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium"
//                 >
//                   Secure Login
//                 </button>
//               </form>

//               {/* SignUp Link */}
//               <div className="text-center text-sm">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Don't have an account?{" "}
//                   <Link to="/signup" className="text-[#022F72] font-semibold hover:underline">
//                     Sign up here
//                   </Link>
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






// اخر كود للكلووود
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email,        setEmail]        = useState("");
  const [password,     setPassword]     = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error,        setError]        = useState("");
  const [loading,      setLoading]      = useState(false);
  const navigate = useNavigate();

  const getDeviceToken = () => {
    let t = localStorage.getItem("deviceToken");
    if (!t) {
      t = "web_" + Math.random().toString(36).substring(2) + "_" + Date.now();
      localStorage.setItem("deviceToken", t);
    }
    return t;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://legatine-barbera-mitochondrial.ngrok-free.dev/api/LoginAuthority/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email:       email.trim(),
          password:    password,
          deviceToken: getDeviceToken(),
        }),
      });

      const text = await res.text();
      console.log("Login response:", res.status, text);

      let data = null;
      try { data = JSON.parse(text); } catch (_) {}

      if (!res.ok) {
        throw new Error(data?.message || `Login failed (${res.status})`);
      }

      const authToken =
        data?.token       ||
        data?.accessToken ||
        data?.access_token||
        data?.jwt;

      if (!authToken) {
        throw new Error("Token not returned from server.");
      }

      localStorage.setItem("token", authToken);
      if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");

    } catch (err) {
      console.error("Login error:", err.message);
      if (err.message.toLowerCase().includes("failed to fetch")) {
        setError("Cannot reach server. Check your connection.");
      } else {
        setError(err.message || "Invalid email or password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">

          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[#022F72] text-4xl">
                security
              </span>
              <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
                Smart Incident Reporting System
              </h1>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
            <div className="flex flex-col space-y-6">

              <div className="text-center">
                <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
                  Authorized Personnel Login
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Sign in to access your dashboard.
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      mail
                    </span>
                    <input
                      className="w-full h-14 pl-12 pr-4 rounded-lg border"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="pb-2 font-medium">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      lock
                    </span>
                    <input
                      className="w-full h-14 pl-12 pr-12 rounded-lg border"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                      Signing in...
                    </>
                  ) : "Secure Login"}
                </button>
              </form>

              {/* SignUp Link */}
              {/* <div className="text-center text-sm">
                <p className="text-slate-600 dark:text-slate-400">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#022F72] font-semibold hover:underline">
                    Sign up here
                  </Link>
                </p>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;










// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// // import { API_BASE_URL } from '../config/api';
// import { API_BASE_URL, getAuthHeaders, getJsonHeaders } from '../config/api';
// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();



// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // استخدمي الـ API_BASE_URL المستورد بدلاً من الرابط اليدوي الثابت
//     const res = await fetch(`${API_BASE_URL}/LoginAuthority/Login`, {
//       method: "POST",
//       headers: getJsonHeaders(), // استخدام الهيدرز الديناميكية لتخطي تحذير ngrok

//       body: JSON.stringify({
//         email,
//         password,
//         deviceToken: ""
//       })
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.log("ERROR FROM SERVER:", errorText);
//       throw new Error("Login failed");
//     }

//     const data = await res.json();

//     const authToken =
//       data.token ||
//       data.access_token ||
//       data.accessToken ||
//       data.jwt;

//     if (!authToken) {
//       throw new Error("Login response did not include a token.");
//     }

//     localStorage.setItem("token", authToken);

//     navigate("/dashboard");

//   } catch (err) {
//     setError("Invalid email or password");
//     console.error(err);
//   }
// };
















// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     // استخدمي الـ API_BASE_URL المستورد بدلاً من الرابط اليدوي الثابت
// //     const res = await fetch(`${API_BASE_URL}/LoginAuthority/Login`, {
// //       method: "POST",
// //       headers: getJsonHeaders(), // استخدام الهيدرز الديناميكية لتخطي تحذير ngrok

// //       body: JSON.stringify({
// //         email,
// //         password,
// //         deviceToken: ""
// //       })
// //     });

// //     if (!res.ok) {
// //       const errorText = await res.text();
// //       console.log("ERROR FROM SERVER:", errorText);
// //       throw new Error("Login failed");
// //     }

// //     const data = await res.json();

// //     const authToken =
// //       data.token ||
// //       data.access_token ||
// //       data.accessToken ||
// //       data.jwt;

// //     if (!authToken) {
// //       throw new Error("Login response did not include a token.");
// //     }

// //     localStorage.setItem("token", authToken);

// //     navigate("/dashboard");

// //   } catch (err) {
// //     setError("Invalid email or password");
// //     console.error(err);
// //   }
// // };



//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Login Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {error && (
//                 <p className="text-red-500 text-sm text-center">{error}</p>
//               )}

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Email Address</label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       mail
//                     </span>
//                     <input
//                       className="w-full h-14 pl-12 pr-4 rounded-lg border"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">Password</label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       lock
//                     </span>
//                     <input
//                       className="w-full h-14 pl-12 pr-12 rounded-lg border"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium"
//                 >
//                   Secure Login
//                 </button>
//               </form>

//               {/* SignUp Link */}
//               <div className="text-center text-sm">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Don't have an account?{" "}
//                   <Link to="/signup" className="text-[#022F72] font-semibold hover:underline">
//                     Sign up here
//                   </Link>
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { API_BASE_URL, getJsonHeaders } from "../config/api";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     try {
//       console.log("API URL =", API_BASE_URL);

//       const res = await fetch(`${API_BASE_URL}/LoginAuthority/Login`, {
//         method: "POST",
//         headers: getJsonHeaders(),

//         // body: JSON.stringify({
//         //   Email: email,
//         //   Password: password,
//         //   deviceToken: ""
//         // }),
//         body: JSON.stringify({
//   email,
//   password,
//   deviceToken: "",
// }),

//       });

//       console.log("STATUS =", res.status);

//       // نخزن الرد كنص الأول علشان نعرف السيرفر بيرجع اي
//       const responseText = await res.text();

//       console.log("SERVER RESPONSE =", responseText);

//       // لو فيه مشكلة
//       if (!res.ok) {
//         throw new Error("Login failed");
//       }

//       // نحول الرد لـ JSON
//       const data = JSON.parse(responseText);

//       console.log("DATA =", data);

//       // نحاول نجيب التوكن بأي اسم محتمل
//       const authToken =
//         data.token ||
//         data.access_token ||
//         data.accessToken ||
//         data.jwt;

//       // لو مفيش توكن
//       if (!authToken) {
//         throw new Error("Token not found");
//       }

//       // تخزين التوكن
//       localStorage.setItem("token", authToken);

//       console.log("TOKEN SAVED =", authToken);

//       // تحويل للداشبورد
//       navigate("/dashboard");

//     } catch (err) {
//       console.error("LOGIN ERROR =", err);
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">
//                 security
//               </span>

//               <h1 className="text-slate-800 dark:text-slate-200 text-[32px] font-bold">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Login Card */}
//           <div className="bg-white dark:bg-background-dark dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">

//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-[22px] font-bold">
//                   Authorized Personnel Login
//                 </h2>

//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {/* Error */}
//               {error && (
//                 <p className="text-red-500 text-sm text-center">
//                   {error}
//                 </p>
//               )}

//               {/* Form */}
//               <form className="space-y-4" onSubmit={handleSubmit}>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">
//                     Email Address
//                   </label>

//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       mail
//                     </span>

//                     <input
//                       className="w-full h-14 pl-12 pr-4 rounded-lg border"
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col">
//                   <label className="pb-2 font-medium">
//                     Password
//                   </label>

//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                       lock
//                     </span>

//                     <input
//                       className="w-full h-14 pl-12 pr-12 rounded-lg border"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />

//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? "🙈" : "👁️"}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-lg bg-[#022F72] text-white font-medium"
//                 >
//                   Secure Login
//                 </button>

//               </form>

//               {/* Signup */}
//               <div className="text-center text-sm">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Don't have an account?{" "}

//                   <Link
//                     to="/signup"
//                     className="text-[#022F72] font-semibold hover:underline"
//                   >
//                     Sign up here
//                   </Link>
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API_BASE_URL } from "../config/api";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Please enter your email and password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE_URL}/Auth/Login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json().catch(() => ({}));
//         throw new Error(errorData?.message ?? `Login failed (${res.status})`);
//       }

//       const data = await res.json();

//       // Store token and any user info returned
//       const token = data?.token ?? data?.accessToken ?? data?.jwt;
//       if (!token) throw new Error("No token received from server.");

//       localStorage.setItem("token", token);
//       if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="font-display bg-[#f6f7f8] dark:bg-[#101922] min-h-screen">
//       <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">

//           {/* Header */}
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2">
//               <span className="material-symbols-outlined text-[#022F72] text-4xl">security</span>
//               <h1 className="text-slate-800 dark:text-slate-200 text-2xl md:text-[32px] font-bold leading-tight">
//                 Smart Incident Reporting System
//               </h1>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="bg-white dark:bg-[#141e2e] dark:border dark:border-slate-800 p-8 rounded-xl shadow-sm">
//             <div className="flex flex-col space-y-6">

//               <div className="text-center">
//                 <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
//                   Authorized Personnel Login
//                 </h2>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                   Sign in to access your dashboard.
//                 </p>
//               </div>

//               {error && (
//                 <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
//                   <span className="material-symbols-outlined text-red-500 text-base">error</span>
//                   <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
//                 </div>
//               )}

//               <form className="space-y-4" onSubmit={handleLogin}>

//                 {/* Email */}
//                 <div>
//                   <label className="block pb-2 text-slate-800 dark:text-slate-200 text-sm font-medium">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
//                     <input
//                       type="email"
//                       className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#022F72]"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block pb-2 text-slate-800 dark:text-slate-200 text-sm font-medium">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 pl-12 pr-12 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#022F72]"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       <span className="material-symbols-outlined text-slate-400">
//                         {showPassword ? "visibility" : "visibility_off"}
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full h-12 rounded-lg bg-[#022F72] text-white font-medium hover:bg-[#022F72]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
//                       Signing in...
//                     </>
//                   ) : (
//                     "Secure Login"
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center text-sm text-slate-500 dark:text-slate-400 space-y-2 break-words mt-6">
//             <p>Unauthorized access is strictly prohibited. All activities are monitored.</p>
//             <p>© 2024 Incident Reporting Authority</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;