import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

import classes from './AuthPage.module.css';

const AuthPage = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submithandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true)
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlUoLonh8jMlZG_rKIcWwwNNZUomjYShU'
        }
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlUoLonh8jMlZG_rKIcWwwNNZUomjYShU'
        }
        fetch(
            url,
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(res => {
            setIsLoading(false);
            if (res.ok) {
                emailInputRef.current.value = "";
                passwordInputRef.current.value = "";
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errmessage = "Authentication Failed";
                    if (data && data.error && data.error.message) {
                        errmessage = data.error.message;
                    }
                    throw new Error(errmessage);
                });
            }
        }).then(data => {
            authCtx.login(data.idToken);
            localStorage.setItem("token", data.idToken)
            localStorage.setItem("emailid", data.email)
            history.replace("/")
            setTimeout(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("emailid");
                console.log("logedout with timer")
            }, 300000)
        }).catch(err => {
            alert(err.message);
        })

    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submithandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthPage;
