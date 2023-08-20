import { useEffect, useState } from "react";
import NavBar from "../components/navBar";

const Home = () => {
  const [user, setUser] = useState([])
  const login = localStorage.getItem("isLogged");

  useEffect(() => {
    getUSerProfile();
  }, []);

  async function getUSerProfile() {
    const response = await fetch(`http://localhost:3000/auth/user/profile`, {
      headers: {
        Authorization: "Bearer " + login,
      },
    });
    const json = await response.json();
    setUser(json.name)

  }
  return (
    <>
      <NavBar />
      <h1>Hi {user}, Welcome to Home Page</h1>
    </>
  );
};
export default Home;
