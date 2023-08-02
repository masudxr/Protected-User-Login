import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <Link to={'/'} > Home </Link>
            <Link to={'/about'} > About </Link>
            <Link to={'/contact'} > Contact </Link>
            <Link to={'/login'} > Login </Link>
        </>
    );
}
export default NavBar;
