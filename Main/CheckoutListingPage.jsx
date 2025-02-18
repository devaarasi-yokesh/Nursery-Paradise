import { useState } from "react"




export default function CheckoutPage({cart}){
const total = cart.reduce((sum,item) => sum + (item.cost * item.quantity), 0);

    return(
        <div className="cartPage">
        <h1>Shopping Cart</h1>
        
       {cart.map((item) => {
        return (
            <div className="item">
            <h4>{item.name}</h4>
            <img src={item.img} alt="" />
            <span>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.cost * item.quantity).toFixed(2)}</p>
            </span>
            </div>
        )
       })}
        <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
    )
}
