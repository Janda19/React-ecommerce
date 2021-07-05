import React from "react";
import "./checkout-item.style.scss"
import {connect} from "react-redux";
import {removeItem, decreaseItemCount, addItem} from "../../redux/cart/cart.action";


const CheckoutItem = ({cartItem, removeItem,addItem ,decreaseItemCount}) => {
    return (
        <div className="checkout-item">

            <div className="image-container">
                <img src={`${cartItem.imageUrl}`} alt="item"/>
            </div>

            <span className="name">{cartItem.name}</span>
            <span className="quantity"> <span   style={{cursor: 'pointer'}} onClick={() =>  {decreaseItemCount(cartItem)}}>&#10094;</span> {cartItem.quantity} <span  style={{cursor: 'pointer'}} onClick={() =>{addItem(cartItem)} }>&#10095;</span></span>
            <span className="price">{cartItem.name}</span>
            <div className="remove" style={{cursor: 'pointer'}} onClick={() => removeItem(cartItem)}>&#10006;</div>

        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem : item=> dispatch(addItem(item)),
    decreaseItemCount : (item) => dispatch(decreaseItemCount(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
