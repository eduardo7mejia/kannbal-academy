import React from "react";
import GraficaCircular from "./GraficaCircular";

const Graficas = () => {
  return (
    <>
      <section className="section" id="graficas">
        <div className="container">
          <div className="row">
            <h2 className="color-blue">¿Por qué es difícil conseguir</h2>
            <h1 className="color-blue">un puesto en una organización?</h1>
            {grafica.map(({ id, porcentaje, label, dataporcentaje }) => (
              <GraficaCircular
                key={id}
                dataporcentaje={dataporcentaje}
                porcentaje={porcentaje}
                label={label}
              />
            ))}
          </div>
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
