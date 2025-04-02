import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainContent.css";
import Head from "../Head/Head";

function MainContent() {
    const navigate = useNavigate();
    const isAuthenticated = false; 

    const handleExploreClick = () => {
        if (isAuthenticated) {
            // Si el usuario está autenticado, redirige a la página de lista de películas
            navigate("/movies-list");
        } else {
            // Si no está autenticado, redirige al login
            navigate("/login");
        }
    };

    return (
        <main className="main-content">
            <Head />
            <section className="intro-section">
                <h3 className="intro-section-h3">Descubre un mundo de entretenimiento</h3>
                <p className="intro-section-p">
                    En EST-REAMING encontrarás una amplia selección de películas, series y documentales
                    para todos los gustos. Desde los últimos estrenos hasta los clásicos de siempre, 
                    tenemos algo especial para ti.
                </p>
                <button className="explore-button" onClick={handleExploreClick}>
                    Explorar
                </button>
            </section>
        </main>
    );
}

export default MainContent;