import { useState } from "react"

function Plant(props){
    
    return(
        <>
        <div className="plantContainer">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <p>{props.about}</p>
        <p>{props.cost}</p>
        <button className="addButton" onClick={()=> {props.setCount((prev)=> prev+1); props.setSelectedPlants([...[props.cost,props.name,props.img]]);}}>Add to Cart</button>
        </div>
        </>
    )
}






export default function ProductListingPage(props){

    const plants = [['./assets/plant1.jpg',"SpiderPlant","Purifies the air in a efficient way",8],['./assets/plant2.jpg',"SpiderPlant","Purifies the air in a efficient way",8],['./assets/plant3.jpg',"SpiderPlant","Purifies the air in a efficient way",8],['./assets/plant4.jpg',"SpiderPlant","Purifies the air in a efficient way",8]]
    // function createId(){
    //     let id = Math.floor(Math.random() * 89);
    //     return id
    // }
    return(
        <>
        <div className="productHeader">
            <nav><ul><li>Home</li> <li>Cart</li></ul></nav>
            <img src="./assets/shopping-cart.svg" alt="cart_icon" />
            <p>{props.count}</p>
        </div>
        <div className="productContent">
            <section className="partOnePlants">
                        {
                plants.map((data) => {
                    return <Plant  className="partOne" img={data[0]} name={data[1]}  about={data[2]} cost={data[3]} setCount={props.setCount} setSelectedPlants={props.setSelectedPlants}/>
                })
            }
            </section>
            <section className="partTwoPlants">
                        {
                plants.map((data) => {
                    return <Plant className="partTwo" img={data[0]} name={data[1]}  about={data[2]} cost={data[3]} setCount={props.setCount}/>
                })
            }
            </section>
            <section className="partThreePlants">
                        {
                plants.map((data) => {
                    return <Plant  className="partThree" img={data[0]} name={data[1]}  about={data[2]} cost={data[3]} setCount={props.setCount}/>
                })
            }
            </section>
            
        </div>
        </>
    )
}
