import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import "./styles/HeroSection.css";
import Modal from "./Modal";
import logo from "./images/logo.png";

function HeroSection() {
  const [estadoModalVideo, cambiarEstadoModalVideo] = useState(false);

  return (
    <section id="hero" className="hero-container d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 hero-img">
            <img src={logo} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <h1 className="texto-principal">
              Aprende de los mejores profesionales y llega más rápido a donde
              quieres
            </h1>
            <div>
              <div className="text-center text-white">
                <button
                  onClick={() => cambiarEstadoModalVideo(!estadoModalVideo)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  <i className="far fa-play-circle fa-4x"></i>
                </button>
                <Modal
                  estado={estadoModalVideo}
                  cambiarEstado={cambiarEstadoModalVideo}
                  mostrarOverlay={true}
                  padding={"0px"}
                >
                  <Contenido>
                    <div className="ratio ratio-1x1">
                      <iframe
                        src="https://www.youtube.com/watch?v=9ZXylkJ_UW4&list=RD9ZXylkJ_UW4&start_radio=1"
                        title="YouTube video"
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
