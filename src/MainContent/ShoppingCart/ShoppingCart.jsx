import { useEffect, useState } from 'react';


import Products from './Mocks/Products.json';
import { ShoppingList } from './Components/ShoppingList/ShoppingList';
import { ShoppingResume } from './Components/ShoppingResume/ShoppingResume';

export const ShoppingCart = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <h1>Tu carrito</h1>
      </div>

      <div className="row d-flex justify-content-center align-items-center text-center">
        <p>{products.length} Artículo(s)</p>
      </div>

      <div className="row">
        <div className="col-7" style={{marginLeft:"100px"}}>
          <ShoppingList />
        </div>
        <div className="col-3">
          <ShoppingResume Products={products}/>
        </div>
      </div>
    </div>
  )
}
