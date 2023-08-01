import { useState } from "react";
import "./login.css";


const LoginForm=() =>{

    const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
 
    return (
        <>
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>
                Login
            </div>

            <div className={popupStyle}>
                <h3>
                    Login Failed !
                </h3>
                <p>
                    UserName or Password incorrect !
                </p>
            </div>
        </div>
        </>
    )

}

export default LoginForm