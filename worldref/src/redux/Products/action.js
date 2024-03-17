import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType";
import axios from "axios";

//const URL=process.env.API_URL
// http://localhost:8080
// https://worldref.onrender.com/

export const getProduct = (params) => (dispatch) => { 
    dispatch({ type: PRODUCT_REQUEST });
axios
.get(`https://worldref.onrender.com/api/products/`,params)
.then((res) => {
dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
console.log(res.data)
return res.data;
 })
.catch((err) => {
dispatch({ type: PRODUCT_FAILURE }); 
console.error('Error fetching products:', err);
});
};