import "./App.css";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import AdminLayout from "./components/AdminLayout/index";
import VendorLayout from "./components/VendorLayout/index";
import VendorSignin from "./containers/VendorSignin/index";
import VendorHome from "./containers/VendorHome/index";
import VendorSignup from "./containers/VendorSignup/index";
import VendorProducts from "./containers/VendorProducts/index";
import VendorOrders from "./containers/VendorOrders/index";
import VendorReviews from "./containers/VendorReviews/index";
import AdminHome from "./containers/AdminHome/index";
import AdminSignin from "./containers/AdminSignin/index";
import AdminSignup from "./containers/AdminSignup/index";
import AdminUsers from "./containers/AdminUsers/index";
import Categories from "./containers/Categories/index";
import VendorList from "./containers/VendorList/index";
import AdminProducts from "./containers/AdminProducts/index";
import AdminOrders from "./containers/AdminOrders/index";
import {PrivateRoute, PrivateRoute2} from "./components/HOC/PrivateRoute";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {isUserLoggedIn} from './actions';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector

 
  useEffect(() =>{
    if(!auth.authenticate){
    dispatch(isUserLoggedIn(state => state.auth));
    }
    
  }, []);

  const token = window.localStorage.getItem('token');
  const role = window.localStorage.getItem('type');
  
  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={VendorHome} />
          <Route path="/vendor/signin" exact component={VendorSignin} />
          <Route path="/vendor/signup" exact component={VendorSignup} />
          <PrivateRoute path="/vendor/products" exact component={VendorProducts} />
          <PrivateRoute path="/vendor/reviews" exact component={VendorReviews} />
          <PrivateRoute path="/vendor/orders" exact component={VendorOrders} />
          <PrivateRoute2 path="/admin" exact component={AdminHome} />
          <PrivateRoute2 path="/admin/signup" exact component={AdminSignup} />
          <Route path="/admin/signin" exact component={AdminSignin} />
          <PrivateRoute2 path="/admin/categories" exact component={Categories}/>
          <PrivateRoute2 path="/admin/vendorlist" exact component={VendorList}/>
          <PrivateRoute2 path="/admin/productlist" exact component={AdminProducts}/>
          <PrivateRoute2 path="/admin/users" exact component={AdminUsers}/>
          <PrivateRoute2 path="/admin/orders" exact component={AdminOrders} />
        </Switch>
    </div>
  );
}

export default App;
