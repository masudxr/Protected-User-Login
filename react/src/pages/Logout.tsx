import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {

  const navigate = useNavigate();
  
  sessionStorage.setItem("login", false);
  localStorage.removeItem("login");
  navigate("/login");

  useEffect(() => {
    const login = localStorage.getItem("login");

    if (!login) {
      navigate("/login");
    }
  });
};
export default LogOut;
