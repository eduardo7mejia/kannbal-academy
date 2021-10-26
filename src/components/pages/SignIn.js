import React from "react";
import { backend_login } from "../../api";
import "../../App.css";
import useForm from "../useForm";
import axios from "axios";

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
    <div className="form-content-right">
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
          registerUser();
        }}
      >
        <h1 className="sign-in">Inicia sesión</h1>

        <div className="form-inputs form-group">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
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
            className="form-input"
            placeholder="Contraseña"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button className="form-input-btn" type="submit">
          Comenzar
        </button>
        <span className="form-input-login">
          ¿Aún no tienes una cuenta? Resgistrate <a href="#">Aquí</a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
