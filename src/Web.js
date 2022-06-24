import React from "react";
import { Helmet } from "react-helmet";
import Webcomponents1 from "./components/Webslug1";
import Variant from "./components/Variant";
import Laravel from "./components/AboutUs";

const Website = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>About Us</title>
      <meta content="index, follow" name="robots" />
    </Helmet>
    <Webcomponents1 />
    <Variant />
    <AboutUs />
  </div>
);

export default Website;
