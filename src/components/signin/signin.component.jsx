import React from "react"
import "./signin.style.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    submitHandler = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({email: '', password: ''})
        } catch (e) {
            console.log(e)
        }
    }

    changeHandler = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign In with email and password </span>
                <form onSubmit={this.submitHandler}>
                    <FormInput handleChange={this.changeHandler} type="email" label="Email" name="email"
                               value={this.state.email} required/>
                    <FormInput handleChange={this.changeHandler} type="password" label="Password" name="password"
                               value={this.state.password} required/>
                    <div className="buttons-container">
                        <CustomButton type="submit">Sign In</CustomButton>

                        <CustomButton onClick={signInWithGoogle}type='button'isGoogleSignIn={true}>Sign In with
                            google</CustomButton>
                    </div>
                </form>


            </div>
        )


    }
}

export default SignIn

