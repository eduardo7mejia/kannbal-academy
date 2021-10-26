import React from "react";
import { backend_login } from "../../api";
import "../../App.css";
import useForm from "../useForm";
import axios from "axios";
import styled from "styled-components";

const SignIn = () => {
  const registerUser = () => {
    console.log(values.email + " " + values.password + " " + values.password2);
    let userData = {
      email: values.email,
      password: values.password,
    };
    axios({
      method: "post",
      url: backend_login,
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const { handleChange, values, handleSubmit } = useForm();
  return (
    <section className="formulario-container">
      <Contenedor className="container">
        <div className="row ">
          <div className="col-lg-4 formulario">
            <form
              className="form"
              onSubmit={(e) => {
                handleSubmit(e);
                registerUser();
              }}
            >
              <img
                className="btn-logo img-fluid "
                src="./images/logo.png"
                alt=""
              />
              <h1 className="titulo-formulario">Inicia sesión</h1>
              <div className=" form-group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input form-control"
                  placeholder="Correo"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs form-group">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-input form-control"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="form-input-btn btn btn-primary my-2 boton-login btn-block"
                type="submit"
              >
                Comenzar
              </button>
              <div className="form-group">
                <h6 className="color-gray text-center texto-login">
                  o inicia sesión con Facebook
                </h6>
                <a
                  href="https://www.facebook.com/v2.2/dialog/oauth?client_id=1261305600688566&state=460675cceea7d73dd2c6550cca1c77db&response_type=code&sdk=php-sdk-5.6.2&redirect_uri=https%3A%2F%2Flocalhost%2FKannbal_Academy%2Ffb_login%2Ffb-callback.html&scope=email"
                  class="btn btn-primary btn-block text-facebook text-center d-flex"
                >
                  Acceder con Facebook
                </a>
              </div>
              <div class="form-group">
                <span className="form-input-login texto-login">
                  ¿Aún no tienes una cuenta? Resgistrate <a href="#">Aquí</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Contenedor>
    </section>
  );
};

export default SignIn;
const Contenedor = styled.div`
  padding: 3rem;
`;
