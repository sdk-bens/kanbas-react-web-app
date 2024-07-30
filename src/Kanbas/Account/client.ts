// import axios from "axios";
// const axiosWithCredentials = axios.create({ withCredentials: true });

// export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// export const USERS_API = `${REMOTE_SERVER}/api/users`;

// // export const signin = async (credentials: any) => {
// //   const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
// //   return response.data;
// // };

// // export const signin = async (credentials: any) => {
// //     try {
// //       const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
// //       console.log(response); // Check the structure of the response
// //       return response?.data;
// //     } catch (error) {
// //       console.error("Signin failed:", error);
// //       throw error;
// //     }
// //   };

// export const signin = async (credentials: any) => {
//   const response = await axios.post( `${USERS_API}/signin`, credentials );
//   return response.data;
// };

  

// export const profile = async () => {
//     const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
//     return response.data;
// };

// // export const signup = async (user: any) => {
// //     const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
// //     return response.data;
// // };

// export const signup = async (user: any) => {
//     const response = await axios.post(`${USERS_API}/signup`, user);
//     return response.data;
//   };
  

// export const signout = async () => {
//     const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
//     return response.data;
// };
  

import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};