import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
// Products list of product, theke j kon 6 ta randomly choose korbo
const EachProduct = (props) => {
    // console.log(props.product)
    // console.log("eventHandler:",props.eventHandler)
    const {product, eventHandler} = props;
    let {name, img, category, price, stock, id} = product
    return (
        <div className = "col" key = {id}>
            <div className="card">
            <img src={img} className="card-img-top" alt="product"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <span>Category:{category}</span>
                    <span>Price:{price}</span>
                    <span>Stock:{stock}</span>
                </p>
                <button onClick={() => eventHandler(product)} className="btn btn-warning d-block">
                <FontAwesomeIcon icon={faCartShopping} />Add to Cart
                </button>
            </div>
            </div>
        </div>
    );
};

export default EachProduct;