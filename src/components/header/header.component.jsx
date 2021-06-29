import React from "react"
import "./header.style.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import CartIcon from "../cart-icon/cartIcon.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

import {Link} from "react-router-dom"
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {CartReducer} from "../../redux/cart/cart.reducer";
import {toggleCartHidden} from "../../redux/cart/cart.action";

const Header = ({currentUser, hidden}) => (
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
                !currentUser ?
                    (<Link to="/signin" className="option">
                        SIGNIN
                    </Link>) :
                    (
                        <Link to="/" onClick={() => auth.signOut()} className="option">
                            SIGNOUT
                        </Link>
                    )
            }
            <CartIcon/>

        </div>
        {
            hidden ? null :
                (  <CartDropdown/>)

        }
    </div>
)
// state is the rootReducer
const mapStateToProps = ({user: {currentUser}, cart : {hidden}}) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header)

