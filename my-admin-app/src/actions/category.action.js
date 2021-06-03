import { getCommonHeaders_res } from "../components/commonFunction/CommonMethod";
import { CATEGORY_ADD_API, GETCATEGORY_API } from "../components/commonFunction/Api";
import axios from "../helpers/axios";
import { categoryConstants } from "./constants";


export const getAllCategory = () => {
    return async dispatch =>{
    
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST});
    const res = await axios.post(GETCATEGORY_API);
    // console.log(res.data.data,"eeeeeeee");
    if(res.status === 200){
         const categoryList  = res.data.data;
        
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: {categories: !!categoryList ? categoryList : []}
        });

        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}

export const addCategory = (form) =>{
    return async dispatch =>{
        dispatch({ 
            type: categoryConstants.ADD_NEW_CATEGORY_REQUEST
        });
        

        const headers = getCommonHeaders_res();
                const config = {
                headers,
                };
          const categoryName = form.name;       
        // const res = await axios.post(`category/create`, form);

        const res =  await axios.post(CATEGORY_ADD_API,{categoryName},{headers: config.headers});
        if(res.status === 200){
            // console.log(res);
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload: {category:res.data.category}
            });
        }else{
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            });
        }
    }
}