import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {

  const navigate = useNavigate();
  
  localStorage.removeItem("isLogged");

  useEffect(() => {
    const login = localStorage.getItem("isLogged");

    if (!login) {
      navigate("/login");
    }
  });
};
export default LogOut;
