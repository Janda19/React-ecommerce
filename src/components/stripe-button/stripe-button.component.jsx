import React from "react";
import StripeCheckout from "react-stripe-checkout"
const onToken = (token) => {
    console.log(token)
    alert("Payment is Successful ")
}
export const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    return (
        <StripeCheckout
            label="Pay Now"
            amount={priceForStripe}
            description={`Your total is ${price} `}
            stripeKey='pk_test_51JB9jjCXk76qZDsy0qenXj6GYKdQ3tJiLb3LuCBH5GemfaLbFiOrtwEIH3a1CjjgqQ7szhsLBINsQbqwTCQksQjB00oZnvO8MN'
            token={onToken}
            name="E-commerce"
            image="https://sendeyo.com/up/d/f3eb2117da"
            panelLabel="Pay Now"
            billingAddress
            shippingAddress
        />
    )

}
