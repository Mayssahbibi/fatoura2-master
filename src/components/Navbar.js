import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir installé react-router-dom
import './Navbar.css'; // Importez vos styles personnalisés ici

const Navbar = ({ onSettingsClick }) => (
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <h1>TuniLiv</h1>
      </Link>

      {/* Boutons de navigation mobile */}
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      {/* Menu de navigation principal */}
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" className="active">Accueil</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">S'inscrire</Link></li>
          <li><Link className="get-a-quote" to="/connect">Se Connecter</Link></li>
        </ul>
      </nav>

      {/* Bouton Settings */}
      <button className="btn btn-secondary ml-3" onClick={onSettingsClick}>Settings</button>
    </div>
  </header>
);

export default Navbar;

