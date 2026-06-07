// const API_HOST = process.env.REACT_APP_API_HOST || 'https://legatine-barbera-mitochondrial.ngrok-free.dev';
// export const API_BASE_URL = process.env.REACT_APP_API_URL || `${API_HOST}/api`;

// export const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '1',
//     Accept: 'application/json',
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };
// };

// export const getJsonHeaders = () => ({
//   'Content-Type': 'application/json',
//   'ngrok-skip-browser-warning': '1',
//   Accept: 'application/json',
// });




const API_HOST =process.env.REACT_APP_API_HOST ||"https://legatine-barbera-mitochondrial.ngrok-free.dev";

export const API_BASE_URL = `${API_HOST}/api`;

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Accept: "application/json",

    // مهم مع ngrok
    "ngrok-skip-browser-warning": "true",

    ...(token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}),
  };
};

export const getJsonHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",

  // مهم مع ngrok
  "ngrok-skip-browser-warning": "true",
});





// const API_HOST = process.env.REACT_APP_API_HOST || 'https://legatine-barbera-mitochondrial.ngrok-free.dev';
// export const API_BASE_URL = process.env.REACT_APP_API_URL || `${API_HOST}/api`;

// export const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '1',
//     Accept: 'application/json',
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };
// };

// export const getJsonHeaders = () => ({
//   'Content-Type': 'application/json',
//   'ngrok-skip-browser-warning': '1',
//   Accept: 'application/json',
// });










// const API_HOST = process.env.REACT_APP_API_HOST || 'https://legatine-barbera-mitochondrial.ngrok-free.dev';
// export const API_BASE_URL = process.env.REACT_APP_API_URL || `${API_HOST}/api`;

// export const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '1',
//     Accept: 'application/json',
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };
// };

// export const getJsonHeaders = () => ({
//   'Content-Type': 'application/json',
//   'ngrok-skip-browser-warning': '1',
//   Accept: 'application/json',
// });