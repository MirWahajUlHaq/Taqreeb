<<<<<<< HEAD
import { global } from "../config";

export const getProducts = (sortBy) => {
    return fetch( `${global.API_HOST}/products?sortBy=${sortBy}&order=desc&limit=6`, {
=======
import { API } from "../config";

export const getProducts = (sortBy) => {
    return fetch( `${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
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

export const getFilteredFarmhouse = (skip, limit, filters = {}) => {
    const data = {
        skip,
        limit,
        filters 
    }
<<<<<<< HEAD
    return fetch(`${global.API_HOST}/farmhouse/by/search`, {
=======
    return fetch(`${API}/farmhouse/by/search`, {
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
            method:'POST',
            headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
    })
    .then(response =>{
            return response.json()
    })
    .catch(err => {
            console.log(err)
    })
}