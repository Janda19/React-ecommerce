import React from "react"
import "./header.style.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import CartIcon from "../cart-icon/cartIcon.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

import {Link} from "react-router-dom"
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";


import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import {HeaderContainer , LogoContainer , OptionLink , OptionsContainer} from "./header.style";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer >
            <OptionLink to="/shop" >
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                !currentUser ?
                    (<OptionLink to="/signin" >
                        SIGNIN
                    </OptionLink>) :
                    (
                        <OptionLink as="div" to="/" onClick={() => auth.signOut()}>
                            SIGNOUT
                        </OptionLink>
                    )
            }
            <CartIcon/>

        </OptionsContainer>
        {
            hidden ? null :
                (  <CartDropdown/>)

        }
    </HeaderContainer>
)
// state is the rootReducer
const mapStateToProps = createStructuredSelector(
    {
        currentUser : selectCurrentUser,
        hidden : selectCartHidden
    }
)

export default connect(mapStateToProps)(Header)

