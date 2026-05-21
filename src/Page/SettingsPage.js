// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SettingsPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('user@example.com');
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [changePassword, setChangePassword] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   const [settings, setSettings] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//     pushNotifications: true,
//     theme: 'light',
//     language: 'en'
//   });

//   const handlePasswordChange = (e) => {
//     setChangePassword({
//       ...changePassword,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSavePassword = () => {
//     if (changePassword.newPassword !== changePassword.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     if (changePassword.newPassword.length < 6) {
//       alert('Password must be at least 6 characters');
//       return;
//     }
//     alert('Password updated successfully');
//     setChangePassword({
//       oldPassword: '',
//       newPassword: '',
//       confirmPassword: ''
//     });
//     setShowPasswordForm(false);
//   };

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       navigate('/');
//     }
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Warning: This will permanently delete your account. Are you sure?')) {
//       alert('Account deleted successfully');
//       navigate('/');
//     }
//   };

//   const handleSettingChange = (key) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const handleSelectChange = (key, value) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-2xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-bold">Settings</h1>
//             <p className="text-slate-500 dark:text-slate-400 text-base mt-2">Manage your account settings and preferences</p>
//           </div>

//           {/* Settings Sections */}
//           <div className="space-y-6">
//             {/* Account Settings */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Account Settings</h2>
              
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Email Address</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">{email}</p>
//                   </div>
//                   <button className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium">
//                     Change
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Password</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated 3 months ago</p>
//                   </div>
//                   <button 
//                     onClick={() => setShowPasswordForm(!showPasswordForm)}
//                     className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
//                   >
//                     Change
//                   </button>
//                 </div>

//                 {showPasswordForm && (
//                   <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <div className="space-y-3">
//                       <input
//                         type="password"
//                         name="oldPassword"
//                         placeholder="Current Password"
//                         value={changePassword.oldPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="newPassword"
//                         placeholder="New Password"
//                         value={changePassword.newPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm New Password"
//                         value={changePassword.confirmPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <div className="flex gap-2">
//                         <button
//                           onClick={handleSavePassword}
//                           className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setShowPasswordForm(false)}
//                           className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Notification Settings */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Notifications</h2>
              
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Email Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive email updates</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.emailNotifications}
//                       onChange={() => handleSettingChange('emailNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">SMS Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive SMS alerts</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.smsNotifications}
//                       onChange={() => handleSettingChange('smsNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Push Notifications</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Receive push notifications</p>
//                   </div>
//                   <label className="flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={settings.pushNotifications}
//                       onChange={() => handleSettingChange('pushNotifications')}
//                       className="w-5 h-5"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Preferences */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Preferences</h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Language</label>
//                   <select
//                     value={settings.language}
//                     onChange={(e) => handleSelectChange('language', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="en">English</option>
//                     <option value="ar">العربية</option>
//                     <option value="fr">Français</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Theme</label>
//                   <select
//                     value={settings.theme}
//                     onChange={(e) => handleSelectChange('theme', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                     <option value="auto">Auto</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Danger Zone */}
//             <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
//               <h2 className="text-red-900 dark:text-red-400 text-xl font-bold mb-4">Danger Zone</h2>
              
//               <div className="space-y-3">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
//                 >
//                   Logout
//                 </button>

//                 <button
//                   onClick={handleDeleteAccount}
//                   className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//                 >
//                   Delete Account
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Save Button */}
//           <div className="mt-8 flex gap-2">
//             <button className="flex-1 px-6 py-3 bg-[#022F72] text-white rounded-lg hover:bg-[#022F72]/90 transition-colors font-medium">
//               Save Changes
//             </button>
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SettingsPage = () => {
//   const navigate = useNavigate();

//   // Account
//   const [email, setEmail] = useState('user@example.com');
//   const [emailInput, setEmailInput] = useState(email);
//   const [showEmailForm, setShowEmailForm] = useState(false);

//   // Password
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [changePassword, setChangePassword] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   // Notifications & Preferences
//   const [settings, setSettings] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//     pushNotifications: true,
//     theme: 'light',
//     language: 'en'
//   });

//   // Handlers
//   const handlePasswordChange = (e) => {
//     setChangePassword({ ...changePassword, [e.target.name]: e.target.value });
//   };

//   const handleSavePassword = () => {
//     if (changePassword.newPassword !== changePassword.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     if (changePassword.newPassword.length < 6) {
//       alert('Password must be at least 6 characters');
//       return;
//     }
//     alert('Password updated successfully');
//     setChangePassword({ oldPassword: '', newPassword: '', confirmPassword: '' });
//     setShowPasswordForm(false);
//   };

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) navigate('/');
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Warning: This will permanently delete your account. Are you sure?')) {
//       alert('Account deleted successfully');
//       navigate('/');
//     }
//   };

//   const handleSettingChange = (key) => {
//     setSettings(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleSelectChange = (key, value) => {
//     setSettings(prev => ({ ...prev, [key]: value }));
//   };

//   const handleSaveEmail = () => {
//     if (!emailInput.includes('@')) {
//       alert('Please enter a valid email');
//       return;
//     }
//     setEmail(emailInput);
//     setShowEmailForm(false);
//     alert('Email updated successfully');
//   };

//   const handleSaveAll = () => {
//     // هنا ممكن تضيف ارسال البيانات للـ API
//     alert('All changes saved!');
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden flex flex-col">
//       <div className="flex-1 overflow-y-auto p-8">
//         <div className="max-w-2xl mx-auto">

//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-bold">Settings</h1>
//             <p className="text-slate-500 dark:text-slate-400 text-base mt-2">Manage your account settings and preferences</p>
//           </div>

//           {/* Settings Sections */}
//           <div className="space-y-6">

//             {/* Account Settings */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Account Settings</h2>
              
//               <div className="space-y-4">

//                 {/* Email */}
//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Email Address</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">{email}</p>
//                   </div>
//                   <button 
//                     onClick={() => setShowEmailForm(!showEmailForm)}
//                     className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
//                   >
//                     Change
//                   </button>
//                 </div>

//                 {showEmailForm && (
//                   <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <div className="space-y-3">
//                       <input
//                         type="email"
//                         value={emailInput}
//                         onChange={(e) => setEmailInput(e.target.value)}
//                         placeholder="Enter new email"
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <div className="flex gap-2">
//                         <button
//                           onClick={handleSaveEmail}
//                           className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setShowEmailForm(false)}
//                           className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Password */}
//                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <div>
//                     <p className="text-slate-900 dark:text-white font-medium">Password</p>
//                     <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated 3 months ago</p>
//                   </div>
//                   <button 
//                     onClick={() => setShowPasswordForm(!showPasswordForm)}
//                     className="px-4 py-2 text-[#022F72] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
//                   >
//                     Change
//                   </button>
//                 </div>

//                 {showPasswordForm && (
//                   <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <div className="space-y-3">
//                       <input
//                         type="password"
//                         name="oldPassword"
//                         placeholder="Current Password"
//                         value={changePassword.oldPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="newPassword"
//                         placeholder="New Password"
//                         value={changePassword.newPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm New Password"
//                         value={changePassword.confirmPassword}
//                         onChange={handlePasswordChange}
//                         className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                       />
//                       <div className="flex gap-2">
//                         <button
//                           onClick={handleSavePassword}
//                           className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setShowPasswordForm(false)}
//                           className="flex-1 px-4 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//               </div>
//             </div>

//             {/* Notifications */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Notifications</h2>
//               <div className="space-y-3">
//                 {['emailNotifications', 'smsNotifications', 'pushNotifications'].map((key) => (
//                   <div key={key} className="flex items-center justify-between">
//                     <div>
//                       <p className="text-slate-900 dark:text-white font-medium">
//                         {key === 'emailNotifications' ? 'Email Notifications' :
//                          key === 'smsNotifications' ? 'SMS Notifications' : 'Push Notifications'}
//                       </p>
//                       <p className="text-slate-500 dark:text-slate-400 text-sm">
//                         {key === 'emailNotifications' ? 'Receive email updates' :
//                          key === 'smsNotifications' ? 'Receive SMS alerts' : 'Receive push notifications'}
//                       </p>
//                     </div>
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={settings[key]}
//                         onChange={() => handleSettingChange(key)}
//                         className="w-5 h-5"
//                       />
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Preferences */}
//             <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
//               <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6">Preferences</h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Language</label>
//                   <select
//                     value={settings.language}
//                     onChange={(e) => handleSelectChange('language', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="en">English</option>
//                     <option value="ar">العربية</option>
//                     <option value="fr">Français</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-slate-900 dark:text-white font-medium mb-2">Theme</label>
//                   <select
//                     value={settings.theme}
//                     onChange={(e) => handleSelectChange('theme', e.target.value)}
//                     className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
//                   >
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                     <option value="auto">Auto</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Danger Zone */}
//             {/* <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
//               <h2 className="text-red-900 dark:text-red-400 text-xl font-bold mb-4">Danger Zone</h2>
//               <div className="space-y-3">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
//                 >
//                   Logout
//                 </button>
//                 <button
//                   onClick={handleDeleteAccount}
//                   className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//                 >
//                   Delete Account
//                 </button>
//               </div>
//             </div> */}

//           </div>

//           {/* Save Button */}
//           <div className="mt-8 flex gap-2">
//             <button 
//               onClick={handleSaveAll}
//               className="flex-1 px-6 py-3 bg-[#022F72] text-white rounded-lg hover:bg-[#022F72]/90 transition-colors font-medium"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-400 transition-colors font-medium"
//             >
//               Cancel
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   User, Bell, Shield, EyeOff, Globe, 
//   Moon, Sun, Trash2, LogOut, Save, Mail, Settings, ChevronRight, Lock, Eye, EyeSlash
// } from 'lucide-react';

// const SettingsPage = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState(null);

//   // --- Core States ---
//   const [email, setEmail] = useState('user@example.com');
//   const [language, setLanguage] = useState('en');
//   const [theme, setTheme] = useState('light');
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   // --- Password State ---
//   const [passwords, setPasswords] = useState({
//     current: '',
//     new: '',
//     confirm: ''
//   });

//   // --- Notifications & Privacy States ---
//   const [notifications, setNotifications] = useState({
//     email: true,
//     push: true
//   });
//   const [isAnonymous, setIsAnonymous] = useState(false);

//   // --- Content Dictionary (For Language Support) ---
//   const content = {
//     en: {
//       title: "Settings",
//       desc: "Manage your account and preferences",
//       profile: "Profile & Account",
//       notif: "Notifications",
//       privacy: "Privacy & Security",
//       appearance: "Language & Appearance",
//       save: "Save Changes",
//       back: "Back",
//       logout: "Logout",
//       emailLabel: "Email Address",
//       passBtn: "Change Password",
//       langLabel: "Select Language"
//     },
//     ar: {
//       title: "الإعدادات",
//       desc: "إدارة حسابك وتفضيلاتك",
//       profile: "الحساب الشخصي",
//       notif: "التنبيهات",
//       privacy: "الخصوصية والأمان",
//       appearance: "اللغة والمظهر",
//       save: "حفظ التغييرات",
//       back: "رجوع",
//       logout: "تسجيل الخروج",
//       emailLabel: "البريد الإلكتروني",
//       passBtn: "تغيير كلمة المرور",
//       langLabel: "اختر اللغة"
//     }
//   };

//   const t = content[language];

//   // --- Handlers ---
//   const handlePasswordUpdate = (e) => {
//     e.preventDefault();
//     if (passwords.new !== passwords.confirm) {
//       alert(language === 'en' ? "Passwords don't match!" : "كلمات المرور غير متطابقة!");
//       return;
//     }
//     alert(language === 'en' ? "Password updated successfully!" : "تم تحديث كلمة المرور بنجاح!");
//     setShowPasswordForm(false);
//     setPasswords({ current: '', new: '', confirm: '' });
//   };

//   const handleSaveAll = () => {
//     alert(language === 'en' ? "All settings synchronized!" : "تم حفظ جميع الإعدادات!");
//   };

//   const TabButton = ({ id, icon: Icon, label }) => (
//     <button
//       onClick={() => setActiveTab(id)}
//       className={`flex items-center justify-between px-6 py-4 rounded-2xl font-medium transition-all w-full ${
//         activeTab === id 
//         ? 'bg-[#022F72] text-white shadow-lg scale-[1.02]' 
//         : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 border border-slate-100 dark:border-slate-800'
//       }`}
//     >
//       <div className="flex items-center gap-3">
//         <Icon size={22} />
//         {label}
//       </div>
//       <ChevronRight size={18} className={`transition-transform ${activeTab === id ? 'rotate-90' : 'opacity-30'}`} />
//     </button>
//   );

//   return (
//     <div className={`min-h-screen p-4 md:p-10 font-sans ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <div className="mb-10 flex justify-between items-end">
//           <div>
//             <h1 className="text-4xl font-black">{t.title}</h1>
//             <p className="text-slate-500 mt-2">{t.desc}</p>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-8 text-left">
          
//           {/* Sidebar */}
//           <div className="w-full md:w-80 flex flex-col gap-3">
//             <TabButton id="account" icon={User} label={t.profile} />
//             <TabButton id="notifications" icon={Bell} label={t.notif} />
//             <TabButton id="privacy" icon={Shield} label={t.privacy} />
//             <TabButton id="appearance" icon={Globe} label={t.appearance} />
            
//             <button 
//               onClick={() => window.confirm(t.logout + '?') && navigate('/')}
//               className="mt-4 flex items-center gap-3 px-6 py-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-colors"
//             >
//               <LogOut size={20} /> {t.logout}
//             </button>
//           </div>

//           {/* Content Area */}
//           <div className="flex-1">
//             {!activeTab ? (
//               <div className="h-full min-h-[450px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 text-center shadow-inner">
//                 <Settings size={60} className="text-[#022F72] mb-6 animate-[spin_10s_linear_infinite]" />
//                 <h3 className="text-2xl font-bold opacity-80 uppercase tracking-widest">System Preferences</h3>
//                 <p className="text-slate-400 mt-2">Select a category to modify your account data</p>
//               </div>
//             ) : (
//               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-300">
                
//                 {/* 1. Account Section */}
//                 {activeTab === 'account' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold">{t.profile}</h3>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="text-sm font-bold text-slate-400 block mb-2">{t.emailLabel}</label>
//                         <div className="relative">
//                           <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//                           <input 
//                             type="email" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#022F72]"
//                           />
//                         </div>
//                       </div>

//                       <div className="pt-4 border-t border-slate-50">
//                         {!showPasswordForm ? (
//                           <button 
//                             onClick={() => setShowPasswordForm(true)}
//                             className="flex items-center gap-2 text-[#022F72] font-bold py-2 px-4 hover:bg-blue-50 rounded-xl transition-all"
//                           >
//                             <Lock size={18} /> {t.passBtn}
//                           </button>
//                         ) : (
//                           <form onSubmit={handlePasswordUpdate} className="space-y-4 animate-in slide-in-from-top-4">
//                             <input 
//                               type="password" placeholder="Current Password" required
//                               className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-none outline-none"
//                               value={passwords.current}
//                               onChange={e => setPasswords({...passwords, current: e.target.value})}
//                             />
//                             <input 
//                               type="password" placeholder="New Password" required
//                               className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-none outline-none"
//                               value={passwords.new}
//                               onChange={e => setPasswords({...passwords, new: e.target.value})}
//                             />
//                             <input 
//                               type="password" placeholder="Confirm New Password" required
//                               className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-none outline-none"
//                               value={passwords.confirm}
//                               onChange={e => setPasswords({...passwords, confirm: e.target.value})}
//                             />
//                             <div className="flex gap-2">
//                               <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold">Update</button>
//                               <button type="button" onClick={() => setShowPasswordForm(false)} className="bg-slate-200 px-6 py-2 rounded-xl font-bold">Cancel</button>
//                             </div>
//                           </form>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* 2. Language & Appearance Section */}
//                 {activeTab === 'appearance' && (
//                   <div className="space-y-8">
//                     <h3 className="text-2xl font-bold">{t.appearance}</h3>
                    
//                     {/* Language Switch */}
//                     <div>
//                       <label className="text-sm font-bold text-slate-400 block mb-4">{t.langLabel}</label>
//                       <div className="grid grid-cols-2 gap-4">
//                         <button 
//                           onClick={() => setLanguage('en')}
//                           className={`p-4 rounded-2xl border-2 font-bold transition-all ${language === 'en' ? 'border-[#022F72] bg-blue-50 text-[#022F72]' : 'border-slate-100'}`}
//                         >
//                           English (US)
//                         </button>
//                         <button 
//                           onClick={() => setLanguage('ar')}
//                           className={`p-4 rounded-2xl border-2 font-bold transition-all ${language === 'ar' ? 'border-[#022F72] bg-blue-50 text-[#022F72]' : 'border-slate-100'}`}
//                         >
//                           العربية (مصر)
//                         </button>
//                       </div>
//                     </div>

//                     {/* Theme Switch */}
//                     <div>
//                       <label className="text-sm font-bold text-slate-400 block mb-4 italic">Display Mode</label>
//                       <div className="flex gap-4">
//                         <button onClick={() => setTheme('light')} className={`flex-1 p-6 rounded-3xl border-2 flex flex-col items-center gap-2 ${theme === 'light' ? 'border-[#022F72] bg-white' : 'border-slate-100'}`}>
//                           <Sun size={24}/> Light
//                         </button>
//                         <button onClick={() => setTheme('dark')} className={`flex-1 p-6 rounded-3xl border-2 flex flex-col items-center gap-2 ${theme === 'dark' ? 'border-[#022F72] bg-slate-800' : 'border-slate-100'}`}>
//                           <Moon size={24}/> Dark
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* 3. Notifications */}
//                 {activeTab === 'notifications' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold">{t.notif}</h3>
//                     <div className="space-y-3">
//                       {['email', 'push'].map((key) => (
//                         <div key={key} className="flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">
//                           <span className="font-bold capitalize">{key} Notifications</span>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input type="checkbox" checked={notifications[key]} onChange={() => setNotifications({...notifications, [key]: !notifications[key]})} className="sr-only peer" />
//                             <div className="w-12 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-[#022F72] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all"></div>
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* 4. Privacy */}
//                 {activeTab === 'privacy' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold">{t.privacy}</h3>
//                     <div className="p-6 bg-[#022F72]/5 border-2 border-[#022F72]/10 rounded-[2rem] flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="p-3 bg-[#022F72] text-white rounded-2xl">
//                           <EyeOff size={24}/>
//                         </div>
//                         <div>
//                           <p className="font-bold">Anonymous Mode</p>
//                           <p className="text-sm text-slate-500">Hide your identity when sending reports.</p>
//                         </div>
//                       </div>
//                       <input type="checkbox" checked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} className="w-6 h-6 accent-[#022F72]" />
//                     </div>
//                   </div>
//                 )}

//                 {/* Footer Buttons */}
//                 <div className="mt-12 flex gap-3 pt-8 border-t border-slate-100 dark:border-slate-800">
//                   <button onClick={handleSaveAll} className="flex-1 bg-[#022F72] text-white py-4 rounded-2xl hover:shadow-xl active:scale-95 transition-all font-bold">
//                     <Save size={20} className="inline mr-2" /> {t.save}
//                   </button>
//                   <button onClick={() => setActiveTab(null)} className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-bold">
//                     {t.back}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;



// src/Page/SettingsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, useT } from '../context/AppContext';
import { API_BASE_URL, getAuthHeaders } from '../config/api';

const TABS = ['account', 'notifications', 'privacy', 'appearance'];
const TAB_ICONS = {
  account:       'person',
  notifications: 'notifications',
  privacy:       'shield',
  appearance:    'palette',
};

// ── Small reusable Toggle ─────────────────────────────────────────────────────
const Toggle = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
    <div className="w-12 h-7 bg-slate-300 dark:bg-slate-600 rounded-full peer
      peer-checked:bg-[#022F72]
      after:content-[''] after:absolute after:top-[4px] after:left-[4px]
      after:bg-white after:rounded-full after:h-[20px] after:w-[20px]
      after:transition-all peer-checked:after:translate-x-5" />
  </label>
);

// ─────────────────────────────────────────────────────────────────────────────
const SettingsPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme, language, setLanguage } = useApp();
  const t = useT();

  const [activeTab,     setActiveTab]     = useState(null);
  const [notifications, setNotifications] = useState({ email: true, push: true });
  const [isAnonymous,   setIsAnonymous]   = useState(false);
  const [toast,         setToast]         = useState({ text: '', ok: true });

  // password
  const [showPassForm, setShowPassForm] = useState(false);
  const [passLoading,  setPassLoading]  = useState(false);
  const [passMsg,      setPassMsg]      = useState({ text: '', ok: true });
  const [passwords,    setPasswords]    = useState({ current: '', new: '', confirm: '' });
  const [showPw,       setShowPw]       = useState({ current: false, new: false, confirm: false });

  const showToast = (text, ok = true) => {
    setToast({ text, ok });
    setTimeout(() => setToast({ text: '', ok: true }), 3000);
  };

  const handleLogout = () => {
    if (window.confirm(t.logoutConfirm)) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  // const handlePasswordSubmit = async (e) => {
  //   e.preventDefault();
  //   setPassMsg({ text: '', ok: true });
  //   if (passwords.new !== passwords.confirm) { setPassMsg({ text: t.passNoMatch, ok: false }); return; }
  //   if (passwords.new.length < 6)            { setPassMsg({ text: t.passShort,   ok: false }); return; }

  //   setPassLoading(true);
  //   try {
  //     const res = await fetch(`${API_BASE_URL}/Account/ChangePassword`, {
  //       method: 'POST',
  //       headers: getAuthHeaders(),
  //       body: JSON.stringify({ oldPassword: passwords.current, newPassword: passwords.new, confirmPassword: passwords.confirm }),
  //     });
  //     if (!res.ok) { const err = await res.text(); throw new Error(err || `HTTP ${res.status}`); }
  //     setPassMsg({ text: t.passSuccess, ok: true });
  //     setPasswords({ current: '', new: '', confirm: '' });
  //     setTimeout(() => { setShowPassForm(false); setPassMsg({ text: '', ok: true }); }, 1500);
  //   } catch (err) {
  //     // fallback محلي لو الـ endpoint لسه مش جاهز
  //     if (err.message.includes('404') || err.message.includes('Failed to fetch')) {
  //       setPassMsg({ text: t.passSuccess, ok: true });
  //       setPasswords({ current: '', new: '', confirm: '' });
  //       setTimeout(() => { setShowPassForm(false); setPassMsg({ text: '', ok: true }); }, 1500);
  //     } else {
  //       setPassMsg({ text: `${t.passFail} ${err.message}`, ok: false });
  //     }
  //   } finally { setPassLoading(false); }
  // };

  // ── Password field ──────────────────────────────────────────────────────────
   
 const handlePasswordSubmit = async (e) => {
  e.preventDefault();

  setPassMsg({ text: '', ok: true });

  if (passwords.new !== passwords.confirm) {
    setPassMsg({ text: t.passNoMatch, ok: false });
    return;
  }

  if (passwords.new.length < 6) {
    setPassMsg({ text: t.passShort, ok: false });
    return;
  }

  setPassLoading(true);

  try {
    const res = await fetch(
      `${API_BASE_URL}/Settings/change-password`,
      {
        method: 'PUT',
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          oldPassword: passwords.current,
          newPassword: passwords.new,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to change password');
    }

    setPassMsg({
      text: t.passSuccess,
      ok: true,
    });

    setPasswords({
      current: '',
      new: '',
      confirm: '',
    });

    setTimeout(() => {
      setShowPassForm(false);
      setPassMsg({ text: '', ok: true });
    }, 1500);

  } catch (err) {
    setPassMsg({
      text: err.message || t.passFail,
      ok: false,
    });

    console.log(err);
  } finally {
    setPassLoading(false);
  }
}; 
  
  
  
  
  
  
  
  
  
  const PwField = ({ field, placeholder }) => (
    <div className="relative">
      <input
        type={showPw[field] ? 'text' : 'password'}
        placeholder={placeholder}
        required
        value={passwords[field]}
        onChange={e => setPasswords(p => ({ ...p, [field]: e.target.value }))}
        className="w-full pr-12 pl-4 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl
          border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white
          placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#022F72]"
      />
      <button type="button"
        onClick={() => setShowPw(p => ({ ...p, [field]: !p[field] }))}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        <span className="material-symbols-outlined text-xl">
          {showPw[field] ? 'visibility_off' : 'visibility'}
        </span>
      </button>
    </div>
  );

  // ── Tab button ──────────────────────────────────────────────────────────────
  const TabButton = ({ id }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center justify-between px-5 py-4 rounded-2xl font-medium transition-all w-full
        ${activeTab === id
          ? 'bg-[#022F72] text-white shadow-lg scale-[1.02]'
          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`}
    >
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-xl">{TAB_ICONS[id]}</span>
        {t[id]}
      </div>
      <span className={`material-symbols-outlined text-lg transition-transform ${activeTab === id ? 'rotate-90' : 'opacity-30'}`}>
        chevron_right
      </span>
    </button>
  );

  // ── Card wrapper ────────────────────────────────────────────────────────────
  const Card = ({ children }) => (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
      {children}
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen p-4 md:p-10 font-sans
      bg-slate-50 dark:bg-[#0d1520] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tight">{t.settingsTitle}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{t.settingsDesc}</p>
        </div>

        {/* Toast */}
        {toast.text && (
          <div className={`mb-6 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border
            ${toast.ok
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
              : 'bg-red-50   dark:bg-red-900/20   text-red-700   dark:text-red-300   border-red-200   dark:border-red-800'}`}>
            <span className="material-symbols-outlined text-base">{toast.ok ? 'check_circle' : 'error'}</span>
            {toast.text}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">

          {/* ── Sidebar ── */}
          <div className="w-full md:w-72 flex flex-col gap-3">
            {TABS.map(id => <TabButton key={id} id={id} />)}
            <button
              onClick={handleLogout}
              className="mt-4 flex items-center gap-3 px-5 py-4 text-red-500 font-bold
                hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              {t.logout}
            </button>
          </div>

          {/* ── Content ── */}
          <div className="flex-1">
            {!activeTab ? (
              <div className="h-full min-h-[450px] flex flex-col items-center justify-center
                bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800
                rounded-[2.5rem] p-10 text-center">
                <span className="material-symbols-outlined text-[#022F72] dark:text-blue-400 text-7xl mb-6"
                      style={{ animation: 'spin 10s linear infinite' }}>
                  settings
                </span>
                <h3 className="text-2xl font-bold opacity-70 uppercase tracking-widest">{t.sysPref}</h3>
                <p className="text-slate-400 mt-2">{t.selectCat}</p>
              </div>
            ) : (
              <Card>

                {/* ──── ACCOUNT ──── */}
                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{t.account}</h3>

                    {/* Email — read from JWT */}
                    <div>
                      <label className="text-sm font-bold text-slate-400 block mb-2">{t.emailLabel}</label>
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-50 dark:bg-slate-800
                        rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-xl">mail</span>
                        <span className="text-sm">
                          {(() => {
                            try {
                              const token = localStorage.getItem('token');
                              if (!token) return '—';
                              const payload = JSON.parse(atob(token.split('.')[1]));
                              return payload.email || payload.Email || payload.sub || '—';
                            } catch { return '—'; }
                          })()}
                        </span>
                      </div>
                    </div>

                    {/* Change Password */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      {!showPassForm ? (
                        <button onClick={() => setShowPassForm(true)}
                          className="flex items-center gap-2 text-[#022F72] dark:text-blue-400 font-bold
                            py-2 px-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all">
                          <span className="material-symbols-outlined text-xl">lock</span>
                          {t.passBtn}
                        </button>
                      ) : (
                        <form onSubmit={handlePasswordSubmit} className="space-y-3">
                          <PwField field="current" placeholder={t.currentPass} />
                          <PwField field="new"      placeholder={t.newPass} />
                          <PwField field="confirm"  placeholder={t.confirmPass} />
                          {passMsg.text && (
                            <p className={`text-sm flex items-center gap-1 ${passMsg.ok ? 'text-green-600' : 'text-red-500'}`}>
                              <span className="material-symbols-outlined text-base">{passMsg.ok ? 'check_circle' : 'error'}</span>
                              {passMsg.text}
                            </p>
                          )}
                          <div className="flex gap-2 pt-1">
                            <button type="submit" disabled={passLoading}
                              className="flex items-center gap-2 bg-[#022F72] text-white px-6 py-2.5 rounded-xl font-bold
                                hover:bg-[#022F72]/90 disabled:opacity-50 transition-colors">
                              {passLoading && <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>}
                              {passLoading ? t.saving : t.update}
                            </button>
                            <button type="button"
                              onClick={() => { setShowPassForm(false); setPasswords({ current: '', new: '', confirm: '' }); setPassMsg({ text: '', ok: true }); }}
                              className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2.5 rounded-xl font-bold">
                              {t.cancel}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}

                {/* ──── NOTIFICATIONS ──── */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{t.notifications}</h3>
                    <div className="space-y-3">
                      {[
                        { key: 'email', label: t.emailNotif, icon: 'mail' },
                        { key: 'push',  label: t.pushNotif,  icon: 'notifications' },
                      ].map(({ key, label, icon }) => (
                        <div key={key}
                          className="flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-800
                            rounded-2xl border border-slate-100 dark:border-slate-700">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#022F72] dark:text-blue-400">{icon}</span>
                            <span className="font-medium">{label}</span>
                          </div>
                          <Toggle checked={notifications[key]} onChange={() => setNotifications(n => ({ ...n, [key]: !n[key] }))} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ──── PRIVACY ──── */}
                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{t.privacy}</h3>
                    <div className="flex items-center justify-between p-6
                      bg-[#022F72]/5 dark:bg-[#022F72]/10 border-2 border-[#022F72]/10 rounded-[2rem]">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#022F72] text-white rounded-2xl">
                          <span className="material-symbols-outlined text-2xl">visibility_off</span>
                        </div>
                        <div>
                          <p className="font-bold">{t.anonymous}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{t.anonymousDesc}</p>
                        </div>
                      </div>
                      <Toggle checked={isAnonymous} onChange={() => setIsAnonymous(v => !v)} />
                    </div>
                  </div>
                )}

                {/* ──── APPEARANCE ──── */}
                {activeTab === 'appearance' && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold">{t.appearance}</h3>

                    {/* Language */}
                    <div>
                      <label className="text-sm font-bold text-slate-400 block mb-4">{t.langLabel}</label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { val: 'en', label: 'English (US)', flag: '🇺🇸' },
                          { val: 'ar', label: 'العربية (مصر)', flag: '🇪🇬' },
                        ].map(({ val, label, flag }) => (
                          <button key={val} onClick={() => setLanguage(val)}
                            className={`p-4 rounded-2xl border-2 font-bold transition-all flex items-center gap-2 justify-center
                              ${language === val
                                ? 'border-[#022F72] bg-blue-50 dark:bg-[#022F72]/20 text-[#022F72] dark:text-blue-400'
                                : 'border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}>
                            {flag} {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Theme */}
                    <div>
                      <label className="text-sm font-bold text-slate-400 block mb-4">{t.displayMode}</label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { val: 'light', label: t.light, icon: 'light_mode' },
                          { val: 'dark',  label: t.dark,  icon: 'dark_mode'  },
                        ].map(({ val, label, icon }) => (
                          <button key={val} onClick={() => setTheme(val)}
                            className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-2 font-bold transition-all
                              ${theme === val
                                ? 'border-[#022F72] bg-blue-50 dark:bg-[#022F72]/20 text-[#022F72] dark:text-blue-400'
                                : 'border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}>
                            <span className="material-symbols-outlined text-3xl">{icon}</span>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-10 flex gap-3 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <button onClick={() => showToast(t.settingsSaved)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#022F72] text-white
                      py-4 rounded-2xl hover:shadow-xl active:scale-95 transition-all font-bold">
                    <span className="material-symbols-outlined text-xl">save</span>
                    {t.save}
                  </button>
                  <button onClick={() => setActiveTab(null)}
                    className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400
                      rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    {t.back}
                  </button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
