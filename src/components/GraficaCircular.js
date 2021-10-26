import React from "react";
import styled from "styled-components";
import "./Graficas.css";
const GraficaCircular = ({ id, dataporcentaje, porcentaje, label }) => {
  return (
    <>
      <div class="row align-items-center">
        <div className="col-lg-12 col-md-3">
          <div className="progress" data-percentage={dataporcentaje} key={id}>
            <span className="progress-left">
              <span className="progress-bar wow"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar wow"></span>
            </span>
            <div className="progress-value">
              <div className="color-blue">{porcentaje}</div>
            </div>
          </div>
          <h5 className="text-center color-blue progress-texto">
            <span class="color-blue">{porcentaje}</span>
            {label}
          </h5>
        </div>
      </div>
    </>
  );
};

export default GraficaCircular;

const Contenedor = styled.div``;
