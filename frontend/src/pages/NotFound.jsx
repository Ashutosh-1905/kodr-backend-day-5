import React from "react";
import { Link } from "react-router";
import "../theme.css";
import "../App.css";
import "./NotFound.css";

// Minimal, accessible 404 page
const NotFound = () => {
  return (
    <main className="notfound-root" aria-labelledby="nfHeading">
      <div className="notfound-content">
        <p className="notfound-code" aria-hidden>
          404
        </p>
        <h1 id="nfHeading" className="notfound-title">
          Page not found
        </h1>
        <p className="notfound-text">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-ghost"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
