import React from "react";
import { Helmet } from "react-helmet";
import Restinfo from "./components/Restinfo";
import Product from "./components/Product";
import Sale from "./components/Sale";
import Retur from "./components/Retur";
import Yok from "./components/Yok";
import Laporan from "./components/Laporan";

const Cafe = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Restaurant</title>
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Product />
        <Restinfo />
        <Sale />
        <Retur />
        <Laporan />
        <Yok />
      </div>
    </div>
  </div>
);

export default Cafe;
