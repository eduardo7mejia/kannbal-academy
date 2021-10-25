import React from "react";
import logo from "./images/soft_finito.gif";
const ComoFunciona = () => {
  return (
    <section classname="" id="infografia">
      <div classname="container">
        <h1 classname="font-weight-bold text-center color-white">
          COMO FUNCIONA KANNBAL ACADEMY
        </h1>
        <div classname="row align-items-center">
          <div classname="col-12">
            <img
              src={logo}
              alt="loading..."
              class="img-fluid d-block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
