import { useState } from "react"

function Element(props){
    return(
        <>
        <img src={props.img} alt="" />
                <p>{props.name}</p>
                <p>{props.cost*props.count}</p>
                <p><span onClick={()=> {props.setCount((prev)=> prev+1)}}>+</span>{props.count} <span onClick={()=> {props.setCount((prev)=> prev-1)}}>-</span> </p>      
        </>
    )
}


export default function CheckoutPage(props){
console.log(props.selectedPlants)
    return(
        <>
        <h1>Shopping Cart</h1>
        
        {props.selectedPlants.map((data)=> {
            return 
            (
                <>
                 <Element count={props.count} setCount={props.setCount} img={data[3]} name={data[1]} cost={data[0]}/>
                </>
            )
            
        })}
        <p>{props.totalCost}</p>
        </>
    )
}
