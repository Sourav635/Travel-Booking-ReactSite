import React from "react";
import { Helmet } from "react-helmet";
import Info from "./components/Info";
import Standard from "./components/Standard";
import Premium from "./components/Premium";
import Basic from "./components/Basic";
import Price from "./components/Price";
const Order = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>Shopping</title>
      <meta
        name="description"
        content="Murah banget aplikasi toko kasir ,aplikasi restoran cafe rumah makan online ini."
      />

      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <Price />
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Basic />
        </div>
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Premium />
        </div>
      </div>
      <div className="col-12 col-md-4 p-3">
        <div className="p-3 p-md-5 text-center">
          <Standard />
        </div>
      </div>
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className="p-3 p-md-5 border rounded text-center">
          <Info />
        </div>
      </div>
    </div>
  </div>
);

export default Order;
