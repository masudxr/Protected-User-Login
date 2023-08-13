import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Protected = (props: { Component: any; }) => {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('login');

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