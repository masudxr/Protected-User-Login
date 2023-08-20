import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Protected = (props: { Component: any }) => {
  const { Component } = props;
  const navigate = useNavigate();
  const token = localStorage.getItem("isLogged");

  useEffect(() => {
    getUSerProfile();
  }, []);

  async function getUSerProfile() {
    const response = await fetch(`http://localhost:3000/auth/user/profile`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();

    if (!json.name) {
      navigate("/login");
    }
  }
  return (
    <>
      <Component />
    </>
  );
};
export default Protected;
