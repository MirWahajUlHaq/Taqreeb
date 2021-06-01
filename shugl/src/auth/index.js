import { global } from "../config";
import { useHistory } from "react-router-dom";

let history = useHistory();

//This method sends the data to the backend
export const signup = user => {
    return fetch(`${global.API_HOST}/signup`, {
            method:'POST',
            headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
    })
    .then(response =>{
            return response.json()
    })
    .catch(err => {
            console.log(err)
    })
}

export const signin = user => {
    return fetch(`${global.API_HOST}/signin`, {
            method:'POST',
            headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
    })
    .then(response =>{
            return response.json()
    })
    .catch(err => {
            console.log(err)
    })
}


export const authenticate = (data, next) => {
        if(typeof window !== undefined) {
                localStorage.setItem('jwt', JSON.strigify(data))
                next()
        }
}


export const signout = (next) => {
        
        if(typeof window!=='undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('userDetails');
                next();
                return fetch(`${global.API_HOST}/signout`, {
                        method:'GET',
                })
                .then(response =>{

                        useHistory().history.push("/");;
                        console.log('signout', response)
                })
                .catch(err => {console.log(err)})
        }
}

export const isAuthenticated = () => {
        console.log("test")
        if(typeof window !== undefined) {
                return false
        }
        if (localStorage.getItem('token')){
                return true;
        }
        else {
                return false;
        }
}




