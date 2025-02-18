import { useState } from "react"

function Plant({plant, addToCart}){
    
    const [quantity, setQuantity] = useState(1);

   function handleAddToCart(){

    if(quantity > 0){
        addToCart(plant, quantity);
        setQuantity(1);
    }
   }
    return(
        <>
        <div className="plantContainer">
        <img src={plant.img} alt="" />
        <h3>{plant.name}</h3>
        <p>{plant.about}</p>
        <input type="number" min='1' value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} />
        <button className="addButton" onClick={handleAddToCart}>Add to Cart</button>
        </div>
        </>
    )
}






export default function ProductListingPage({addToCart, selectedPlants}){

   
    return(
        <>
       
        <div className="productContent">
        <h2 className="sideHeading">Indoor Plants</h2>
            <section className="partOnePlants">
                        {
                selectedPlants.map((plant) => {
                    return (
                        <>
                           <Plant addToCart={addToCart} plant={plant}/>
                        </>
                    )
                })
            }
            </section>
            <h2 className="sideHeading">Outdoor Plants</h2>
            <section className="partOnePlants">
                        {
                selectedPlants.map((plant) => {
                    return (
                        <>
                           <Plant addToCart={addToCart} plant={plant}/>
                        </>
                    )
                })
            }
            </section> 
            
        </div>
        </>
    )
}
