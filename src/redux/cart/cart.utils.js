export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exists = cartItems.find(item => item.id === cartItemToAdd.id)

    if (exists) {
        return cartItems.map(item => item.id === cartItemToAdd.id ?
            {...item, quantity: item.quantity + 1} : item)

    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}
export const removeItemToCart = (cartItems, cartItemToAdd) => {
    const exists = cartItems.find(item => item.id === cartItemToAdd.id)

    if (exists) {
        return cartItems.map(item => item.id === cartItemToAdd.id ?
            {...item, quantity: item.quantity - 1} : item)

    }
    return
}



