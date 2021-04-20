import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth/index';
import {createProduct} from './ApiAdmin';


const AddFarmhouse = () => {
        const {user, token} = isAuthenticated();
        const [values, setValues] = useState({
            name:'',
            rooms: 0,
            beds:0,
            washrooms:0,
            hours:24,
            Address: '',
            description: '',
            pricePer6Hour:0,
            pricePer8Hour:0,
            pricePer12Hour:0,
            pricePer24Hour:0,
            pictures:[],
            ameneties:[],
            category: '',
            loading:false,
            error:'',
            createdProduct:'',
            redirectToProfile:false,
            formData: ''
        })

        const {
            name,
            rooms,
            beds,
            washrooms,
            hours,
            Address,
            description,
            pricePer6Hour,
            pricePer8Hour,
            pricePer12Hour,
            pricePer24Hour,
            pictures,
            ameneties,
            category,
            loading,
            error,
            createdProduct,
            redirectToProfile,
            formData
        } = values

        const newFarmhouseForm = () => (
            <form className='mb-3'>
                <h4>Add pictures</h4>
                <div className='form-group'>
                    <label className='btn btn-secondary'>
                        <input type='file' name='photo' accept='image/*'/>
                    </label>
                </div>
            </form>
        )

        return (
        <Layout title='List your Farmhouse' description={`Hi, Good Day! ${user.name}, ready to List your Farmhouse?`} className='container-fluid'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    
                </div>
            </div>
        </Layout>
        )
}

export default AddFarmhouse;