import React, { useReducer } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { cartReducer } from '../reducers/cartReducer'
import ProductList from './ProductList'
import Cart from './Cart'


const Products = () => {

    const [state,dispatch]=useReducer(cartReducer,{
      products:[],
      cart:[],
    })
    console.log(state);
const fetchProducts=async()=>{
    const {data}=await axios.get('https://dummyjson.com/products')

    dispatch({
      type:"ADD_PRODUCTS",
      payload:data.products,
    })

  }

useEffect(()=>{
    fetchProducts()
},[])

  return (
    <div style={{display :"flex"}}>
      <ProductList state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />

    </div>
  )
}

export default Products