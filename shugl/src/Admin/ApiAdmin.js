import { global } from "../config";
//This method sends the data to the backend
export const createCategory = (userId, token, category) => {
    return fetch(`${global.API_HOST}/category/create/${userId}`, {
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
    return fetch(`${global.API_HOST}/category/create/${userId}`, {
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
        return fetch(`${global.API_HOST}/categories`, {
                method:'GET'
        })
        .then(response => {
                return response.json();
        })
        .catch(err => console.log(err))
}