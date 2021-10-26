import React, { useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import "./Cards.css";
import Modal from "./Modal";
import "../App.css";

function Cards() {
  const [estadoModalVideo, cambiarEstadoModalVideo] = useState(false);
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="color-blue">Lineas de </h2>
          <h1 className="color-blue">Carrera</h1>
          {cardUno.map(({ id, src, text, label, path }) => (
            <CardItem
              key={id}
              src={src}
              text={text}
              label={label}
              path={path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const cardUno = [
  {
    id: 1,
    src: "images/img-9.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 2,
    src: "images/img-1.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Historia",
    path: "/services",
  },
  {
    id: 3,
    src: "images/img-2.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 4,
    src: "images/img-3.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Humanidad",
    path: "/services",
  },
  {
    id: 5,
    src: "images/img-4.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 6,
    src: "images/img-8.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Reservaa",
    path: "/services",
  },
];

export default Cards;
const Contenido = styled.div`
  align-items: center;

  iframe {
    width: 100%;
    height: 500px;
    vertical-align: top;
    border-radius: 3px;
  }
`;
