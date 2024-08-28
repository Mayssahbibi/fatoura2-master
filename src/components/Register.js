// components/Register.js
import React, { useState } from 'react';
import '../styles/styles.css'; // Adjust the path according to your project structure

function Register() {
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('http://127.0.0.1/fatoura2/register.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === 'success') {
        alert('Registration successful!');
        window.location.href = '/login'; // Redirect to login page
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="page-title"><strong>Register</strong></div>
      <div className="col-lg-4 col-md-8 col-sm-12 col-12 my-3">
        <div className="card shadow w-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="userType">User Type:</label>
                <select
                  id="userType"
                  name="userType"
                  className="form-select"
                  required
                >
                  <option value="" disabled>-- Select User Type --</option>
                  <option value="Fournisseurs">Fournisseurs</option>
                  <option value="Agent">Agent</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3 w-100 d-flex justify-content-center">
                <button type="submit" className="btn btn-success rounded-pill">
                  <i className="fas fa-user-plus"></i> Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
