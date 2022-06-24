import React from "react";
import { Link } from "react-router-dom";

const Info = () => (
  <div>
    <h3>Contact Us</h3>
    <p>
      Our E-commerce Website is in development. So above items have been linked
      to Flipkart
    </p>
    <Link to="/contact" className="btn btn-danger">
      Contact Us
    </Link>
  </div>
);

export default Info;
