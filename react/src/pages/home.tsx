/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NavBar from "../components/navBar";

const Home = () => {
  const [user, setUser] = useState([]);
  const login = localStorage.getItem("isLogged");

  useEffect(() => {
    async function getUSerProfile() {
      const response = await fetch(`http://localhost:3000/auth/user/profile`, {
        headers: {
          Authorization: "Bearer " + login,
        },
      });
      const json = await response.json();
      setUser(json.name);
    }

    getUSerProfile();
  }, [user]);

  return (
    <>
      <NavBar />
      <div className="home">
        <h1>Hi {user}, Welcome to Home Page</h1>
        <h2>
          Hello jonogon
        </h2>
        <h3>Checking the security level using React and Nest Js</h3>
        <h4>
          No One Can Access the another routes without login and also not get
          access changing the localStorage value.
        </h4>
        <h5>
          
        </h5>
      </div>
    </>
  );
};
export default Home;
