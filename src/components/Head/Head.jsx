import React from "react";
import "./Head.css";

function Head() {
    return (
        <header className="head">
            <img src="/banner.jpg" alt="banner" className="head-img" />
            <h2 className="welcome-title">Bienvenido a EST-REAMING</h2>
            <p className="welcome-text">Explora una gran variedad de películas y series.</p>
        </header>
    );
}

export default Head;