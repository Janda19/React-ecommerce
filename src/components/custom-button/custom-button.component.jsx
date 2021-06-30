import React from "react"
import "./custom-button.style.scss"

const CustomButton = ({children,inverted, isGoogleSignIn,...otherParams}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleBtn' : ''} custom-button`} {...otherParams} > {children}</button>

    )
}


export default CustomButton
