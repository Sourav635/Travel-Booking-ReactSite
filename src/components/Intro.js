import React from "react";
import { Link } from "react-router-dom";
const Intro = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Modern Solution</strong>
        </h3>
        <p>Door-2-Door Services</p>
        <p>
          Planning a trip. Sit back && Relax . We are new in this field but our
          experienced professionals make us expert in this field with their
          magnificent skill and core information about travel destinations.
          Online Tour Travel have tie-ups with some another travel agent across
          all over India and together we provide a good service to our
          customers. We have also good customer support for 24X7 for booking and
          enquiry. We have some special type packages with outstanding exemption
          for our valuable customers.
        </p>
        <Link to="/website" className="btn btn-light">
          About Us
        </Link>
      </div>
    </div>
  </div>
);

export default Intro;
