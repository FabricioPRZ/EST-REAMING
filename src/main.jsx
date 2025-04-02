import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './features/auth/Login.jsx';
import Register from './features/auth/Register.jsx';
import MovieList from './features/movies/MovieList.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies-list" element={<MovieList />} />
      </Routes>
    </Router>
  </StrictMode>,
);
