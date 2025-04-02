import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { href } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <>
        <Header />
        <div className="login-container">
            <h2 className="login-container-h2">Iniciar Sesión</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label className="label-input" htmlFor="email">Correo Electrónico</label>
                    <input className="login-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label-input" htmlFor="password">Contraseña</label>
                    <input className="login-input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                </div>
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
            <p className="register-text">
                ¿No tienes una cuenta? <a className="register-text-a" href="/register">Regístrate aquí</a>
            </p>
        </div>
        <Footer />
        </>
    );
}

export default Login;
