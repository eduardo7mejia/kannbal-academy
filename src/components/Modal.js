import React from "react";
import styled from "styled-components";

const Modal = ({ children, estado, cambiarEstado, mostrarOverlay, padding}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay}>
          <ContenedorModal padding={padding}>
            <BotonCerrar onClick={()=> cambiarEstado(false)}>
              <i className="fas fa-times"></i>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 130vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContenedorModal = styled.div`
  width: 700px;
  height: 500px;
  min-height: 100px;
  background: #ffffff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 110, 0.2) 0px 7px 29px 0px;
  padding: ${props => props.padding ? props.padding : '20px'};
  top: -4rem;
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 50px;
  color: #1766dc;

  &:hover {
    color: #df2424;
    background: #f4f4;
    transform: rotate(15deg);
  }
`;
