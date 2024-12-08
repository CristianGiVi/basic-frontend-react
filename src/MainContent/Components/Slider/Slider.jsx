import React, { useEffect, useState } from 'react'

import Products from './Mocks/Products.json';

export const Slider = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () =>{
        setProducts(Products);
    }

    useEffect(() => {
        getProducts();
    }, [])
    
    console.log(products)

  return (
    <div>Slider</div>
  )
}