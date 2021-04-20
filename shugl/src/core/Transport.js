import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import Card from '@material-ui/core/Card';
import {getCategories, getFilteredFarmhouse} from './apiCore';
import {prices} from './FixedPrices';
import {RadioBox} from './RadioBox'
import ProductReviewCard from '../Components/ProductReviewCard'
import Caterer1 from '../images/Caterers/caterer1.jpg'
import Caterer2 from '../images/Caterers/caterer2.png'
import Caterer3 from '../images/Caterers/caterer3.jpg'
import CategoriesButtons from '../Components/CategoriesButtons'
import { FaShuttleVan, FaCamera } from 'react-icons/fa';
import {GiHut, GiBalloons} from 'react-icons/gi'
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import transport1 from '../images/Transport/transport1.jpg'
import transport2 from '../images/Transport/transport2.png'
import transport3 from '../images/Transport/transport 3.jpg'
import transport4 from '../images/Transport/transport4.jpg'
import transport5 from '../images/Transport/transport 5.jpg'
import transport7 from '../images/Transport/transport7.jpg'
import transport8 from '../images/Transport/transport 8.jpg'
import transport9 from '../images/Transport/transport 9.jpg'
import transport10 from '../images/Transport/transport10.jpg'

const categories = () => (
    <div className='container' style={{marginBottom:'2rem'}}>
        <h3>Categories</h3>
        <div className='row'>
            <CategoriesButtons id='beachHut' startIcon={<GiHut /> } name = 'Beach Hut' />
            <CategoriesButtons id='transport' startIcon = {<FaShuttleVan />} name='Transporation'/>
            <CategoriesButtons id='hotel' startIcon = {<HotelIcon />} name='Hotels' />
            <CategoriesButtons id='photographer' startIcon = {<FaCamera />} name='Photogrphers'/>
            <CategoriesButtons id='caterer' startIcon = {<FastfoodIcon />} name='Caterers' />
            <CategoriesButtons id='lawnandbanquet' startIcon = {<HotelIcon />} name='Lawns and Banquets' />
            <CategoriesButtons id='farmhouse' startIcon = {<HotelIcon />} name='Farmhouses' />
            <CategoriesButtons id='eventdecorator' startIcon = {<GiBalloons />} name = 'Event Decorators' />
        </div>
    </div>
)
export const Transport = () => {

    /*const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
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
            }
        })
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
    
    return (
        <div>
            <Layout 
            title="Transport"
            description="Search and find the transport of your own choice"
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
                    <div className='row'>
                        <ProductReviewCard name = "Transport 1 " price = '1300' imgUrl={transport1} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Transport 2" price = '1200' imgUrl={transport2} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "Transport 3" price = '1100' imgUrl= {transport3}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name = "Transport 4 " price = '1300' imgUrl={transport4} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Transport 5" price = '1200' imgUrl={transport5} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "Transport 6" price = '1100' imgUrl= {transport7}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name = "Transport 7 " price = '1300' imgUrl={transport8} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Transport 8" price = '1200' imgUrl={transport9} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "Transport 9" price = '1100' imgUrl= {transport10}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    
                </div>
            </div>
    </div>    
    )
}