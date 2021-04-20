import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth/index';
import {createProduct} from './ApiVendor';
import './AddFarmhouse.css';
import {MultiStepForm} from './MultiStepForm'
import { getCategories } from '../core/apiCore';






const AddFarmhouse = () => {
        const init = () =>{
            getCategories().then(data=> {
                if(data.error) {
                    setValues({...values, error:data.error})
                }
            })
        }
        return (
           <div className='row'>
                <MultiStepForm />     
            </div>
        
        )
}

export default AddFarmhouse;