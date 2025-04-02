import React, { useState } from "react";
import "./Register.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de registro
        console.log("Nombre:", name, "Email:", email, "Password:", password, "Confirm Password:", confirmPassword);
    };

    return (
        <>
        <Header />
        <div className="register-container">
            <h2 className="register-container-h2">Regístrate</h2>
            <form className="register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label className="label-input" htmlFor="name">Nombre Completo</label>
                    <input className="register-input"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingresa tu nombre completo"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label-input" htmlFor="email">Correo Electrónico</label>
                    <input className="register-input"
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
                    <input className="register-input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Crea una contraseña"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label-input" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input className="register-input"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirma tu contraseña"
                        required
                    />
                </div>
                <button type="submit" className="register-button">Registrarse</button>
            </form>
            <p className="login-text">
                ¿Ya tienes una cuenta? <a className="login-text-a" href="/login">Inicia sesión aquí</a>
            </p>
        </div>
        <Footer />
        </>
    );
}

export default Register;