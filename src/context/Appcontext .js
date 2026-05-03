// src/context/AppContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [theme,    setThemeState] = useState(() => localStorage.getItem('theme')    || 'light');
//   const [language, setLangState]  = useState(() => localStorage.getItem('language') || 'en');

//   // ✅ Dark mode — يشتغل على الـ app كله عبر html class
//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   // ✅ اللغة — بتغير الـ dir على الـ html
//   useEffect(() => {
//     document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
//     document.documentElement.lang = language;
//     localStorage.setItem('language', language);
//   }, [language]);

//   const toggleTheme = () => setThemeState(t => t === 'light' ? 'dark' : 'light');
//   const setTheme    = (val) => setThemeState(val);
//   const setLanguage = (val) => setLangState(val);

//   return (
//     <AppContext.Provider value={{ theme, setTheme, toggleTheme, language, setLanguage }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useApp = () => useContext(AppContext);

// // ────────────────────────────────────────────────────────────────
// // Translations — أضف هنا أي نص جديد
// // ────────────────────────────────────────────────────────────────
// export const TRANSLATIONS = {
//   en: {
//     // Nav
//     dashboard:     'Dashboard',
//     reports:       'Reports',
//     map:           'Map',
//     analytics:     'Analytics',
//     notifications: 'Notifications',
//     settings:      'Settings',
//     logout:        'Log out',
//     logoutConfirm: 'Are you sure you want to logout?',

//     // Settings page
//     settingsTitle:    'Settings',
//     settingsDesc:     'Manage your account and preferences',
//     account:          'Profile & Account',
//     privacy:          'Privacy & Security',
//     appearance:       'Language & Appearance',
//     save:             'Save Changes',
//     back:             'Back',
//     emailLabel:       'Email Address',
//     passBtn:          'Change Password',
//     langLabel:        'Select Language',
//     displayMode:      'Display Mode',
//     light:            'Light',
//     dark:             'Dark',
//     emailNotif:       'Email Notifications',
//     pushNotif:        'Push Notifications',
//     anonymous:        'Anonymous Mode',
//     anonymousDesc:    'Hide your identity when sending reports.',
//     currentPass:      'Current Password',
//     newPass:          'New Password',
//     confirmPass:      'Confirm New Password',
//     update:           'Update',
//     cancel:           'Cancel',
//     saving:           'Saving…',
//     selectCat:        'Select a category to modify your account data',
//     sysPref:          'SYSTEM PREFERENCES',
//     passNoMatch:      "Passwords don't match!",
//     passShort:        'Password must be at least 6 characters',
//     passSuccess:      'Password updated successfully!',
//     passFail:         'Failed to update password.',
//     settingsSaved:    'Settings saved!',
//   },
//   ar: {
//     // Nav
//     dashboard:     'لوحة التحكم',
//     reports:       'البلاغات',
//     map:           'الخريطة',
//     analytics:     'التحليلات',
//     notifications: 'الإشعارات',
//     settings:      'الإعدادات',
//     logout:        'تسجيل الخروج',
//     logoutConfirm: 'هل أنت متأكد من رغبتك في تسجيل الخروج؟',

//     // Settings page
//     settingsTitle:    'الإعدادات',
//     settingsDesc:     'إدارة حسابك وتفضيلاتك',
//     account:          'الحساب الشخصي',
//     privacy:          'الخصوصية والأمان',
//     appearance:       'اللغة والمظهر',
//     save:             'حفظ التغييرات',
//     back:             'رجوع',
//     emailLabel:       'البريد الإلكتروني',
//     passBtn:          'تغيير كلمة المرور',
//     langLabel:        'اختر اللغة',
//     displayMode:      'وضع العرض',
//     light:            'فاتح',
//     dark:             'داكن',
//     emailNotif:       'إشعارات البريد',
//     pushNotif:        'إشعارات الجهاز',
//     anonymous:        'الوضع المجهول',
//     anonymousDesc:    'إخفاء هويتك عند إرسال البلاغات.',
//     currentPass:      'كلمة المرور الحالية',
//     newPass:          'كلمة المرور الجديدة',
//     confirmPass:      'تأكيد كلمة المرور الجديدة',
//     update:           'تحديث',
//     cancel:           'إلغاء',
//     saving:           'جاري الحفظ…',
//     selectCat:        'اختر قسمًا لتعديل بيانات حسابك',
//     sysPref:          'تفضيلات النظام',
//     passNoMatch:      'كلمات المرور غير متطابقة!',
//     passShort:        'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
//     passSuccess:      'تم تحديث كلمة المرور بنجاح!',
//     passFail:         'فشل تحديث كلمة المرور.',
//     settingsSaved:    'تم حفظ الإعدادات!',
//   },
// };

// // Hook مختصر للترجمة
// export const useT = () => {
//   const { language } = useApp();
//   return TRANSLATIONS[language] || TRANSLATIONS.en;
// };
// src/context/AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme,    setThemeState] = useState(() => localStorage.getItem('theme')    || 'light');
  const [language, setLangState]  = useState(() => localStorage.getItem('language') || 'en');

  // ✅ Dark mode — يشتغل على الـ app كله عبر html class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ✅ اللغة — بتغير الـ dir على الـ html
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
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
// Translations — أضف هنا أي نص جديد
// ────────────────────────────────────────────────────────────────
export const TRANSLATIONS = {
  en: {
    // Nav
    dashboard:     'Dashboard',
    reports:       'Reports',
    map:           'Map',
    analytics:     'Analytics',
    notifications: 'Notifications',
    settings:      'Settings',
    logout:        'Log out',
    logoutConfirm: 'Are you sure you want to logout?',

    // Settings page
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
  },
  ar: {
    // Nav
    dashboard:     'لوحة التحكم',
    reports:       'البلاغات',
    map:           'الخريطة',
    analytics:     'التحليلات',
    notifications: 'الإشعارات',
    settings:      'الإعدادات',
    logout:        'تسجيل الخروج',
    logoutConfirm: 'هل أنت متأكد من رغبتك في تسجيل الخروج؟',

    // Settings page
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
  },
};

// Hook مختصر للترجمة
export const useT = () => {
  const { language } = useApp();
  return TRANSLATIONS[language] || TRANSLATIONS.en;
};