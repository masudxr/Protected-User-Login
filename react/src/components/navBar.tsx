import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={"/"}> Home </Link>
      <Link to={"/about"}> About </Link>
      <Link to={"/contact"}> Contact </Link>
      <Link to={"/account"}> Account </Link>
      <Link to={"/logOut"}> LogOut </Link>
    </>
  );
};
export default NavBar;
