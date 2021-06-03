import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "@material-ui/core/Card";
import { getCategories, getFilteredFarmhouse } from "./apiCore";
import { prices } from "./FixedPrices";
import { RadioBox } from "./RadioBox";
import ProductReviewCard from "../Components/ProductReviewCard";
import Caterer1 from "../images/Caterers/caterer1.jpg";
import Caterer2 from "../images/Caterers/caterer2.png";
import Caterer3 from "../images/Caterers/caterer3.jpg";
import CategoriesButtons from "../Components/CategoriesButtons";
import { FaShuttleVan, FaCamera } from "react-icons/fa";
import { GiHut, GiBalloons } from "react-icons/gi";
import HotelIcon from "@material-ui/icons/Hotel";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { global } from "../config";

export const Decorator = () => {
  const [category, setCategory] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getCategories();
    getEvent();
  }, []);

  const getCategories = () => {
    fetch(`${global.API_HOST}user/getCategory`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setCategory(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const getEvent = () => {
    fetch(`${global.API_HOST}user/getCategory/eventdecorator`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setEvent(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const categories = () => (
    <div className="container" style={{ marginBottom: "2rem" }}>
      <h3>Categories</h3>
      {category && category.length > 0 && (
        <div className="row">
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
  );

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
        title="Event Decorators"
        description="Search and find Decorators of your own choice"
        className="container-fluid"
      />
      <div className="row">
        <div className="col col-md-3">
          <h3>Filter By price range</h3>

          <ul></ul>
        </div>
        <div className="col col-md-8">
          {categories()}
          <h3>All</h3>
          {event && event.length > 0 && (
            <div className="row">
              {event.map((eventPro, index) => (
                <ProductReviewCard
                  name={eventPro.productName}
                  price={`${eventPro.productPrice}/-per person`}
                  imgUrl={global.imgUrl + eventPro.productImage}
                  // address="Malir, Karachi"
                  url={eventPro._id}
                  description={eventPro.description}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
