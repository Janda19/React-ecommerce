import React from "react";
import "./cartDropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component";


const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}
export default CartDropdown
