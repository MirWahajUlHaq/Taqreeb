import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} component = {(props) => {
        const token = window.localStorage.getItem('token');
        const role = window.localStorage.getItem('type');
        if(token && role == 1){
                return <Component {...props}/>
        }else{
            localStorage.clear();
            return <Redirect to={'/vendor/signin'}/>
        }
    }}/>
}

export const PrivateRoute2 = ({component: Component, ...rest}) => {
    return <Route {...rest} component = {(props) => {
        const token = window.localStorage.getItem('token');
        const role = window.localStorage.getItem('type');
        if(token && role == 2){
            return <Component {...props}/>
        }else{
            localStorage.clear();
            return <Redirect to={'/admin/signin'}/>
        }
    }}/>
}
