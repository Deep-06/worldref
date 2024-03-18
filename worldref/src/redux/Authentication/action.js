// import axios from "axios";
//import { LOGIN_POST_FAILURE, LOGIN_POST_REQUEST, LOGIN_POST_SUCCESS, REGISTER_POST_SUCCESS } from "../actionType"

//const URL = process.env.API_URL
// https://worldref.onrender.com/
// http://localhost:8080

export const login = () => ({
    type: 'LOGIN',
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
// export const postUserRegistration = (userdata) => async (dispatch) => {
//     try {
//         dispatch({ type: LOGIN_POST_REQUEST })
//         let res = await axios.post(`https://worldref.onrender.com/user/register`, userdata);
//         dispatch({ type: REGISTER_POST_SUCCESS, payload: { msg: res.status } });
//         return res.status
//     } catch (error) {
//         dispatch({ type: LOGIN_POST_FAILURE })
//         console.log(error)
//     }
// }

// export const postUserLogin = (userdata) => async (dispatch) => {
//     try {
//         dispatch({ type: LOGIN_POST_REQUEST })
//         let res = await axios.post(`https://worldref.onrender.com/user/login`, userdata);
//         if(res.status===201){
//             localStorage.setItem('token', JSON.stringify(res.data.token));
//         }
//         dispatch({ type: LOGIN_POST_SUCCESS, payload: { token: res.data.token, msg: res.data.msg } });
//         return res.status
//     } catch (error) {
//         dispatch({ type: LOGIN_POST_FAILURE })
//         console.log(error)
//     }
// }

// export const postUserLogout = (token) => async (dispatch) => {
//     try {
//         dispatch({ type: LOGIN_POST_REQUEST })
//         let res = await axios.post(`${URL}/user/logout`, null, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         localStorage.setItem('token', JSON.stringify(null));
//         dispatch({ type: LOGIN_POST_SUCCESS, payload: { token: null, msg: res.data.message } });
//     } catch (error) {
//         dispatch({ type: LOGIN_POST_FAILURE })
//         console.log(error)
//     }
// }
