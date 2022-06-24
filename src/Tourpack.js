import React from "react";
import { Helmet } from "react-helmet";
import Start1 from "./components/Start1";
import Start2 from "./components/Start2";
import Start3 from "./components/Start3";

const Toko = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Travel Packages</title>
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row lead">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Start1 />
        <Start2 />
        <Start3 />
      </div>
    </div>
  </div>
);

export default Toko;
