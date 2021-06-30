export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exists = cartItems.find(item => item.id === cartItemToAdd.id)

    if (exists) {
        return cartItems.map(item => item.id === cartItemToAdd.id ?
            {...cartItemToAdd, quantity: item.quantity + 1} : cartItems)

    }
    return [...cartItems, {...cartItemToAdd , quantity: 1}]

}
