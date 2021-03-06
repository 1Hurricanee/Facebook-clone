import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button'
import {auth, provider} from "./firebase";
import {actionTypes}  from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
        const [state,dispatch] =useStateValue();

    const signIn = () =>
    {
        auth
            .signInWithPopup(provider)
            .then((result) =>
            {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://img.icons8.com/fluent/144/000000/facebook-new.png"/>
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                />
            </div>
            
                <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
            
            
        </div>
    )
}

export default Login
