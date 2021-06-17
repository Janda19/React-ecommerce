import React from "react"
import "./header.style.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils";

export const Header = ({user}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            {
                !user ?
                    (<Link to="/signin" className="option">
                        SIGNIN
                    </Link>) :
                    (
                        <Link to="" onClick={()=>auth.signOut()} className="option">
                            SIGNOUT
                        </Link>
                    )
            }

        </div>
    </div>
)

