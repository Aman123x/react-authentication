import React from "react";
import "./login.css"

const Login=()=>{



    return(
        <div className="container">
            <div className="signUp">
                <div className="signUp1">
                    <p>Welcome back! 👋</p>
                    <p>Sign up to your account</p>
                    <form>
                        <label for="email">Your email</label>
                        <input type="email" id="email"/>

                        <label for="pass">Password</label>
                        <input type="password" id="pass"/>

                        <a href="profile.html" id="btn" className="button">CONTINUE</a>
                    </form>
                </div>
                <div id="warn">

                </div>
            </div>
            <div className="bottom">
                <p >Don’t have an account? <span id="bottom-sign"><a href="index.html">Sign up</a></span></p>
            </div>
        </div>
    )
}

export default Login;