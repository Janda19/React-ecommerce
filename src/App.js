import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import {HomePage} from './pages/homepage/homepage.component'
import Shop from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import {auth, createUserProfileDoc} from "./firebase/firebase.utils";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeUser = null
    componentDidMount() {
        this.unsubscribeUser = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: userAuth})
            }
        })
    }
    componentWillUnmount() {
        this.unsubscribeUser() // to unsubscribe the user
    }


    render() {
        return (
            <div>
                <Header user={this.state.currentUser}/>
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

export default App;
