import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [logToken, setToken] = useState("");

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

    const res = await fetch("http://localhost:3000/auth/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
    const token = await res.json();

    if (token.access_token) {
      localStorage.setItem("isLogged", token.access_token);
      setToken(token.access_token);
      navigate("/");
    }
    console.log("Welcome, ", userName);
  }
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem(logToken);
    if (login) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          id="userName"
          placeholder="UserName"
        />
        <input
          type="password"
          id="password"
          onChange={(e) => handleInputChange(e)}
          placeholder="password"
        />
        <button type="submit" className="login-btn" onClick={popup}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
