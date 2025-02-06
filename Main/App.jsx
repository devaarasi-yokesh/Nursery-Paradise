import { useState } from 'react'
import LandingPage from './LandingPage'
import ProductListingPage from './ProductListingPage';
import CheckoutPage from './CheckoutPage';
import './App.css'

function App() {
  const [showProductPage, setShowProductPage] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // const k = selectedPlants.map((data)=> {
  //   const val = data.reduce((total,num)=>{  total+num},0);
  //   return val
  // });
  // console.log(k);
  return (
    <>
      {!showProductPage && <LandingPage setShowProductPage={setShowProductPage} count={count} setCount={setCount}/>} 
      {showProductPage && <ProductListingPage setShowProductPage={setShowProductPage} count={count} setCount={setCount} setSelectedPlants={setSelectedPlants}/>} 
      <CheckoutPage selectedPlants={selectedPlants} count={count} setCount={setCount} totalCost={totalCost}/>
    </>
  )
}

export default App
