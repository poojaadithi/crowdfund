import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1 className="logo">Crowd<span>Fund</span></h1>
          <h2 className="hero-title">Empower Ideas, Fund Dreams</h2>
          <span role="img" aria-label="lightbulb" className="lightbulb">💡</span>
          <p className="hero-subtitle">Join a community that helps innovators bring ideas to life.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Projects</button>
            <button className="btn-outline">Start a Campaign</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;