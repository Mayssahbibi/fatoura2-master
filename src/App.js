import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SettingsModal from './components/SettingsModal';
import AdminDashboard from './components/AdminDashboard';
import AdminFiles from './components/AdminFiles';
import Invoice from './components/Invoice_page'; 

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);


  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen);
  };

  return (
    <Router>
      {user && <Navbar onSettingsClick={toggleSettingsModal} />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register setUser={setUser} /> : <Navigate to="/" />} />

        {/* Protected Routes */}
        <Route path="/" element={user ? <Home user={user} settings={settings} /> : <Navigate to="/login" />} />
        <Route path="/admin/dashboard" element={user ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/files" element={user ? <AdminFiles /> : <Navigate to="/login" />} />
        <Route path="/invoice" element={user ? <Invoice /> : <Navigate to="/invoice" />} /> {/* Added Route for Invoices */}

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </Router>
  );
}

export default App;
