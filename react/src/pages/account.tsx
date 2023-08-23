import { useState, useEffect } from "react";
import NavBar from "../components/navBar";

const Account = () => {
  const [user, setUser] = useState("");
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
    console.log(json);
    setUser(json.name);
  }
  return (
    <>
      <NavBar />
      <h1>Assalamu Alaikum</h1>
      <p>I'm {user}, This is my Profile Page</p>
    </>
  );
};
export default Account;
