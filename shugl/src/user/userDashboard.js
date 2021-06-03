import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth/index";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const [userData, setUserData] = useState("");
  //  var userData = false;

  useEffect(() => {
    if (
      localStorage.getItem("userDetails") &&
      localStorage.getItem("userDetails") != null
    ) {
      setUserData(JSON.parse(localStorage.getItem("userDetails")));
    } else {
      redirect();
    }
  }, []);

  const redirect = () => {
    history.push("/");
  };

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Profile picture</h4>
        <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    
                  </div>
                </div>
        
        {/* <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Bookings
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">
              Update Profile
            </Link>
          </li>
        </ul> */}
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">My Information</h3>
        <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">{userData.name}</div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">{userData.email}</div>
        </div>
        {/* <ul className="list-group">
          <li className="list-group-item">Name: {userData.name}</li>
          <li className="list-group-item">Email: {userData.email}</li>
        </ul> */}
        </div>
      </div>
    );
  };
  const bookedHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Booked Services history</h3>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Profile"
      description={`Hi, Good Day! ${userData.name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {userInfo()}
          {/* {bookedHistory()} */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
