import React from "react"
import "./custom-button.style.scss"
import {CustomButtonContainer} from "./custom-button.style"
const CustomButton = ({children,...otherParams}) => {
    return (
        <CustomButtonContainer {...otherParams}> {children}</CustomButtonContainer>

    )
}


export default CustomButton
