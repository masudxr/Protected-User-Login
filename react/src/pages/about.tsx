import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.setItem("login", false);
    localStorage.removeItem("login");
    navigate("/login");
  };
  useEffect(() => {
    const login = localStorage.getItem("login");

    if (!login) {
      navigate("/login");
    }
  });
  return (
    <>
      <h1>Hi, I'm About page</h1>

      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </>
  );
};
export default About;
