import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} component = {(props) => {
        const token = window.localStorage.getItem('token');
        const role = window.localStorage.getItem('role');
        if(token){
                return <Component {...props}/>
        }else{
            return <Redirect to={'/vendor/signin'}/>
        }
    }}/>
}

export const PrivateRoute2 = ({component: Component, ...rest}) => {
    return <Route {...rest} component = {(props) => {
        const token = window.localStorage.getItem('token');
        const role = window.localStorage.getItem('role');
        if(token){
            return <Component {...props}/>
        }else{
           { return <Redirect to={'/admin/signin'}/>}
        }
    }}/>
}
