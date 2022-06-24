import React from "react";
import { Link } from "react-router-dom";
const Maincard = () => (
  <div className="row">
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Tour Packages</strong>
        </h3>
        <p>Get a catologue to choose your dream destination</p>
        <p>
          India, a land of glorious past and an extraordinary future. The air of
          India will swing you in each way and make you a part of its soil, in
          some way or the other.
        </p>
        <Link to="/toko" className="btn btn-light">
          Click Here
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Book Resort</strong>
        </h3>
        <p>Worrying about your stay.. Let us help</p>
        <p>
          A true reflection of modern influences, contemporary hospitality which
          offers luxurious opulence of tastefully appointed rooms and suites for
          your indulgence.
        </p>
        <Link to="/resto" className="btn btn-light">
          CLick Here
        </Link>
      </div>
    </div>
  </div>
);

export default Maincard;
