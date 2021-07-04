import React from "react";
import "./cartDropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItem} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartDropdown = ({cartItems, history,toggleCartHidden}) => {


    return (
        <div className="cart-dropdown ">
            <div className="cart-item"/>

            {!cartItems.length ? <span className="empty-message">cart is empty</span> : cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
            <CustomButton onClick={()=>{history.push('/checkout')
                toggleCartHidden()}}>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItem
    }
)

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown))
