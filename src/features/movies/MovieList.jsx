import React from "react";
import "./MovieList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MovieList() {
    // Simulación de datos de películas (puedes reemplazar esto con datos reales de una API)
    const movies = [
        { id: 1, title: "Película 1", image: "/movie1.jpg" },
        { id: 2, title: "Película 2", image: "/movie2.jpg" },
        { id: 3, title: "Película 3", image: "/movie3.jpg" },
        { id: 4, title: "Película 4", image: "/movie4.jpg" },
        { id: 5, title: "Película 5", image: "/movie5.jpg" },
        { id: 6, title: "Película 6", image: "/movie6.jpg" },
    ];

    return (
        <>
        <Header />
        <div className="movie-list-container">
            <h2 className="movie-list-title">Todas las Películas</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="movie-image"
                        />
                        <h3 className="movie-title">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default MovieList;