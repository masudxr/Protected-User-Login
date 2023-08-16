import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {

  const navigate = useNavigate();
  
  sessionStorage.setItem("isLogged", '');
  localStorage.removeItem("isLogged");
  navigate("/login");

  useEffect(() => {
    const login = localStorage.getItem("isLogged");

    if (!login) {
      navigate("/login");
    }
  });
};
export default LogOut;
