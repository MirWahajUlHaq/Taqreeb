import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import Card from '@material-ui/core/Card';
import {getCategories, getFilteredFarmhouse} from './apiCore';
import {prices} from './FixedPrices';
import {RadioBox} from './RadioBox'
import ProductReviewCard from '../Components/ProductReviewCard'
import shamsiFarmHouse from '../images/Farmhouse/shamsiFarmHouse.jpg'
import duaFarmHouse from "../images/Farmhouse/duaFarmHouse.jpg"
import JBFarmHouse from "../images/Farmhouse/jbFarmHouse.jpg"
import arabianFarmHouse from '../images/Farmhouse/arabianFarmHouse.jpg'
import deluxeFarmHouse from '../images/Farmhouse/deluxeFarmHouse.jpg'
import raniFarmHouse from '../images/Farmhouse/raniFarmHouse.jpeg'
import royalFarmHouse from '../images/Farmhouse/royalFarmHouse.jpg'
import durraniFarmHouse from '../images/Farmhouse/durraniFarmHouse.jpg'
import palmVillageFarmHouse from "../images/Farmhouse/palmVillage FarmHouse.jpg"
import alHadiFarmHouse from '../images/Farmhouse/alHadiFarmHouse.jpg'
import Caterer1 from '../images/Caterers/caterer1.jpg'
import Caterer2 from '../images/Caterers/caterer2.png'
import Caterer3 from '../images/Caterers/caterer3.jpg'
import {HostCard }from '../Components/HostCard'
import hostImage from '../images/hostImage.jpg'
import CategoriesButtons from '../Components/CategoriesButtons'
import { FaShuttleVan, FaCamera } from 'react-icons/fa';
import {GiHut, GiBalloons} from 'react-icons/gi'
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { global } from "../config";


export const Farm = () => {

    const [category, setCategory] = useState([]);
    const [farm, setFarm] = useState([]);

    useEffect(() => {
        getCategories();
        getPopularFramhouse();
    },[]);

      const getCategories = () => {
        fetch(`${global.API_HOST}user/getCategory`, {
          method: "POST",
        })
          .then((res) => res.json())
          .then((response) => {
            if(response.status == true){
              setCategory(response.data);
            }
          })
          .catch((err) => console.log(err));
      };


    const categories = () => (
        <div className='container' style={{marginBottom:'2rem'}}>
            <h3>Categories</h3>
            {category && category.length > 0 && (
            <div className='row'>
            {category.map((cat, index) => (
                  <CategoriesButtons
                    id={cat.categoryName}
                    startIcon={<GiHut />}
                    name={cat.categoryName}
                    key={index}
                  />
    
                  ))}
               
            </div>
              )}
        </div>
    )
    const getPopularFramhouse = () => {
        fetch(`${global.API_HOST}user/getCategory/farm`, {
          method: "POST",
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.status == true) {
              setFarm(response.data);
            }
          })
          .catch((err) => console.log(err));
      };

    /*const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const[filteredResults, setFilteredResults] = useState(0)
    const [myFilters, setMyFilters] = useState({
        filters:{price:[]}
    })

    
    const init = () =>{
        getCategories().then(data=> {
            if(data.error) {
                setError(data.error)
            }
            else {
                setCategories(data)
            }
        })

    };
    
    const loadFilteredResults = (newFilters) => {
        console.log(newFilters)
        getFilteredFarmhouse(skip, limit, newFilters).then(data =>{
            if(data.error) {
                setError(data.error)
            }
            else {
                setFilteredResults(data.data)
                setSize(data.size)
                setSkip(0)
            }
        })
    }

    const viewMore = () => {
        let toSkip = skip + limit
        console.log(newFilters)
        getFilteredFarmhouse(toSkip, limit, myFilter.filters).then(data =>{
            if(data.error) {
                setError(data.error)
            }
            else {
                setFilteredResults([...filteredResults, ...data.data])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const viewMoreButton = () =>{
        return(
            size >0 && size >=limit && (
                <button onClick={viewMore} className='btn btn-warning mb-5'>Load More</button>
            )
        )
    }


    useEffect(()=>{
        init();
        loadFilteredResults(skip, limit, myFilters.filters)
    }, [])

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters

        if(filterBy == 'price') {
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters);
    }

    const handlePrice = value => {
        const data = prices;
        let array = []

        for (let key in data) {
            if(data[key]._id === parseInt(value)) {
                array=data[key].array

            }

        }
        return array;
    }*/
    //TO BE USED UNDER THE HEADING All
    /*{filteredResults.map((farm, index)=>{
                    <ProductReviewCard key={index} farm={farm} />
                    
                        
                })}*/ 

    //TO BE USED UNDER THE HEADING FILTER BY PRICE RANGE
    /*<RadioBox 
                    prices={prices}
                    handleFilters={filters =>
                    handleFilters(filters, 'price')}
                     />*/ 
    
    /*
    TO BE USED AT THE END THIS IS A LOAD MORE BUTTON
    {viewMoreButton}*/
    
    return (
        <div>
            <Layout 
            title="Farmhouses"
            description="Search and find Farmhouse of your own choice"
            className='container-fluid'
            />
            <div className='row'>
                <div className='col col-md-3'>
                    <h3>Filter By price range</h3>
                    
                    <ul>

                    </ul>
                </div>
                <div className='col col-md-8'>
                {categories()}
                    <h3>All</h3>
                    {farm && farm.length > 0 && (
        <div className="row">
          {farm.map((farmPro, index) => (
            <ProductReviewCard
              name={farmPro.productName}
              price={`${farmPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + farmPro.productImage}
              // address="Malir, Karachi"
              url={farmPro._id}
              description={farmPro.description}
            />
          ))}
        </div>
      )}
                </div>
            </div>
        </div>
    )
}