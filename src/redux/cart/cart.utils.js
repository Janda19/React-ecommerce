
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exists = cartItems.find(item => item.id === cartItemToAdd.id)

    if (exists) {
        return cartItems.map(item => item.id === cartItemToAdd.id ?
            {...item, quantity: item.quantity + 1} : item)

    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}
export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {

    const existingCartItem = cartItems.find(item => item.id === cartItemToDecrease.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToDecrease.id)

    }

    return cartItems.map(item => item.id === cartItemToDecrease.id ? {
            ...cartItemToDecrease,
            quantity: cartItemToDecrease.quantity - 1
        } : item
    )

}

