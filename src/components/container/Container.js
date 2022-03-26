import React from 'react';
import Products from '../Products/Products';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb'

const Container = () => {

    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    // console.log("Products:",products)
    // order Detail 
    // jei product e click korbo oita cart ekta array te ekta element oita add hobe 
    const [cart, setCart] = useState([])
   
    // localStorage theke jei shopping cart pabo seta theke ekta kore id niye oi id er product ta cart e add korbo 

    useEffect(()=>{
        const shoppingCart = getShoppingCart();
        console.log("get shopping cart from local Storage:", shoppingCart);
        const savedCart = [];
        for(let id in shoppingCart){
            // console.log("product added in cart:", id);
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = shoppingCart[id];
                addedProduct.quantity = quantity;
                // console.log("added product", addedProduct);
                savedCart.push(addedProduct)
                
            }
        }
        setCart(savedCart)
    }, [products])

    const orderDetail = (product) =>{
        console.log("id is:", product.id);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log("cart:", cart)
        addToDb(product.id)

    }

    return (
        <div className = "container">
            <div className = "row">
                <div className= "col-lg-10 bg-light">
                <Products products = {products} eventHandler = {orderDetail}></Products></div>
                <div className = "col-lg-2 bg-warning">
                    <Cart cartItems = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;