import "./App.css";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import AdminLayout from "./components/AdminLayout/index";
import VendorLayout from "./components/VendorLayout/index";
import VendorSignin from "./containers/VendorSignin/index";
import VendorHome from "./containers/VendorHome/index";
import VendorSignup from "./containers/VendorSignup/index";
import VendorProducts from "./containers/VendorProducts/index";
import AdminHome from "./containers/AdminHome/index";
import AdminSignin from "./containers/AdminSignin/index";
import AdminSignup from "./containers/AdminSignup/index";
import AdminUsers from "./containers/AdminUsers/index";
import Categories from "./containers/Categories/index";
import VendorList from "./containers/VendorList/index";
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

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={VendorHome} />
          <Route path="/vendor/signin" exact component={VendorSignin} />
          <Route path="/vendor/signup" exact component={VendorSignup} />
          <Route path="/vendor/products" exact component={VendorProducts} />
          <PrivateRoute2 path="/admin" exact component={AdminHome} />
          <Route path="/admin/signup" exact component={AdminSignup} />
          <Route path="/admin/signin" exact component={AdminSignin} />
          <Route path="/admin/categories" exact component={Categories}/>
          <Route path="/admin/vendorlist" exact component={VendorList}/>
          <Route path="/admin/users" exact component={AdminUsers}/>
        </Switch>
    </div>
  );
}

export default App;
