import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Lineas de carrera</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardUno.map(({id,src,text,label,path}) => (
              <CardItem
                key={id}
                src={src}
                text={text}
                label={label}
                path={path}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {cardDos.map(({id,src,text,label,path}) => (
              <CardItem
                key={id}
                src={src}
                text={text}
                label={label}
                path={path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const cardUno = [
  {
    id: 1,
    src: "images/img-9.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente siuuuuuuuuuuuuuuu",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 2,
    src: "images/img-9.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 3,
    src: "images/img-2.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
];
const cardDos = [
  {
    id: 1,
    src: "images/img-3.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 2,
    src: "images/img-4.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
  {
    id: 3,
    src: "images/img-8.jpg",
    text: "Explora nuevas formas para desenvolverte en tu ambiente laboral",
    label: "Ciencia",
    path: "/services",
  },
];

export default Cards;
