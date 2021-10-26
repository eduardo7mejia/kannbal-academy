import React from "react";
import { backend_register } from "../../api";
import "../../App.css";
import useForm from "../useForm";
import axios from "axios";
import validate from "../validateSignup";
import "../Formulario.css";
const SignUp = () => {
  const registerUser = () => {
    console.log(values.email + " " + values.password + " " + values.password2);
    let userData = {
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      nickname: "",
      user_topic: "google.com",
      is_doctor: false,
      health_specialist: false,
      allowed_age: true,
    };
    axios({
      method: "post",
      url: backend_register,
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

  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <section className="formulario-container">
      <div className="container">
        <div className="row py-3">
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
              <h1 className="titulo-formulario">Registrate</h1>

              <div className="form-inputs form-group">
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  className="form-input form-control"
                  placeholder="Ingresa tu nombre"
                  value={values.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <p>{errors.first_name}</p>}
              </div>

              <div className="form-inputs">
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  className="form-control form-input"
                  placeholder="Ingresa tu apellido"
                  value={values.last_name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input form-group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control form-input"
                  placeholder="Ingresa tu correo electronico"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-inputs form-group">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control form-input"
                  placeholder="Ingresa tu contraseña"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-inputs form-group">
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  className="form-control form-input"
                  placeholder="Confirma Contraseña"
                  value={values.password2}
                  onChange={handleChange}
                />
              </div>
              <button
                class="btn btn-primary my-4  boton-login btn-block"
                type="submit"
              >
                Registrar
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
                <span className="form-input-login texto-login text-center">
                  ¿Aún no tienes una cuenta? Login <a href="#">Aquí</a>
                </span>
              </div>
            </form>
          </div>
          <div className="col-lg-8"></div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
