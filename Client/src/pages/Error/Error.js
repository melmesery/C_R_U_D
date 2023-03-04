import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <div>
        <p className="error-p">
          <span>404</span> <br /> Page Not Found
        </p>
        <Link to="/blog" className="error-link">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
