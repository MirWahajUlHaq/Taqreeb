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
import axios from "axios";
import { global } from "../config";

export const BeachHut = (props) => {
  const [category, setCategory] = useState([]);
  const [beachhut, setBeachhut] = useState([]);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    getCategories();
    getBeachhut(props.match.params.id);
  }, [props.match.params.id]);

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

  const getBeachhut = async (id) => {

    
      const bodyParameter = {
        categoryId: id
      };

      const res = await axios.post(
        global.API_HOST + `user/getCategoryProducts`,
        bodyParameter
      );
      if(!!res.data){
        console.log(res);
        setBeachhut(res.data.data.data);
        setCategoryName(res.data.data.categoryName);
      }

    // fetch(`${global.API_HOST}user/getCategoryProducts`, {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     if (response.status == true) {
    //       setBeachhut(response.data);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  const categories = () => (
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

  const onFilter = async () => {
    if(!! minValue && !!maxValue){

      const bodyParameter = {
        lowPrice: minValue,
        highPrice: maxValue
      };

      const res = await axios.post(
        global.API_HOST + `user/filterProducts`,
        bodyParameter
      );
console.log(res,"asdasd")
      if(!!res.data.data){
        setBeachhut(res.data.data);
      }else{
        setBeachhut(...beachhut);
      }
    }
  }

  const onFilterReset = () => {
    setMinValue("");
    setMaxValue("");
    getBeachhut(props.match.params.id)

  }
  return (
    <div>
      <Layout
        title={categoryName}
        description={`Search and find  ${categoryName} of your own choice`}
        className="container-fluid"
      />
      <div className="row">
        <div className="col col-md-3">
          <h3>Filter By price range</h3>

          <ul></ul>
          <table border="0" cellspacing="5" cellpadding="5">
            <tbody>
              <tr>
                <td>Min Price:</td>
                <td>
                  <input type="number" id="min" name="min"  value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>Max Price:</td>
                <td>
                  <input type="number" id="max" name="max" value={maxValue} onChange={(e) => setMaxValue(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained" onClick={onFilter}> Filter </button>
                </td>
                <td>
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained" onClick={onFilterReset}> Reset </button>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col col-md-8">
          {categories()}
          <h3>All</h3>
          {beachhut && beachhut.length > 0 ? (
            <div className="row">
              {beachhut.map((beachhutPro, index) => (
                <ProductReviewCard
                  name={beachhutPro.productName}
                  price={`${beachhutPro.productPrice}/-per person`}
                  imgUrl={global.imgUrl + beachhutPro.productImage}
                  // address="Malir, Karachi"
                  url={beachhutPro._id}
                  description={beachhutPro.description}
                />
              ))}
            </div>
          ): "No product found.."}
        </div>
      </div>
    </div>
  );
};
