import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {HomePage} from './pages/homepage/homepage.component'
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";


import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";
import {checkUserSession} from "./redux/user/user.action"

class App extends React.Component {


    componentDidMount() {
        const {checkUser} = this.props
        checkUser()

    }

    componentWillUnmount() {
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {/*passing props in a route : */}
                    {/*<Route exact path="/" render={(props) => <HomePage name="janda"/>} />*/}
                    <Route path="/shop" component={Shop}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/signin" render={() =>
                        this.props.currentUser ? (
                            <Redirect to='/'/>
                        ) : (
                            <SignInSignUp/>
                        )
                    }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUserSession())
}
)
export default connect(mapStateToProps, mapDispatchToProps)(App)
