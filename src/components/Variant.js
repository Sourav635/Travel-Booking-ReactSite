import React from "react";
import logo from "./images/logo.png";
const Variant = () => (
  <div className="row">
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 bg-light border border-white">
        <h3 className="text-danger">About Tour Pacakges</h3>
        <img
          className="img-fluid"
          alt="Package Image"
          src="https://a.fsdn.com/con/app/proj/symfonycms/screenshots/Screenshot_2020-08-22%20Symfony%20Bootstrap%20By%20mesinkasironline%20web%20app%286%29.png/max/max/1"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          est iusto cum tenetur alias facilis provident libero praesentium!
          Officia consequuntur debitis placeat illo eos laudantium dolorem qui
          ut et eveniet.
        </p>
      </div>
    </div>
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 bg-light border border-white">
        <h3 className="text-danger">TravelTastic Website</h3>
        <img className="img-fluid" alt="Package Image" src={logo} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          blanditiis natus quam iste. Explicabo rem, nemo optio possimus
          voluptates enim? Quos laudantium ullam quidem nemo nisi repellendus
          itaque deleniti eum.
        </p>
      </div>
    </div>
    <div className="col-12 col-md-4 p-3">
      <div className="p-3 bg-light border border-white">
        <h3 className="text-danger">About Our Mall</h3>
        <img
          className="img-fluid"
          alt="Mall Image"
          src="https://a.fsdn.com/con/app/proj/modernwebsitecms/screenshots/new%20modernSEO%20%20cms%20get%20axcora%20%20%283%29%20-%20Copy.jpg/max/max/1"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          excepturi. Laboriosam dolorem, eveniet voluptate dicta magnam esse
          odit incidunt minima modi, fuga totam libero nostrum corrupti pariatur
          quibusdam commodi tenetur!
        </p>
      </div>
    </div>
  </div>
);

export default Variant;
