import React from "react"
import "./custom-button.style.scss"

const CustomButton = ({children, isGoogleSignIn,...otherParams}) => {
    return (
        <button className={`${isGoogleSignIn ? 'googleBtn' : ''} custom-button`} {...otherParams} > {children}</button>

    )
}


export default CustomButton
