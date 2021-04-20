import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    const res = await axios.post("/signin/:userId", {
      ...user
    });
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user
      }
    });
  };
};
