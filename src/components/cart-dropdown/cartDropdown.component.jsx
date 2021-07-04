import React from "react";
import "./cartDropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItem} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

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

const mapStateToProps =createStructuredSelector({
        cartItems: selectCartItem
    })

export default connect(mapStateToProps)(CartDropdown)
