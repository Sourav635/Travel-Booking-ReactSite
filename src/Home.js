import React from "react";
import { Helmet } from "react-helmet";
import Intro from "./components/Intro";
import Maincard from "./components/Maincard";
import Hey from "./components/Welcome";
import logo from "./components/images/logo.png";
const Home = () => (
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="ex4TnhMimzJT8jbjjo3HU_r-qfQczMhdYfALH1gyM2s"
      />
      <title>TravelTastic</title>
      {/* <meta
        content="Mesin kasir online dengan laravel php artisan untuk kebutuhan aplikasi toko kasir shop store dan aplikasi restoran cafe rumah makan include website all in one."
        name=" description"
      /> */}
      <meta content="Complete Tour N Travel packages" property="og:title" />
      <link href={logo} rel="icon" type="image/x-icon" />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta content="Complete Tour N Travel packages" property="og:site_name" />
      <meta
        content="Complete Tour N Travel packages"
        property="facebook:description"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="https://twitter.com/hockeycomp"
        property="twitter:author"
      />
      <meta content="@hockeycomp" name="twitter:site" />
      <meta
        content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
        name="twitter:image"
      />
      <meta
        content="Mesin kasir online dengan laravel php artisan untuk kebutuhan aplikasi toko kasir shop store dan aplikasi restoran cafe rumah makan include website all in one."
        name="twitter:description"
      />
      <meta
        content="Aplikasi kasir , aplikasi toko grosir dan eceran retail - mesin kasir online lava apps"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <Hey />
    <Maincard />
    <Intro />
  </div>
);

export default Home;
