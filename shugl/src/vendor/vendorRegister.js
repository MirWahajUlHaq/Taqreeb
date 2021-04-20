import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {signup} from '../auth/index'

const Register = () => {
        const [values, setValues] = useState({
                name:'',
                mobile:'',
                email:'',
                password:'',
                confirmPassword:'',
                error:'',
                success:'false'
        })
        const {name, father, mobile, email, password, confirmPassword, error, success} = values;

        const handleChange = name => event => {
                setValues({...values, error:false, [name]:event.target.value})
        }
        
                
        /*const clickSubmit = (event) =>{
                event.preventDefault();
                setValues({...values, error:false})
                signup({name, mobile, father, email, password, confirmPassword})
                .then(data=>{
                        if(data.error){
                                setValues({...values, error:data.error, success:false})
                        }
                        else{
                                setValues({...values,
                                                name:'',
                                                mobile:'',
                                                email:'',
                                                password:'',
                                                confirmPassword:'',
                                                error:'',
                                                success:true})
                        }
                })
        }*/
        const registrationForm = () =>(
                <form>
                        <div className='form-group'>
                                <label className='text-muted'>Name</label>
                                <input type='text' onChange={handleChange('name')} className='form-control' value={name}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Phone number*</label>
                                <input type='email' onChange={handleChange('email')} className='form-control' value={email}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Email</label>
                                <input type='email' onChange={handleChange('email')} className='form-control' value={email}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Password</label>
                                <input type='password'onChange={handleChange('password')} value={password} className='form-control'></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Confirm Password</label>
                                <input type='password'onChange={handleChange('password')} value={password} className='form-control'></input>
                        </div>
                        <button className='btn btn-primary' /*onClick={clickSubmit}*/><Link to='/vendorListingScreen'>Register</Link></button>
                </form>
        )
        
        const showError = ()=> {
                <div className='alert alert-danger' style={{display:error? '': 'none'}}>
                        {error}
                </div>
        }

        const showSuccess = ()=> {
                <div className='alert alert-info' style={{display:success? '': 'none'}}>
                        Your Account is created. Please <Link to='/signin'>Signin</Link>
                </div>
        }

        return (
        <Layout title='Sign Up page' 
                description='Register yourself as a Vendor to Shugl'
                className='container col-md-4 offset-md-4'
        >
                {showSuccess}
                {showError}
                {registrationForm()}
                {JSON.stringify(values)}
        </Layout>
        )
        
}

export default Register;