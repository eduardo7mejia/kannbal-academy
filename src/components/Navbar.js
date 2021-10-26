import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const opcionesMenu = [
  {
    id: 1,
    to: "/",
    text: "Inicio",
  },
  {
    id: 2,
    to: "/careers",
    text: "Línea de carrera",
  },
  {
    id: 3,
    to: "/sign-up",
    text: "Registro",
  },
  {
    id: 4,
    to: "/sign-in",
    text: "Entrar",
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="btn-logo" src="./images/logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {opcionesMenu.map(({ id, to, text }) => (
              <li className="nav-item">
                <Link
                  key={id}
                  to={to}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
