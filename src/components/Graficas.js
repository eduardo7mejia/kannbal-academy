import React from "react";
import GraficaCircular from "./GraficaCircular";
import styled from "styled-components";

const Graficas = () => {
  return (
    <>
      <section class="section" id="graficas">
        <div className="container">
          <h2>¿Por qué es difícil conseguir</h2>
          <h1>un puesto en una organización?</h1>
          <Contenedor className="d-flex justify-content-between">
            {grafica.map(({ id, dataporcentaje, porcentaje, label }) => (
              <GraficaCircular
                key={id}
                dataporcentaje={dataporcentaje}
                porcentaje={porcentaje}
                label={label}
              />
            ))}
          </Contenedor>
        </div>
      </section>
    </>
  );
};

export default Graficas;

const grafica = [
  {
    id: 1,
    dataporcentaje: 80,
    porcentaje: "80%",
    label: " de los candidatos no cumplen el perfil al 100%",
  },
  {
    id: 2,
    dataporcentaje: 34,
    porcentaje: "34%",
    label: " carece de habilidades técnicas",
  },
  {
    id: 3,
    dataporcentaje: 22,
    porcentaje: "22%",
    label:
      " de aspirantes no cuenta con experiencia para aspirar a mejores posiciones",
  },
  {
    id: 4,
    dataporcentaje: 17,
    porcentaje: "17%",
    label: " de los candidatos carecen de habilidades profesionales",
  },
];

const Contenedor = styled.div`
  display: inline-block;
  margin: auto;
  text-align: center;
  align-items: center;
`;
