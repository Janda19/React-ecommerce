import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {auth, createUserProfileDoc} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.action"

import {HomePage} from './pages/homepage/homepage.component'
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";

class App extends React.Component {



    unsubscribeUser = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeUser = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                setCurrentUser({currentUser: userAuth})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeUser() // to unsubscribe the user
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {/*passing props in a route : */}
                    {/*<Route exact path="/" render={(props) => <HomePage name="janda"/>} />*/}
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/signin" component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
