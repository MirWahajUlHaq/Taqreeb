import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Vendor from './core/Vendor';
import About from './core/About';
import vendorRegister from './vendor/vendorRegister';
import VendorListingScreen from './vendor/VendorListingScreen';
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/userDashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import VendorRoute from './auth/VendorRoute'
import VendorDashboard from './user/VendorDashboard'
import AddCategory from './Admin/AddCategory'
import { MultiStepForm } from './vendor/MultiStepForm';
import { Farm } from './core/Farm'
import { Photographer } from './core/Photographer'
import { Caterer } from './core/Caterer'
import { Hotel } from './core/Hotel'
import { LawnAndBanuqet } from './core/LawnsAndBanquets'
import { Transport } from './core/Transport'
import { BeachHut } from './core/BeachHut'
import { Decorator } from './core/EventDecorator'
import { CaterersMultiStepForm } from './Caterers StepForm/CaterersMultiStepForm'
import { ProductPage } from './Components/ProductPage'
import { CheckOut } from './core/CheckOut'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/vendor' exact component={Vendor} />
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/vendorRegister' exact component={vendorRegister} />
                <Route path='/vendorListingScreen' exact component={VendorListingScreen} />
                <PrivateRoute path='/user/profile' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/create/category' exact component={AddCategory} />
                <VendorRoute path='/vendor/dashboard' exact component={VendorDashboard} />
                //VendorRoute
                <Route path='/create/farmhouse' exact component={MultiStepForm} />
                <Route path='/create/catering' exact component={CaterersMultiStepForm} />

                <Route path='/view/farmhouse' exact component={Farm} />
                <Route path='/view/photographer' exact component={Photographer} />
                <Route path='/view/eventdecorator' exact component={Decorator} />
                <Route path='/view/hotel' exact component={Hotel} />
                <Route path='/view/beachhut' exact component={BeachHut} />
                <Route path='/view/caterer' exact component={Caterer} />
                <Route path='/view/lawnandbanquet' exact component={LawnAndBanuqet} />
                <Route path='/view/transport' exact component={Transport} />
                <Route path='/view/productPage' exact component={ProductPage} />
                <Route path='/view/checkout' exact component={CheckOut} />

            </Switch>

        </Router>

    )
}

export default Routes;