import { React, useEffect, useState } from "react";
import Layout from "./Layout";
import { signout } from "../auth/index";
import CategoriesButtons from "../Components/CategoriesButtons";
import ProductReviewCard from "../Components/ProductReviewCard";
import shamsiFarmHouse from "../images/Farmhouse/shamsiFarmHouse.jpg";
import duaFarmHouse from "../images/Farmhouse/duaFarmHouse.jpg";
import JBFarmHouse from "../images/Farmhouse/jbFarmHouse.jpg";
import palmVillageFarmHouse from "../images/Farmhouse/palmVillage FarmHouse.jpg";
import alHadiFarmHouse from "../images/Farmhouse/alHadiFarmHouse.jpg";
import Caterer1 from "../images/Caterers/caterer1.jpg";
import Caterer2 from "../images/Caterers/caterer2.png";
import Caterer3 from "../images/Caterers/caterer3.jpg";
import { HostCard } from "../Components/HostCard";
import hostImage from "../images/hostImage.jpg";
//import {getCategories, getProducts} from './apiCore'
import HotelIcon from "@material-ui/icons/Hotel";
import { FaShuttleVan, FaCamera } from "react-icons/fa";
import { GiHut, GiBalloons } from "react-icons/gi";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Search from "./Search";
import { global } from "../config";

const Home = () => {
  useEffect(() => {
    getCategories();
    //getPopularFramhouse();
  }, []);

  const [category, setCategory] = useState([]);

  const getCategories = () => {
    fetch(`${global.API_HOST}/categories`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setCategory(response);
      })
      .catch((err) => console.log(err));
  };

  const getPopularFramhouse = () => {
    fetch(`${global.API_HOST}/categories`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setCategory(response);
      })
      .catch((err) => console.log(err));
  };
  /*const [farmhouseByBooked, setFarmhouseByBooked] = useState([])
    const [farmhouseByArrival, setFarmhouseByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadFarmhouseByBooked = () => {
        getProducts('booked').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setFarmhouseByBooked(data)
            }
        }) 
    }
    const loadFarmhouseByArrival= () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setFarmhouseByArrival(data)
            }
        }) 
    }
*/

  //Put the below code in return statement
  /*<h3>Best Sellers</h3>
            {farmhouseByBooked.map((farmhouse, i) =>{
                <ProductReviewCard key={i} farmhouse={farmhouse} />
            })}
            <h3>New Listed Farmhouses</h3>
            {farmhouseByArrival.map((farmhouse, i) =>{
                <ProductReviewCard key={i} farmhouse={farmhouse} />
            })}*/

  const categories = () => {
    return (
      <div className="container" style={{ marginBottom: "2rem" }}>
        <h3>Categories</h3>
        {category && category.length > 0 && (
          <div className="row">
            {category.map((cat, index) => (
              <CategoriesButtons
                id={cat.name}
                startIcon={<GiHut />}
                name={cat.name}
                key={index}
              />
              //  <CategoriesButtons id='transport' startIcon = {<FaShuttleVan />} name='Transporation'/>
              // <CategoriesButtons id='hotel' startIcon = {<HotelIcon />} name='Hotels' />
              // <CategoriesButtons id='photographer' startIcon = {<FaCamera />} name='Photogrphers'/>
              // <CategoriesButtons id='caterer' startIcon = {<FastfoodIcon />} name='Caterers' />
              // <CategoriesButtons id='lawnandbanquet' startIcon = {<HotelIcon />} name='Lawns and Banquets' />
              // <CategoriesButtons id='farmhouse' startIcon = {<HotelIcon />} name='Farmhouses' />
              // <CategoriesButtons id='eventdecorator' startIcon = {<GiBalloons />} name = 'Event Decorators' />
            ))}
          </div>
        )}
      </div>
    );
  };

  const homeBody = () => (
    <div className="container">
      <h3>Popular Farmhouses</h3>
      <div className="row">
        <ProductReviewCard
          name="Shamsi Farmhouse"
          price="28000/per day"
          imgUrl={shamsiFarmHouse}
          address="Malir, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like"
        />
        <ProductReviewCard
          name="Dua Farmhouse"
          price="15000/per day"
          imgUrl={duaFarmHouse}
          address="Super Highway, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
        <ProductReviewCard
          name="JB Farmhouse"
          price="17000/per day"
          imgUrl={JBFarmHouse}
          address="Super Highway, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
      </div>
      <h3>Popular Caterers</h3>
      <div className="row">
        <ProductReviewCard
          name="Hanif rajput"
          price="700/per person"
          imgUrl={Caterer1}
          address="DHA, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like"
        />
        <ProductReviewCard
          name="United catering"
          price="800/per person"
          imgUrl={Caterer2}
          address="Liaqutabad, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
        <ProductReviewCard
          name="Friends catering"
          price="1100/per person"
          imgUrl={Caterer3}
          address="Nagan Chowrangi, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
      </div>
      <div className="row">
        <HostCard imgUrl={hostImage} />
      </div>
      <h3>Popular Photographers</h3>
      <div className="row">
        <ProductReviewCard
          name="Hanif rajput"
          price="700/per person"
          imgUrl={Caterer1}
          address="DHA, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like"
        />
        <ProductReviewCard
          name="United catering"
          price="800/per person"
          imgUrl={Caterer2}
          address="Liaqutabad, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
        <ProductReviewCard
          name="Friends catering"
          price="1100/per person"
          imgUrl={Caterer3}
          address="Nagan Chowrangi, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
      </div>
      <h3>Popular Beach Huts</h3>
      <div className="row">
        <ProductReviewCard
          name="Hanif rajput"
          price="700/per person"
          imgUrl={Caterer1}
          address="DHA, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like"
        />
        <ProductReviewCard
          name="United catering"
          price="800/per person"
          imgUrl={Caterer2}
          address="Liaqutabad, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
        <ProductReviewCard
          name="Friends catering"
          price="1100/per person"
          imgUrl={Caterer3}
          address="Nagan Chowrangi, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
      </div>
      <h3>Popular Hotels</h3>
      <div className="row">
        <ProductReviewCard
          name="Hanif rajput"
          price="700/per person"
          imgUrl={Caterer1}
          address="DHA, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like"
        />
        <ProductReviewCard
          name="United catering"
          price="800/per person"
          imgUrl={Caterer2}
          address="Liaqutabad, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
        <ProductReviewCard
          name="Friends catering"
          price="1100/per person"
          imgUrl={Caterer3}
          address="Nagan Chowrangi, Karachi"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        />
      </div>
    </div>
  );

  return (
    <Layout title="Shugl Home" description="Scene on hai!">
      {categories()}
      {homeBody()}
    </Layout>
  );
};

export default Home;
