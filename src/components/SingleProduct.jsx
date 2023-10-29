import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useContext(AppContext);
  

  const { id } = useParams();
  // console.log("🚀 ~ file: SingleProduct.js:21 ~ SingleProduct ~ id:", id)

  

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() =>{
    getSingleProduct(`${API}?id=${id}`);
  } , []);
  

 if(isSingleLoading) {
  return <div className="page_loading">Loading....</div>
 }



  return (
    <>
    <BreadCrumb title={name}/>
    <div>
      single product page,{name} ,{id}, {price}, {description};

      </div>
      <div >
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            </div>
    </>
  )
}

export default SingleProduct
