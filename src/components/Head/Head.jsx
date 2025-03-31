import React from "react";
import "./Head.css";
import banner from "../../../public/banner.jpg";

function Head() {
    return (
        <head className="head">
            <img src={banner} alt="banner" className="head" />
            <h2 className="welcome-title">Bienvenido a EST-REAMING</h2>
            <p className="welcome-text">Explora una gran variedad de películas y series.</p>
        </head>
    );
}

export default Head;