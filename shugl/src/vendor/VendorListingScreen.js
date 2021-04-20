import React from 'react';
import Layout from '../core/Layout';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {API} from '../config'
import {Link, Redirect} from 'react-router-dom'
import Category from './Category'
import Farmhouse from '../images/Fh.jpg' 
import BeachHut from '../images/bh.jpg'
import Hotel from '../images/Hotel.jpg'
import Caterer from '../images/cater.jpg'
import Decorator from '../images/Dec.jpg'
import Photographer from '../images/Photo.jpg'
import Transporter from '../images/Transport.jpg'
import OpenSpace from '../images/openspaces.jpg'

const VendorListingScreen = () => {
const Categories = () => (
    <div>
        <h4>LIST YOUR SERVICE</h4>
        <br/>
        <h6>To get started, choose the type of service you want to list on Shugl.com</h6>
        <div className='row offset-md-1'>
            <Category id = 'Farmhouse' image = {Farmhouse} title = "Farmhouse" description='Furnished and self-catering accommodation, where guests can rent the entire place for fun.'/>
            <Category id = 'Beach Hut' image = {BeachHut} title = "Beach Hut" description='A Hut along the sea-side, which people can rent-out and spend their day.'/>
            <Category id = 'Hotel' image = {Hotel} title = "Hotel" description='A hotel room(s) where the guests can rent the room.'/>
        </div>
        <div className='row offset-md-1'>
            <Category id = 'Catering' image = {Caterer} title = "Catering" description='A catering service that can offer multiple food items for the events.'/>
            <Category id = 'Event Decoration' image = {Decorator} title = "Event Decoration" description='Decoration, which gives people the feel they want in their event.'/>
            <Category id = 'Photography' image = {Photographer} title = "Photography" description='Photography, to cater the need of photography and videography in the events.'/>
        </div>
        <div className='row offset-md-1'>
            <Category id = 'Transport' image = {Transporter} title = "Transport" description='A van or bus that can accommodate minimum 6 people.'/>
            <Category id = 'Open Space' image = {OpenSpace} title = "Open Space" description='An open space, where a a memorable event can be hosted.'/>
        </div>
                  
    </div>
)
        
    

return(
    <Layout title='Step 1' description='You are only 3 steps away to becoming a vendor.'>
        {Categories()}
    </Layout>
)

}
export default VendorListingScreen;