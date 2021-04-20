import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from '../core/Layout';
import {signin, authenticate, isAuthenticated} from '../auth/index'

const Signin = () => {
        const [values, setValues] = useState({
                name:'',
                email:'',
                password:'',
                error:'',
                loading:'false',
                redirectToReferrer: false
        })
        const {email, password, error, loading, redirectToReferrer} = values;
        const {user} = isAuthenticated();

        const handleChange = name => event => {
                setValues({...values, error:false, [name]:event.target.value})
        }
        
                
        /*const clickSubmit = (event) =>{
                event.preventDefault();
                setValues({...values, error:false, loading:true})
                signin({email, password})
                .then(data=>{
                        if(data.error){
                                setValues({...values, error:data.error, loading:false})
                        }
                        else{
                                authenticate(data, () =>{
                                        setValues({
                                                ...values,
                                                redirectToReferrer:true
                                        })
                                })
                        }
                })
        }*/
        const signInForm = () =>(
                <form>
                        <div className='form-group'>
                                <label className='text-muted'>Email/Phone number</label>
                                <input type='email' onChange={handleChange('email')} className='form-control' value={email}></input>
                        </div>
                        <div className='form-group'>
                                <label className='text-muted'>Password</label>
                                <input type='password'onChange={handleChange('password')} value={password} className='form-control'></input>
                        </div>
                        <button className='btn btn-primary btn-outline' /*onClick={clickSubmit}*/><Link to='/'>Signin</Link></button>
                </form>
        )
        
        const showError = ()=> {
                <div className='alert alert-danger' style={{display:error? '': 'none'}}>
                        {error}
                </div>
        }

        const showLoading = ()=> loading && 
        (
        <div className='alert alert-info'>
                <h2>Loading...</h2>
        </div>)
        

        const redirectUser =() => {
                if(redirectToReferrer) {
                        if(user && user.role === 1) {
                                return <Redirect to='/admin/dashboard' />

                        }
                        else if(user && user.role === 0){
                                return <Redirect to='/user/dashboard' />
                        }
                        else {
                                return <Redirect to='/vendor/dashboard' />
                        }
                }
                if(isAuthenticated()){
                        <Redirect to='/'/>
                }
        }

        return (
        <Layout title='Signin Page' 
                description='Signin to Shugl'
                className='container col-md-4 offset-md-4'
        >
                {showLoading()}
                {showError()}
                {signInForm()}
                {redirectUser()}
                {JSON.stringify(values)}
        </Layout>
        )
        
}

export default Signin;