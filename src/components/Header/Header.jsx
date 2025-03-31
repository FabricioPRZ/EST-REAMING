import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../public/Logo-EST.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={logo} alt="EST-REAMING Logo" className="header-logo" />
        <h1 className="header-title">EST-REAMING</h1>
      </div>
      <nav>
        <Link to="/login" className="login-btn">
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}

export default Header;