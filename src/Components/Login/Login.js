import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [alertClass, addAlertClass] = useState('hide');

  return (
    <main className="login-container">
      <section className="login-content">
        <h1 className="login-header login-txt">Beer Buddy</h1>
        <p className="app-tagline login-txt">
          The best application for beer and food pairing.
        </p>
        <p className="app-tagline-cont login-txt">Period.</p>
        <p className="login-txt login-age-check">Over 21+</p>
        <div>
          <Link to="/questionnaire">
            <button className="login-txt login-btn yes-btn">Yes</button>
          </Link>
          <button
            className="login-txt login-btn no-btn"
            onClick={() => addAlertClass(null)}
          >
            No
          </button>
        </div>
        <div className={alertClass}>
          <h3 className="age-alert">Come back and see us when you're 21!</h3>
        </div>
      </section>
    </main>
  );
};

export default Login;
