import React from "react";
import { Link } from "react-router-dom";

const Shortcut = () => (
  <div className="row">
    <div className="col-12 text-center bg-danger p-3">
      <h3 className="text-light">Menu apps</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/" className="text-danger">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/resto" className="text-danger">
              Resort
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/order" className="text-danger">
              Shopping
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/tourpack" className="text-danger">
              Travel Packages
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/contact" className="text-danger">
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </div>
    <div className="col-12 text-center border-top p-3">
      <small>
        copyrights &copy;{" "}
        <a href="#" className="text-danger">
          $our@v $oni
        </a>
        <br />
      </small>
    </div>
  </div>
);

export default Shortcut;
