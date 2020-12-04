import React, { useEffect } from 'react';
import '../styles/title.scss';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";




export default function Title() {
    const page = useSelector(state => state.page);
    const history = useHistory();

    useEffect(() => {
        if (page === "") {
            history.push("/")
        }

    }, []);

    return (
        <div className="title">
            <h1>Hola bienvenido sabemos que quieres viajar en un {page}</h1>
        </div>
    );
}