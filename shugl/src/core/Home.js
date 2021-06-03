import React, { useEffect,useState } from 'react';
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
    getPhotographer();
    getPopularFramhouse();
    getCaterer();
    getBeachhut();
    getHotel();
  },[]);

  const [category, setCategory] = useState([]);
  const [farm, setFarm] = useState([]);
  const [caterer, setCaterer] = useState([]);
  const [photographer, setPhotographer] = useState([]);
  const [beachhut, setBeachhut] = useState([]);
  const [hotel, setHotel] = useState([]);

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

  const getCaterer = () => {
    fetch(`${global.API_HOST}user/getCategory/caterer`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setCaterer(response.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getPhotographer = () => {
    fetch(`${global.API_HOST}user/getCategory/photographer`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setPhotographer(response.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getBeachhut = () => {
    fetch(`${global.API_HOST}user/getCategory/beachhut`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setBeachhut(response.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const getHotel = () => {
    fetch(`${global.API_HOST}user/getCategory/hotel`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status == true) {
          setHotel(response.data);
        }
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
                id={cat._id}
                startIcon={<GiHut />}
                name={cat.categoryName}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const homeBody = () => (
    <div className="container">
      <h3>Popular Farmhouses</h3>
      {farm && farm.length > 0 && (
        <div className="row">
          {farm.slice(0, 3).map((farmPro, index) => (
            <ProductReviewCard
              name={farmPro.productName}
              price={`${farmPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + farmPro.productImage}
              // address="Malir, Karachi"
              url={farmPro._id}
              description={farmPro.description}
              key={index}
            />
          ))}
        </div>
      )}
      <h3>Popular Caterers</h3>
      {caterer && caterer.length > 0 && (
        <div className="row">
          {caterer.slice(0, 3).map((catererPro, index) => (
            <ProductReviewCard
              name={catererPro.productName}
              price={`${catererPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + catererPro.productImage}
              // address="Malir, Karachi"
              url={catererPro._id}
              description={catererPro.description}
              key={index}
            />
          ))}
        </div>
      )}
      <div className="row">
        <HostCard imgUrl={hostImage} />
      </div>
      <h3>Popular Photographers</h3>
      {photographer && photographer.length > 0 && (
        <div className="row">
          {photographer.slice(0, 3).map((photographerPro, index) => (
            <ProductReviewCard
              name={photographerPro.productName}
              price={`${photographerPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + photographerPro.productImage}
              // address="Malir, Karachi"
              url={photographerPro._id}
              description={photographerPro.description}
              key={index}
            />
          ))}
        </div>
      )}
      <h3>Popular Beach Huts</h3>
      {beachhut && beachhut.length > 0 && (
        <div className="row">
          {beachhut.slice(0, 3).map((beachhutPro, index) => (
            <ProductReviewCard
              name={beachhutPro.productName}
              price={`${beachhutPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + beachhutPro.productImage}
              // address="Malir, Karachi"
              url={beachhutPro._id}
              description={beachhutPro.description}
              key={index}
            />
          ))}
        </div>
      )}
      <h3>Popular Hotels</h3>
      {hotel && hotel.length > 0 && (
        <div className="row">
          {hotel.slice(0, 3).map((hotelPro, index) => (
            <ProductReviewCard
              name={hotelPro.productName}
              price={`${hotelPro.productPrice}/-per person`}
              imgUrl={global.imgUrl + hotelPro.productImage}
              // address="Malir, Karachi"
              url={hotelPro._id}
              description={hotelPro.description}
              key={index}
            />
          ))}
        </div>
      )}
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
