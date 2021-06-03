import { authConstants, userConstants } from "./constants";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "../helpers/axios";
import { USER_ADD_API, USER_LIST_API } from "../components/commonFunction/Api";
import { getCommonHeaders_res } from "../components/commonFunction/CommonMethod";


export const signup = (user) => {
    console.log(user);
    return async (dispatch) => {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST});
      const res = await axios.post(`/admin/signup`, {
        ...user
      });
  
      if(res.status === 201){
        const {message} = res.data.me;
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: {
            message
          }
        });
      }else{
        if(res.status === 400){
          dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: { error: res.data.error}
          });
        }
      }
    };
  };

  export const getAllVendors = () => {
    return async dispatch =>{
    
    dispatch({ type: userConstants.GET_ALL_VENDORS_REQUEST});
    const res = await axios.get(`/vendorlist`);
    console.log(res);
    if(res.status === 200){
        const vendorList  = res.data;
        console.log(vendorList);
        dispatch({
            type: userConstants.GET_ALL_VENDORS_SUCCESS,
            payload: {users: vendorList}
        });
        }else{
            dispatch({
                type: userConstants.GET_ALL_VENDORS_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}

export const userCreateAdmin = (newObj) => {
  
  const headers = getCommonHeaders_res();
  const config = {
    headers,
  };
  
   
  return async (dispatch) => {
    try {
      // dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post(USER_ADD_API,newObj,{headers: config.headers});
      if (res.status === 200) {
        // dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
        toastr.success("User Added Successfully");
        dispatch(getUsers());
      } else {
        // dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};



export const getUsers = () => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };
    

    try {
      dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });

      const res = await axios.post(USER_LIST_API,{},{headers: config.headers});

      if (res.status === 200) {
        const users = res.data.data;
        dispatch({
          type: userConstants.GET_ALL_USERS_SUCCESS,
          payload: { users }
        });
      } else {
        dispatch({ type: userConstants.GET_ALL_USERS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  
  };

};
