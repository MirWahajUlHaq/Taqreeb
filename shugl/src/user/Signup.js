<<<<<<< HEAD
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { global } from "../config";
//import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    success: "false",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    success,
  } = values;

  const [error, setError] = useState("");

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  /*const clickSubmit = (event) =>{
=======
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
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
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
<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    var userData = values;
    if (userData.firstName == "") {
      toast.error("Please fill your first name!");
      return false;
    }
    if (userData.lastName == "") {
        toast.error("Please fill your last name!");
        return false;
      }
      if (userData.email == "") {
        toast.error("Please fill your last email!");
        return false;
      }
      if (userData.phone == "") {
        toast.error("Please fill your last phone number !");
        return false;
      }
      
    axios
      .post(global.API_HOST + "/signup", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        role: "0",
      })

      .then((response) => {
        if(response.data.status == 400){
                toast.error(response.data.message);
                setError(response.data.message);
                <Redirect to="/signin" />;
               // useHistory.push('signin');
        }
        else{
                toast.success("Sign up successfully..!");
        }
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const signUpForm = () => (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-group">
        <label className="text-muted">First Name</label>
        <input
          type="text"
          onChange={handleChange("firstName")}
          className="form-control"
          value={firstName}
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Last Name</label>
        <input
          type="text"
          onChange={handleChange("lastName")}
          className="form-control"
          value={lastName}
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Email/Phone number</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          value={password}
          required
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Phone no.</label>
        <input
          type="text"
          onChange={handleChange("phone")}
          value={phone}
          required
          className="form-control"
        ></input>
      </div>
      <button
        className="btn btn-primary"
        type="submit" /*onClick={clickSubmit}*/
      >
        Sign Up
        {/* <Link to="/signin">Signup</Link> */}
      </button>
    </form>
  );

  const showError = (msg) => {
    <div
      className="alert alert-danger"
      //style={{ display: msg.length > 0 ? "" : "none" }}
    >
      {msg}
    </div>;
  };

  const showSuccess = () => {
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New Account is created. Please <Link to="/signin">Signin</Link>
    </div>;
  };

  return (
    <Layout
      title="Sign Up page"
      description="Sign Up to Shugl"
      className="container col-md-4 offset-md-4"
    >
      {showSuccess}
      {showError}
      {signUpForm()}
      {/* {JSON.stringify(values)} */}
      <ToastContainer />
    </Layout>
  );
};

export default Signup;
=======
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
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
