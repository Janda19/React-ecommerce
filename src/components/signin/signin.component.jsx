import React from "react"
import "./signin.style.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    changeHandler = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className="signin">

                <form onSubmit={this.submitHandler}>
                    <FormInput handleChange={this.changeHandler} label="Email" name="password"
                               value={this.state.password} required/>
                    <FormInput handleChange={this.changeHandler} label="Password" name="password"
                               value={this.state.password} required/>
                    <div className="buttons-container">
                        <CustomButton type="submit">Sign In</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In with google</CustomButton>
                    </div>
                </form>


            </div>
        )


    }
}

export default SignIn

