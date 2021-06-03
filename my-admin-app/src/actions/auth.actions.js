import { authConstants, userConstants } from "./constants";
import axios from "../helpers/axios";
import {Redirect} from "react-router";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { ADMIN_LOGIN_API, VENDOR_LOGIN_API ,VENDOR_SIGNUP_API} from "../components/commonFunction/Api";



export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(VENDOR_LOGIN_API, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data.data;
      localStorage.setItem('token', token);
      localStorage.setItem('type', 1);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};

export const signup = (user) => {
  
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST});
    const res = await axios.post(VENDOR_SIGNUP_API, {
      ...user
    });

    if (res.status === 200) {
     
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {  
          user
        }
      });
      toastr.success("Vendor Added Successfully");

    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error }
        });
        toastr.warning('Faild, Try again');
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: 'Failed to Login' }
      });
    }
  }
}

export const signout = () => {
  return async dispatch => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    })
  }

}

export const adminlogin = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(ADMIN_LOGIN_API, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data.data;
      localStorage.setItem('token', token);
      localStorage.setItem('type', 2);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};

export const adminsignup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST});
    const res = await axios.post(`/admin/signup`, {
      ...user
    });

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message
        }
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};
