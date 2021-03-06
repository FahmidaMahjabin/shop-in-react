import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './Cart.css';
// cart e list of product ase. so shob product er price sum korbo , shipping sum korbo, tax sum korbo
const sum = (initial, current) => initial + current;

const Cart = (props) => {
    // console.log("into cart",props.cartItems)
    const cart = props.cartItems;
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    
    for(let product of cart){
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping ;
        quantity += product.quantity;
    }
    let tax = parseFloat((totalPrice* .1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    const navigate = useNavigate();
    return (
        <div className="cart">
            <h2>Order Detail</h2>
            <div>
                <p>Total Selected Item:{quantity} </p>
                <p>Total Price:$ {totalPrice}</p>
                <p>Total Shipping Price:$ {totalShipping}</p>
                <p>Total Tax: $ {tax}</p>
                <h4>Grand Total:$ {grandTotal}</h4>
                <button onClick = {()=>navigate("/shipment")}>Proceed Shipment</button>
            </div>
            
        </div>
    );
};

export default Cart;