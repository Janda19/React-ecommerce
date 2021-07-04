import {createSelector} from 'reselect'

//Input selector to get a part from the state of redux
const selectCart = state => state.cart

//return number of items
export const selectCartItem = createSelector([selectCart],
    cart => cart.cartItems
)


export const selectCartItemCount = createSelector([selectCartItem],
    cartItems => cartItems.reduce((accumalatedItems, item) => accumalatedItems + item.quantity, 0)
)

export const selectCartItemPrice = createSelector([selectCartItem],
    cartItems => cartItems.reduce((accumalatedPrice, item )=> accumalatedPrice + item.quantity * item.price,0)
    )



export const selectCartHidden = createSelector([selectCart], cart=>cart.hidden)

