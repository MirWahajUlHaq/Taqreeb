import { global } from "../config";

export const getProducts = (sortBy) => {
    return fetch( `${global.API_HOST}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
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

export const getFilteredFarmhouse = (skip, limit, filters = {}) => {
    const data = {
        skip,
        limit,
        filters 
    }
    return fetch(`${global.API_HOST}/farmhouse/by/search`, {
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