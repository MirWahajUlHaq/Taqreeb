import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import "./Menu.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { global } from "../config";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = (props) => {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [userData, setUserData] = useState(false);
  //  var userData = false;
 
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != null
    ) {
      setUser(JSON.parse(localStorage.getItem("userDetails")));
      setUserData(true);
    } else {
      setUserData(false);
    }
  }, []);

  const handleOnchange = async (e) => {
    let search = e.target.value;
    setSearch(e.target.value);

    const bodyParameter = {
      productName: search,
    };
    const res = await axios.post(
      global.API_HOST + `user/searchProducts`,
      bodyParameter
    );
    if(!!res.data.data){
      setSearchResult(res.data.data);
    }else{
      setSearchResult("");
    }
    
  };


  return (
    <div>
      <ul className="nav nav-tabs " style={{ backgroundColor: "#D6324A" }}>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(props.history, "/vendor")}
            to="/vendor"
          >
            Register as Vendor
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(props.history, "/")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(props.history, "/about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <div class="search-box">
            <input
              type="text"
              class="search-input"
              placeholder="Search.."
              onChange={handleOnchange}
            />

            {/* <button class="search-button">
              
              search
            </button> */}
          </div>
          {searchResult && searchResult.length > 0 ? (

            <ul className="searchResult">
              {searchResult.map((searchRes, index) => (
                <li>
                  <Link to={`/view/productPage/${searchRes._id}`} >
                    {searchRes.productName}
                  </Link>
                </li>
              ))}
            </ul>
          ) : ""}
        </li>
        {/* {isAuthenticated() && isAuthenticated().role ===0 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/user/profile')} to='/user/profile'>Profile</Link>
                </li>
                )} 

                {isAuthenticated() && isAuthenticated().role ===1 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/admin/dashboard')} to='/admin/dashboard'>Admin Dashboard</Link>
                </li>
                )}

                {isAuthenticated() && isAuthenticated().role ===2 && (
                    <li className='nav-item'>
                    <Link className='nav-link' style={isActive(props.history, '/vendor/dashboard')} to='/vendor/dashboard'>Vendor Dashboard</Link>
                </li>
                )}     */}

        {!userData && (
          <Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(props.history, "/signin")}
                to="/signin"
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(props.history, "/signup")}
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </Fragment>
        )}

        {userData && (
          <div className="userNav">
            <li className="nav-item ">
              <span
                class="nav-link dropdown-toggle"
                style={{ cursor: "pointer", color: "#ffffff" }}
              >
                {user.name}
              </span>

              <ul className="dropdown ">
                <li>
                  <Link
                    className="nav-link"
                    style={isActive(props.history, "/user/profile")}
                    to="/user/profile"
                  >
                    Profile{" "}
                  </Link>
                </li>
                <li>
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    onClick={() => {
                      signout();
                    }}
                  >
                    Signout
                  </span>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

<ToastContainer />;

export default withRouter(Menu);
