import React from "react";
import { Helmet } from "react-helmet";
import Kepala from "./components/Kepala";
import Datas from "./components/Datas";
import Dashboard from "./components/Dashboard";
import Supplier from "./components/Supplier";
import Kategori from "./components/Category";
import Yuk from "./components/Yuk";

const Kasir = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Hey</title>

      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Kepala />
        <Dashboard />
        <Datas />
        <Supplier />
        <Kategori />
        <Yuk />
      </div>
    </div>
  </div>
);

export default Kasir;
