import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Hey = () => (
  <div className="row">
    <div className="row">
      <div className="col-12 col-md-12 p-3 text-center">
        <img
          className="img-fluid"
          alt="laravel point of sale"
          width="300"
          src={logo}
        />
        <div className="rounded p-3 p-md-5">
          {/* <h1 className="display-2">
            <strong>
              <a href="/" className="text-danger">
                Tour N Travels
              </a>
            </strong>
          </h1> */}
          <h3>All things In One Place</h3>
          <p>
            TravelTastic has been always knowns for providing their customers a
            new experience of hassle-free tours and sophisticated arrangement.
            We always cared our customers affection and for this we are doing
            distinct activities such as hotel room booking in best hotels of the
            destination, pick and drop facility from anywhere of cities and
            sight-seeing and excursion for beautiful locations and so on
          </p>
          <Link
            to="/tourpack"
            className="btn btn-primary border border-white ml-3"
          >
            Travel Packages
          </Link>
          <Link
            to="/resto"
            className="btn btn-primary border border-white ml-3"
          >
            Resort Booking
          </Link>
          <Link
            to="/order"
            className="btn btn-primary border border-white ml-3"
          >
            Shopping
          </Link>
        </div>
      </div>
    </div>
    <div className="row ml-5">
      <div className="col-12 col-md-12 text-center ml-5">
        <img
          className="img-fluid ml-5"
          width="700"
          alt="laravel point of sale"
          src={logo}
        />
      </div>
    </div>
  </div>
);

export default Hey;
