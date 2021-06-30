import React from "react";
import "./cartDropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown ">
            <div className="cart-item"/>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => (
    {
        cartItems
    }
)

export default connect(mapStateToProps)(CartDropdown)
