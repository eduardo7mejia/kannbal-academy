import React from "react";
import logo from "./images/soft_finito.gif";
const ComoFunciona = () => {
  return (
    <section className="" id="infografia">
      <div className="container">
        <h1 className="text-center color-blue">
          COMO FUNCIONA KANNBAL ACADEMY
        </h1>
        <div className="row align-items-center">
          <div className="col-12">
            <img
              src={logo}
              alt="loading..."
              className="img-fluid d-block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
