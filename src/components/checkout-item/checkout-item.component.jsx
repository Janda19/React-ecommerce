import React from "react";
import "./checkout-item.style.scss"
import {createStructuredSelector} from "reselect";
import {selectCartItem} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";

const CheckoutItem = ({cartItem }) => {
    return (
        <div className="checkout-item">

            <div className="image-container">
                <img src={`${cartItem.imageUrl}`} alt="item"/>
            </div>

            <span className="name">{cartItem.name}</span>
            <span className="quantity"> <span>&#10094;</span> {cartItem.quantity} <span>&#10095;</span></span>
            <span className="price">{cartItem.name}</span>
            <div className="remove">&#10006;</div>

        </div>
    )
}

export default CheckoutItem
