// components/Login.js
import React, { useState } from 'react';
import '../styles/styles.css'; // Adjust the path according to your project structure

function Login() {
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('http://127.0.0.1/fatoura2/login.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 'success') {
        alert('Login successful!');
        window.location.href = '/invoice'; // Redirect to the main page
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="page-title"><strong>Login</strong></div>
      <div className="col-lg-4 col-md-8 col-sm-12 col-12 my-3">
        <div className="card shadow w-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3 w-100 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary rounded-pill">
                  <i className="fas fa-sign-in-alt"></i> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
