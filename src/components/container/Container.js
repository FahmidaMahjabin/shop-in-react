import React from 'react';
import Products from '../Products/Products';
import { useState, useEffect } from 'react';
const Container = () => {

    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    console.log("Products:",products)
    // order Detail 
    // jei product e click korbo oita cart ekta array te ekta element oita add hobe 
    const [cart, setCart] = useState([])
    const orderDetail = (product) =>{
        console.log("id is:", product.id);
        const newCart = [...cart, product];
        setCart(newCart);
        console.log("cart:", cart)

    }
    return (
        <div className = "container">
            <div className = "row">
                <div className= "col-lg-10 bg-light">
                <Products products = {products} eventHandler = {orderDetail}></Products></div>
                <div className = "col-lg-2 bg-warning">
                    <h2>Order Detail</h2>
                    <div>
                        <p>Total Selected Item: {cart.length}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;