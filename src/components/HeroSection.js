import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import "./HeroSection.css";
import Modal from "./Modal";

function HeroSection() {
  const [estadoModalVideo, cambiarEstadoModalVideo] = useState(false);

  return (
    <section id="hero" className="hero-container d-flex align-items-center">
      {/* <img src="images/hero-mitad.jpg" alt="" /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 hero-img">
            <img src="images/logo.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center">
            <h1 className="texto-principal">
              Aprende de los mejores profesionales y llega más rápido a donde
              quieres
            </h1>
            <div>
              <div className="text-center text-white">
                {/* <button className="btn btn-outline-secondary">
                <i className="far fa-play-circle fa-3x"></i>
                </button> */}
                <button
                  onClick={() => cambiarEstadoModalVideo(!estadoModalVideo)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  <i className="far fa-play-circle fa-4x fa-spin"></i>
                </button>
                <Modal
                  estado={estadoModalVideo}
                  cambiarEstado={cambiarEstadoModalVideo}
                  mostrarOverlay={true}
                  padding={"0px"}
                >
                  <Contenido>
                    <div className="embed-responsive embed-responsive-1by1">
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Contenido>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;

const Contenido = styled.div`
  align-items: center;

  iframe {
    width: 100%;
    height: 500px;
    vertical-align: top;
    border-radius: 3px;
  }
`;
