import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props: { Component: any; }) => {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');

        if (!login) {
            navigate('/login')
        }
    })

    return (
        <>
            <Component />
        </>
    );
}
export default Protected;