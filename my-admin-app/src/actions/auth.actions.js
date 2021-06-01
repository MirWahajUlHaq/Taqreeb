import { authConstants, userConstants } from "./constants";
import axios from "../helpers/axios";
import {Redirect} from "react-router";

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/vendor/signin`, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
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
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST});
    const res = await axios.post(`/vendor/signup`, {
      ...user
    });

    if (res.status === 201) {
      const { message } = res.data.me;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {  
          user
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
    const res = await axios.post(`/admin/signin`, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
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
