import React from 'react';

import EachProduct from '../EachProduct/EachProduct';
// database e list of product ache.
// database theke ekta kore product nibo tar general info cart e add kore container e show korbo

const Products = (props) => {
    const {products, eventHandler} = props;
    
    
    return (
            <div className='row row-cols-3 g-4'>
                {/* {for(let i = 0; i <6; i++){
                    let index = Math.round(Math.random()*products.length);
                    let product = products[index];
                    <EachProduct product = {product}></EachProduct>
                }
            
                } */}
                {
                    products.map(product=><EachProduct product = {product} eventHandler = {eventHandler}></EachProduct>)
                }
            </div>  
        
    );
};

export default Products;