import React from "react";
import { backend_register } from "../../api";
import "../../App.css";
import useForm from "../useForm";
import axios from "axios";
import validate from "../validateSignup";

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
    <div className="form-content-right">
      <div className="col-lg-12">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
            registerUser();
          }}
        >
          <h1 className="sign-up">Registratee</h1>

          <div className="form-inputs form-group">
            <label htmlFor="first_name" className="form-label">
              Nombre
            </label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              className="form-input form-control"
              placeholder="Nombre"
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && <p>{errors.first_name}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="last_name" className="form-label">
              Apellido
            </label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              className="form-control form-input"
              placeholder="Nombre"
              value={values.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control form-input"
              placeholder="Correo"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control form-input"
              placeholder="Contraseña"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirma Contraseña
            </label>
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

          <button className="form-input-btn btn btn-primary" type="submit">
            Registrar
          </button>
          <span className="form-input-login">
            ¿Aún no tienes una cuenta? Login <a href="#">Aquí</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
