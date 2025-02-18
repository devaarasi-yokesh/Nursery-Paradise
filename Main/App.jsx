import { useState } from 'react'
import LandingPage from './LandingPage'
import ProductListingPage from './ProductListingPage';
import CheckoutPage from './CheckoutPage';
import './App.css'

function App() {
  const [showProductPage, setShowProductPage] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);
  const [cart, setCart] = useState([]);
  
  const [selectedPlants, setSelectedPlants] = useState([
    {id:1, img:"./src/assets/plant1.jpg", name:'SpiderPlant',about:'Same air purifier in effiecient way', cost:10},
    {id:2, img:"./src/assets/plant2.jpg", name:'Pathos',about:'Purifies the air in a efficient way', cost:5},
    {id:3, img:"./src/assets/plant3.jpg", name:'SpiderPlant',about:'Same air purifier in effiecient way', cost:10},
    {id:4, img:"./src/assets/plant2.jpg", name:'Pathos',about:'Purifies the air in a efficient way', cost:5},
    {id:5, img:"./src/assets/plant3.jpg", name:'SpiderPlant',about:'Same air purifier in effiecient way', cost:10},
    ]);

 

 const addToCart = (plant,quantity) =>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id)
      if(existingItem){
        return prevCart.map(item => item.id === plant.id ? {...item, quantity: item.quantity + quantity}: item);
      }
      return [...prevCart, {...plant, quantity}];
    });
 };
 

  return (
    <>
    <nav className='navigationBar'>
      <ul>
        <li onClick={() => {setShowLandingPage(true);setShowCheckoutPage(false);setShowProductPage(false)}}>Home</li>
        <li onClick={() => {setShowProductPage(true);setShowLandingPage(false);setShowCheckoutPage(false)}}>Plants</li>
        <li onClick={() => {setShowCheckoutPage(true);setShowLandingPage(false);setShowProductPage(false)}}>Cart</li>
      </ul>
    </nav>
      {showLandingPage && <LandingPage setShowProductPage={setShowProductPage} cart={cart} setCart={setCart}/>} 
      {showProductPage && <ProductListingPage addToCart={addToCart} selectedPlants={selectedPlants}/>} 
      {showCheckoutPage && <CheckoutPage selectedPlants={selectedPlants} cart={cart} setCart={setCart} />}
    </>
  )
}

export default App
