import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="footer-info">
            <h3>TuniLiv</h3>
            <p>1234 Rue de Tunis, Tunis, Tunisie</p>
            <p>+216 12345678</p>
            <p>contact@tuniLiv.tn</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 footer-links">
          <h4>Liens Utiles</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Tarifs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="footer-newsletter">
            <h4>Notre Newsletter</h4>
            <form>
              <input type="email" placeholder="Votre email" required />
              <button type="submit">S'abonner</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        &copy; 2024 TuniLiv. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
