import React from "react";
import "./styles/Graficas.css";
const GraficaCircular = ({ id, porcentaje, label , dataporcentaje}) => {
  return (
    <>
      <div className="col-md-3 col-sm-6 m-0 py-4">
        <div class="progress" key={id} data-percentage={dataporcentaje}>
          <span class="progress-left">
            <span class="progress-bar wow"></span>
          </span>
          <span class="progress-right">
            <span class="progress-bar wow"></span>
          </span>
          <div class="progress-value">
            <p class="color-blue">{porcentaje}</p>
          </div>
        </div>
        <h5 className="text-center color-blue progress-texto py-2">
          <span className="color-blue">{porcentaje}</span>
          {label}
        </h5>
      </div>
    </>
  );
};

export default GraficaCircular;
