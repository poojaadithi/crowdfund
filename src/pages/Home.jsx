

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="nav-row">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="logo-row">
        <h2 className="logo">Crowd<span>Fund</span></h2>
      </div>
      <div className="top-text">
        <h1 className="hero-title">Empower Ideas, Fund Dreams <span role="img" aria-label="lightbulb">💡</span></h1>
        <p className="hero-subtitle">Join a community that helps innovators bring ideas to life.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Projects</button>
          <button className="btn-outline">Start a Campaign</button>
        </div>
      </div>
      <div className="spacer"></div>
      <section className="hero">
      </section>
    </div>
  );
}