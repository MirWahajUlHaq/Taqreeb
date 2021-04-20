import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import {signup} from '../auth/index'


const Signup = () => {
        const [values, setValues] = useState({
                name:'',
                email:'',
                password:'',
                error:'',
                success:'false'
        })
        const {name, email, password, error, success} = values;

        const handleChange = name => event => {
                setValues({...values, error:false, [name]:event.target.value})
        }
        
                
        /*const clickSubmit = (event) =>{
                event.preventDefault();
                setValues({...values, error:false})
                signup({name, email, password})
                .then(data=>{
                        if(data.error){
                                setValues({...values, error:data.error, success:false})
                        }
                        else{
                                setValues({...values,
                                                name:'',
                                                email:'',
                                                password:'',
                                                error:'',
                                                success:true})
                        }
                })
        }*/
        const signUpForm = () =>(
                <form>
                        <div className='form-group'>
                                <label className='text-muted'>Name</label>
                                <input type='text' onChange={handleChange('name')} className='form-control' value={name}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Email/Phone number</label>
                                <input type='email' onChange={handleChange('email')} className='form-control' value={email}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Password</label>
                                <input type='password'onChange={handleChange('password')} value={password} className='form-control'></input>
                        </div>
                        <button className='btn btn-primary' /*onClick={clickSubmit}*/><Link to='/signin'>Signup</Link></button>
                </form>
        )
        
        const showError = ()=> {
                <div className='alert alert-danger' style={{display:error? '': 'none'}}>
                        {error}
                </div>
        }

        const showSuccess = ()=> {
                <div className='alert alert-info' style={{display:success? '': 'none'}}>
                        New Account is created. Please <Link to='/signin'>Signin</Link>
                </div>
        }

        return (
        <Layout title='Sign Up page' 
                description='Sign Up to Shugl'
                className='container col-md-4 offset-md-4'
        >
                {showSuccess}
                {showError}
                {signUpForm()}
                {JSON.stringify(values)}
        </Layout>
        )
        
}

export default Signup;