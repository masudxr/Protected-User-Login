import { useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";


const LoginForm=() =>{

    // const [popupStyle, showPopup] = useState("hide")

    const popup = () =>{
        localStorage.setItem('login', true);
        navigate('/')
    }
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('login');

        if (login) {
            navigate('/')
        }
    })
 
    return (
        <>
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>
                Login
            </div>

            {/* <div className={popupStyle}>
                <h3>
                    Login Failed !
                </h3>
                <p>
                    UserName or Password incorrect !
                </p>
            </div> */}
        </div>
        </>
    )

}

export default LoginForm