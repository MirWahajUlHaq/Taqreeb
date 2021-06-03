import { ADD_PRODUCT_API, GET_PRODUCT_API,GET_REVIEW_API, DELETE_PRODUCT_API,DELETE_REVIEW_API,ADMIN_PRODUCT_API, VENDOR_ORDER_GET_API, ADMIN_ORDER_GET_API } from "../components/commonFunction/Api";
import { getCommonHeaders_res } from "../components/commonFunction/CommonMethod";
import axios from "../helpers/axios";
import { productConstants, orderConstants} from "./constants";


// new action
export const getReviews = () => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {

      const res = await axios.post(GET_REVIEW_API,{},{headers: config.headers});
      
      console.log(res,"rrrrrrrrrrrrrr");
      if (res.status === 200) {
        const reviews = res.data.data;
        dispatch({
          type: productConstants.GET_ALL_REVIEWS_SUCCESS,
          payload: { reviews },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};




export const getProducts = () => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

      const res = await axios.post(GET_PRODUCT_API,{},{headers: config.headers});
      
      console.log(res,"rrrrrrrrrrrrrr");
      if (res.status === 200) {
        const products = res.data.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const getOrders = () => {

  console.log('jas')
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {
      dispatch({ type: orderConstants.GET_ALL_ORDER_REQUEST });

      const res = await axios.post(VENDOR_ORDER_GET_API,{},{headers: config.headers});
   
      console.log(res,"tttttttttt");
      if (res.status === 200) {
        const orders = res.data.data;
        dispatch({
          type: orderConstants.GET_ALL_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        dispatch({ type: orderConstants.GET_ALL_ORDER_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAdminOrders = () => {

  console.log('admin')
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {
      dispatch({ type: orderConstants.GET_ALL_ORDER_REQUEST });

      const res = await axios.post(ADMIN_ORDER_GET_API,{},{headers: config.headers});
   
    
      if (res.status === 200) {
        const orders = res.data.data;
        dispatch({
          type: orderConstants.GET_ALL_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        dispatch({ type: orderConstants.GET_ALL_ORDER_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const getAdminProducts = () => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

      const res = await axios.post(ADMIN_PRODUCT_API,{},{headers: config.headers});
      
      if (res.status === 200) {
        const products = res.data.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// modified actrion
export const addProduct = (productData) => {
  return async (dispatch) => {

    const headers = getCommonHeaders_res();
    const config = {
      headers,
    };

    try {
      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
      const res = await axios.post(ADD_PRODUCT_API,productData,{headers: config.headers});
      if (res.status === 200) {
        dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
        console.log("yesssssss");
        dispatch(getProducts());
      } else {
        dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductById = (payload) => {
    return async (dispatch) => {

      const headers = getCommonHeaders_res();
      const config = {
        headers,
      };

      
      try {
        const res = await axios.post(DELETE_PRODUCT_API,payload,{headers: config.headers});
        // const res = await axios.delete(DELETE_PRODUCT_API, {
        //   data: { payload },
        // });
        dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
        if (res.status === 200) {
          dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
          dispatch(getProducts());
        } else {
          const { error } = res.data;
          dispatch({
            type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
            payload: {
              error,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  

  export const deleteReviewById = (payload) => {
    return async (dispatch) => {

      const headers = getCommonHeaders_res();
      const config = {
        headers,
      };

      
      try {
        const res = await axios.post(DELETE_REVIEW_API,payload,{headers: config.headers});
        // const res = await axios.delete(DELETE_PRODUCT_API, {
        //   data: { payload },
        // });
        if (res.status === 200) {
          dispatch(getReviews());
        } else {
          const { error } = res.data;
          
        }
      } catch (error) {
        console.log(error);
      }
    };
  };