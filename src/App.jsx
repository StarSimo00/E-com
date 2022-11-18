import { useEffect, useState } from "react";
import { Route , Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
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
    // handle_totale()
  } , [] )

  const get_input_data = (e) => {
    if( e === 'Nothing' ){
      return fetch_products()
    }else{
      fetch_products_Categorie(e)
    }
  }

  const handle_Add = (e) => {

    if(Object.keys(cart).length === 0  ){
      if(e === undefined){
        return cart
      }else{
          e.quantity = 1
          return setCart([e])    
      }
    }
      if(cart.filter( (d) => d.id === e.id).length >0 ){
        return 'cart'
      }else{
        e.quantity = 1 
        return setCart( cart =>  [...cart , e ])
      }
      
  
            
  }

  const handle_increment = (e) => {
    const cart_ = [...cart]
    cart_.forEach((element)=>{
      if (element.id === e.id){
          element.quantity ++
      }
    })
    setCart(cart_)
  }
  
  const handle_decrement = (e) => {
    const cart_ = [...cart]
    cart_.forEach((element)=>{
      if (element.id === e.id){
          element.quantity --
      }
    })
    setCart(cart_)
  }

  const handle_delete = (e) => {
    const cart_ = [...cart].filter( d => d.id !== e.id )
    setCart(cart_)
  }

  const handle_totale = () => {
    let totale = 0
    cart.map( (e) => {
      return totale += parseFloat(e.price) * parseFloat(e.quantity)
    } )

    return totale.toFixed(2)
  }
  

  return ( 
    <>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/E-com" element={ <Content handleAdd={handle_Add} data={products} get_data={get_input_data} /> } />
          <Route path="/Cart" element={ <Cart totale={handle_totale}  cart={cart} Delete={handle_delete} decrement={handle_decrement} increment={handle_increment} /> } />
          <Route path="/CheckOut" element={ <CheckOut cart={cart} /> }  />
        </Routes>
    </>
   );
}
 
export default App;