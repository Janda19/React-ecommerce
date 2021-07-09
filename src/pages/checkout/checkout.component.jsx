import React from "react";
import "./checkout.style.scss"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItemPrice, selectCartItem} from "../../redux/cart/cart.selectors";

import {StripeCheckoutButton} from "../../components/stripe-button/stripe-button.component";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            {/*HEADER*/}
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {/*    /HEADER      */}
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}

            <div className="total">
                <span>total : {total}$</span>
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartItemPrice
})

export default connect(mapStateToProps)(Checkout)
