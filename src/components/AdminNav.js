// components/AdminNav.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/files">Gestion des Fichiers</Link></li>
        {/* Ajoutez plus de liens ici */}
      </ul>
    </nav>
  );
};

export default AdminNav;
