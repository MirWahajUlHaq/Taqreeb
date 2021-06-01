<<<<<<< HEAD
import { global } from "../config";
//This method sends the data to the backend
export const createCategory = (userId, token, category) => {
    return fetch(`${global.API_HOST}/category/create/${userId}`, {
=======
import { API } from "../config";
//This method sends the data to the backend
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
            method:'POST',
            headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(category)
    })
    .then(response =>{
            return response.json()
    })
    .catch(err => {
            console.log(err)
    })
}

export const createProduct = (userId, token, product) => {
<<<<<<< HEAD
    return fetch(`${global.API_HOST}/category/create/${userId}`, {
=======
    return fetch(`${API}/category/create/${userId}`, {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
            method:'POST',
            headers: {
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
            },
            body:product
    })
    .then(response =>{
            return response.json()
    })
    .catch(err => {
            console.log(err)
    })
}

export const getCategories = () => {
<<<<<<< HEAD
        return fetch(`${global.API_HOST}/categories`, {
=======
        return fetch(`${API}/categories`, {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
                method:'GET'
        })
        .then(response => {
                return response.json();
        })
        .catch(err => console.log(err))
}