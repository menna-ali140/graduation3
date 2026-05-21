// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [theme, setThemeState] = useState(() => localStorage.getItem('theme') || 'light');
//   const [language, setLangState] = useState(() => localStorage.getItem('language') || 'en');

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   useEffect(() => {
//     document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
//     document.documentElement.lang = language;
//     localStorage.setItem('language', language);
//   }, [language]);

//   const toggleTheme = () => setThemeState((t) => (t === 'light' ? 'dark' : 'light'));
//   const setTheme = (val) => setThemeState(val);
//   const setLanguage = (val) => setLangState(val);

//   return (
//     <AppContext.Provider value={{ theme, setTheme, toggleTheme, language, setLanguage }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useApp = () => useContext(AppContext);

// export const TRANSLATIONS = {
//   en: {
//     dashboard: 'Dashboard',
//     reports: 'Reports',
//     map: 'Map',
//     analytics: 'Analytics',
//     notifications: 'Notifications',
//     settings: 'Settings',
//     logout: 'Log out',
//     logoutConfirm: 'Are you sure you want to logout?',
//     settingsTitle: 'Settings',
//     settingsDesc: 'Manage your account and preferences',
//     account: 'Profile & Account',
//     privacy: 'Privacy & Security',
//     appearance: 'Language & Appearance',
//     save: 'Save Changes',
//     back: 'Back',
//     emailLabel: 'Email Address',
//     passBtn: 'Change Password',
//     langLabel: 'Select Language',
//     displayMode: 'Display Mode',
//     light: 'Light',
//     dark: 'Dark',
//     emailNotif: 'Email Notifications',
//     pushNotif: 'Push Notifications',
//     anonymous: 'Anonymous Mode',
//     anonymousDesc: 'Hide your identity when sending reports.',
//     currentPass: 'Current Password',
//     newPass: 'New Password',
//     confirmPass: 'Confirm New Password',
//     update: 'Update',
//     cancel: 'Cancel',
//     saving: 'Saving…',
//     selectCat: 'Select a category to modify your account data',
//     sysPref: 'SYSTEM PREFERENCES',
//     passNoMatch: "Passwords don't match!",
//     passShort: 'Password must be at least 6 characters',
//     passSuccess: 'Password updated successfully!',
//     passFail: 'Failed to update password.',
//     settingsSaved: 'Settings saved!',
//     api: {
//       types: {
//         Fire: 'Fire',
//         Medical: 'Medical',
//         Crime: 'Crime',
//         Infrastructure: 'Infrastructure',
//         'Road Damage': 'Road Damage',
//         'Traffic Accident': 'Traffic Accident',
//         'Medical Emergency': 'Medical Emergency',
//         'Infrastructure Damage': 'Infrastructure Damage',
//       },
//       statuses: {
//         Pending: 'Pending',
//         'In Progress': 'In Progress',
//         Resolved: 'Resolved',
//         Closed: 'Closed',
//         Active: 'Active',
//         Solved: 'Solved',
//         Archived: 'Archived',
//         'High Priority': 'High Priority',
//       },
//       priorities: {
//         High: 'High',
//         Medium: 'Medium',
//         Low: 'Low',
//         Critical: 'Critical',
//       },
//       categories: {
//         Fire: 'Fire',
//         Medical: 'Medical',
//         Crime: 'Crime',
//         Infrastructure: 'Infrastructure',
//       },
//       aiPhrases: {
//         'Structural Fire': 'Structural Fire',
//         'Vehicle Collision': 'Vehicle Collision',
//         'Cardiac Arrest': 'Cardiac Arrest',
//         'Power Outage': 'Power Outage',
//       },
//     },
//   },
//   ar: {
//     dashboard: 'لوحة التحكم',
//     reports: 'البلاغات',
//     map: 'الخريطة',
//     analytics: 'التحليلات',
//     notifications: 'الإشعارات',
//     settings: 'الإعدادات',
//     logout: 'تسجيل الخروج',
//     logoutConfirm: 'هل أنت متأكد من رغبتك في تسجيل الخروج؟',
//     settingsTitle: 'الإعدادات',
//     settingsDesc: 'إدارة حسابك وتفضيلاتك',
//     account: 'الحساب الشخصي',
//     privacy: 'الخصوصية والأمان',
//     appearance: 'اللغة والمظهر',
//     save: 'حفظ التغييرات',
//     back: 'رجوع',
//     emailLabel: 'البريد الإلكتروني',
//     passBtn: 'تغيير كلمة المرور',
//     langLabel: 'اختر اللغة',
//     displayMode: 'وضع العرض',
//     light: 'فاتح',
//     dark: 'داكن',
//     emailNotif: 'إشعارات البريد',
//     pushNotif: 'إشعارات الجهاز',
//     anonymous: 'الوضع المجهول',
//     anonymousDesc: 'إخفاء هويتك عند إرسال البلاغات.',
//     currentPass: 'كلمة المرور الحالية',
//     newPass: 'كلمة المرور الجديدة',
//     confirmPass: 'تأكيد كلمة المرور الجديدة',
//     update: 'تحديث',
//     cancel: 'إلغاء',
//     saving: 'جاري الحفظ…',
//     selectCat: 'اختر قسمًا لتعديل بيانات حسابك',
//     sysPref: 'تفضيلات النظام',
//     passNoMatch: 'كلمات المرور غير متطابقة!',
//     passShort: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
//     passSuccess: 'تم تحديث كلمة المرور بنجاح!',
//     passFail: 'فشل تحديث كلمة المرور.',
//     settingsSaved: 'تم حفظ الإعدادات!',
//     api: {
//       types: {
//         Fire: 'حريق',
//         Medical: 'طبي',
//         Crime: 'جريمة',
//         Infrastructure: 'بنية تحتية',
//         'Road Damage': 'أضرار طريق',
//         'Traffic Accident': 'حادث مروري',
//         'Medical Emergency': 'حالة طبية',
//         'Infrastructure Damage': 'أضرار بنية تحتية',
//       },
//       statuses: {
//         Pending: 'قيد الانتظار',
//         'In Progress': 'قيد التنفيذ',
//         Resolved: 'تم الحل',
//         Closed: 'مغلق',
//         Active: 'نشط',
//         Solved: 'تم الحل',
//         Archived: 'مؤرشف',
//         'High Priority': 'أولوية عالية',
//       },
//       priorities: {
//         High: 'عالية',
//         Medium: 'متوسطة',
//         Low: 'منخفضة',
//         Critical: 'حرجة',
//       },
//       categories: {
//         Fire: 'حريق',
//         Medical: 'طبي',
//         Crime: 'جريمة',
//         Infrastructure: 'بنية تحتية',
//       },
//       aiPhrases: {
//         'Structural Fire': 'حريق هيكلي',
//         'Vehicle Collision': 'تصادم مركبات',
//         'Cardiac Arrest': 'سكتة قلبية',
//         'Power Outage': 'انقطاع كهرباء',
//       },
//     },
//   },
// };

// export const useT = () => {
//   const { language } = useApp();
//   const base = TRANSLATIONS[language] || TRANSLATIONS.en;
//   const apiMaps = {
//     ...(base.api?.types || {}),
//     ...(base.api?.categories || {}),
//     ...(base.api?.statuses || {}),
//     ...(base.api?.priorities || {}),
//     ...(base.api?.aiPhrases || {}),
//   };

//   const translateApiValue = (value) => {
//     if (value === undefined || value === null) return value;
//     if (typeof value !== 'string') return value;
//     const trimmed = value.trim();
//     if (apiMaps[trimmed]) return apiMaps[trimmed];
//     const match = trimmed.match(/^(.+?)(\s*-\s*\d+%.*)$/);
//     if (match) {
//       return `${translateApiValue(match[1])}${match[2]}`;
//     }
//     return trimmed;
//   };

//   return {
//     ...base,
//     translateApiValue,
//   };
// };











import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme,    setThemeState] = useState(() => localStorage.getItem('theme')    || 'light');
  const [language, setLangState]  = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir  = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setThemeState(t => t === 'light' ? 'dark' : 'light');
  const setTheme    = (val) => setThemeState(val);
  const setLanguage = (val) => setLangState(val);

  return (
    <AppContext.Provider value={{ theme, setTheme, toggleTheme, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

// ────────────────────────────────────────────────────────────────
// Translations
// ────────────────────────────────────────────────────────────────
export const TRANSLATIONS = {
  en: {
    dashboard:     'Dashboard',
    reports:       'Reports',
    map:           'Map',
    analytics:     'Analytics',
    notifications: 'Notifications',
    settings:      'Settings',
    logout:        'Log out',
    logoutConfirm: 'Are you sure you want to logout?',
    settingsTitle:    'Settings',
    settingsDesc:     'Manage your account and preferences',
    account:          'Profile & Account',
    privacy:          'Privacy & Security',
    appearance:       'Language & Appearance',
    save:             'Save Changes',
    back:             'Back',
    emailLabel:       'Email Address',
    passBtn:          'Change Password',
    langLabel:        'Select Language',
    displayMode:      'Display Mode',
    light:            'Light',
    dark:             'Dark',
    emailNotif:       'Email Notifications',
    pushNotif:        'Push Notifications',
    anonymous:        'Anonymous Mode',
    anonymousDesc:    'Hide your identity when sending reports.',
    currentPass:      'Current Password',
    newPass:          'New Password',
    confirmPass:      'Confirm New Password',
    update:           'Update',
    cancel:           'Cancel',
    saving:           'Saving…',
    selectCat:        'Select a category to modify your account data',
    sysPref:          'SYSTEM PREFERENCES',
    passNoMatch:      "Passwords don't match!",
    passShort:        'Password must be at least 6 characters',
    passSuccess:      'Password updated successfully!',
    passFail:         'Failed to update password.',
    settingsSaved:    'Settings saved!',
    api: {
      types: {
        Fire: 'Fire', Medical: 'Medical', Crime: 'Crime',
        Infrastructure: 'Infrastructure', 'Road Damage': 'Road Damage',
        'Traffic Accident': 'Traffic Accident',
        'Medical Emergency': 'Medical Emergency',
        'Infrastructure Damage': 'Infrastructure Damage',
      },
      statuses: {
        Pending: 'Pending', 'In Progress': 'In Progress',
        Resolved: 'Resolved', Closed: 'Closed', Active: 'Active',
        Solved: 'Solved', Archived: 'Archived', 'High Priority': 'High Priority',
      },
      priorities: { High: 'High', Medium: 'Medium', Low: 'Low', Critical: 'Critical' },
      categories: { Fire: 'Fire', Medical: 'Medical', Crime: 'Crime', Infrastructure: 'Infrastructure' },
      aiPhrases: {
        'Structural Fire': 'Structural Fire', 'Vehicle Collision': 'Vehicle Collision',
        'Cardiac Arrest': 'Cardiac Arrest', 'Power Outage': 'Power Outage',
      },
    },
  },

  ar: {
    dashboard:     'لوحة التحكم',
    reports:       'البلاغات',
    map:           'الخريطة',
    analytics:     'التحليلات',
    notifications: 'الإشعارات',
    settings:      'الإعدادات',
    logout:        'تسجيل الخروج',
    logoutConfirm: 'هل أنت متأكد من رغبتك في تسجيل الخروج؟',
    settingsTitle:    'الإعدادات',
    settingsDesc:     'إدارة حسابك وتفضيلاتك',
    account:          'الحساب الشخصي',
    privacy:          'الخصوصية والأمان',
    appearance:       'اللغة والمظهر',
    save:             'حفظ التغييرات',
    back:             'رجوع',
    emailLabel:       'البريد الإلكتروني',
    passBtn:          'تغيير كلمة المرور',
    langLabel:        'اختر اللغة',
    displayMode:      'وضع العرض',
    light:            'فاتح',
    dark:             'داكن',
    emailNotif:       'إشعارات البريد',
    pushNotif:        'إشعارات الجهاز',
    anonymous:        'الوضع المجهول',
    anonymousDesc:    'إخفاء هويتك عند إرسال البلاغات.',
    currentPass:      'كلمة المرور الحالية',
    newPass:          'كلمة المرور الجديدة',
    confirmPass:      'تأكيد كلمة المرور الجديدة',
    update:           'تحديث',
    cancel:           'إلغاء',
    saving:           'جاري الحفظ…',
    selectCat:        'اختر قسمًا لتعديل بيانات حسابك',
    sysPref:          'تفضيلات النظام',
    passNoMatch:      'كلمات المرور غير متطابقة!',
    passShort:        'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
    passSuccess:      'تم تحديث كلمة المرور بنجاح!',
    passFail:         'فشل تحديث كلمة المرور.',
    settingsSaved:    'تم حفظ الإعدادات!',
    api: {
      types: {
        Fire: 'حريق', Medical: 'طبي', Crime: 'جريمة',
        Infrastructure: 'بنية تحتية', 'Road Damage': 'أضرار طريق',
        'Traffic Accident': 'حادث مروري',
        'Medical Emergency': 'حالة طبية طارئة',
        'Infrastructure Damage': 'أضرار بنية تحتية',
      },
      statuses: {
        Pending: 'قيد الانتظار', 'In Progress': 'قيد التنفيذ',
        Resolved: 'تم الحل', Closed: 'مغلق', Active: 'نشط',
        Solved: 'تم الحل', Archived: 'مؤرشف', 'High Priority': 'أولوية عالية',
      },
      priorities: { High: 'عالية', Medium: 'متوسطة', Low: 'منخفضة', Critical: 'حرجة' },
      categories: { Fire: 'حريق', Medical: 'طبي', Crime: 'جريمة', Infrastructure: 'بنية تحتية' },
      aiPhrases: {
        'Structural Fire': 'حريق هيكلي', 'Vehicle Collision': 'تصادم مركبات',
        'Cardiac Arrest': 'سكتة قلبية', 'Power Outage': 'انقطاع كهرباء',
      },
    },
  },
};

// ────────────────────────────────────────────────────────────────
// useT — بيرجع الترجمات + translateApiValue
// ────────────────────────────────────────────────────────────────
export const useT = () => {
  const { language } = useApp();
  const base = TRANSLATIONS[language] || TRANSLATIONS.en;

  // ادمج كل قواميس الـ API في map واحد
  const apiMaps = {
    ...(base.api?.types      || {}),
    ...(base.api?.categories || {}),
    ...(base.api?.statuses   || {}),
    ...(base.api?.priorities || {}),
    ...(base.api?.aiPhrases  || {}),
  };

  const translateApiValue = (value) => {
    if (value === undefined || value === null) return value;
    if (typeof value !== 'string') return value;
    const trimmed = value.trim();
    // ترجمة مباشرة
    if (apiMaps[trimmed]) return apiMaps[trimmed];
    // لو القيمة فيها "- 92%" في الآخر، ترجم الجزء الأول بس
    const match = trimmed.match(/^(.+?)(\s*-\s*\d+%.*)$/);
    if (match) return `${translateApiValue(match[1])}${match[2]}`;
    return trimmed;
  };

  return {
    ...base,
    translateApiValue,
  };
};