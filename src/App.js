import { useEffect, useState } from "react";
import { Route , Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar"

const App = () => {

  const [ products , setProducts ] = useState(null)
  const [ cart , setCart ] = useState({})

  
  const fetch_products = async () => {
    const fetch_products = await fetch('https://fakestoreapi.com/products')
    const data = await fetch_products.json()
    setProducts(data)
  }

  const fetch_products_Categorie = async (e) => {
    const fetch_products_Categorie = await fetch(`https://fakestoreapi.com/products/category/${e}`)
    const data = await fetch_products_Categorie.json()
    setProducts(data)
  }

  useEffect( () => {
    fetch_products()
  } , [] )

  const get_input_data = (e) => {
    if( e === 'Nothing' ){
      return fetch_products()
    }else{
      fetch_products_Categorie(e)
    }
  }

  useEffect( () => {
      handle_Add()
  } , [] )

  const handle_Add = (e) => {
    if(Object.keys(cart).length === 0){
      if(e === undefined){
        return cart
      }else{
        return setCart([e])
      }
    }else{
    setCart( cart =>  [...cart , e ])
    console.log(cart)
    }
  }

  

  return ( 
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Content handleAdd={handle_Add} data={products} get_data={get_input_data} /> } />
          <Route path="/Cart" element={ <Cart  cart={cart} /> } />
        </Routes>
    </>
   );
}
 
export default App;