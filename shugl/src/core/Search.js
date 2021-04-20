import {React, useEffect, useState} from 'react'
import Layout from './Layout';
import {signout} from '../auth/index';
import CategoriesButtons from '../Components/CategoriesButtons'
import ProductReviewCard from '../Components/ProductReviewCard'
import shamsiFarmHouse from '../images/Farmhouse/shamsiFarmHouse.jpg'
import duaFarmHouse from "../images/Farmhouse/duaFarmHouse.jpg"
import JBFarmHouse from "../images/Farmhouse/jbFarmHouse.jpg"
import palmVillageFarmHouse from "../images/Farmhouse/palmVillage FarmHouse.jpg"
import alHadiFarmHouse from '../images/Farmhouse/alHadiFarmHouse.jpg'
import Caterer1 from '../images/Caterers/caterer1.jpg'
import Caterer2 from '../images/Caterers/caterer2.png'
import Caterer3 from '../images/Caterers/caterer3.jpg'
import {HostCard }from '../Components/HostCard'
import hostImage from '../images/hostImage.jpg'
import {getCategories} from './apiCore'
import HotelIcon from '@material-ui/icons/Hotel';
import { FaShuttleVan, FaCamera } from 'react-icons/fa';
import {GiHut, GiBalloons} from 'react-icons/gi'
import FastfoodIcon from '@material-ui/icons/Fastfood';

export  const Search = () =>{
    const [data, setData] = useState({
        categories:[],
        category:'',
        search:'',
        results:[],
        searched:false
    })
    return (
        <div>
            <h2>Search Bar</h2>
        </div>
    )
}