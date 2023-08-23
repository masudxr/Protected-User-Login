import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Protected = (props: { Component: any }) => {
  const [logToken, setToken] = useState([]);

  const { Component } = props;
  const navigate = useNavigate();
  const token = localStorage.getItem("isLogged");

  useEffect(() => {
    async function getUSerProfile() {
      const response = await fetch(`http://localhost:3000/auth/user/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setToken(json.name);

      if (!json.name) {
        navigate("/login");
      }
    }
    getUSerProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logToken]);

  return (
    <>
      <Component />
    </>
  );
};
export default Protected;
