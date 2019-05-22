import React from 'react';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">The Chef Connection</h1>
          <p className="lead">
            Create a profile, share posts and connect with other chefs.
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-success">
              Sign Up
            </a>
            <a href="login.html" className="btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
