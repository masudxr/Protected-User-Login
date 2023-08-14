import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const [popupStyle, showPopup] = useState("hide")
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  async function popup() {
    const json = {
      name: userName,
      password: password,
    };
    console.log("json", json);

    const res = await fetch("http://localhost:3000/auth/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
    const token = await res.json();
    console.log("token:", token);
    console.log("token and token:", token.access_token);

    if (token.access_token) {
      localStorage.setItem("login", true);
      navigate("/");
    }

    // localStorage.setItem("login", true);
    // navigate("/");
  }
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");

    if (login) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="cover">
        <h1>Login</h1>
        <input
          // value={userName}
          type="text"
          onChange={(e) => handleInputChange(e)}
          id="userName"
          placeholder="UserName"
        />
        <input
          type="password"
          id="password"
          // value={password}
          onChange={(e) => handleInputChange(e)}
          placeholder="password"
        />

        <button type="submit" className="login-btn" onClick={popup}>
          Login
        </button>

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
  );
};

export default LoginForm;