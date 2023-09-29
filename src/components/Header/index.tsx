import React from 'react';
import { Link } from 'react-router-dom';
// import './styles.scss';

const Header = (): JSX.Element => {
  return (
    <>
      <header id="layout-header">
        <nav className="navbar navbar-fixed">
          <div className="navbar-container">
            <a href="/">
              <img
                className="navbar-logo"
                src="https://www.sanpedrosula.hn/themes/msps/assets/images/logos/msps_logo.svg"
                alt="Logo Municipalidad de San Pedro Sula"
              />
            </a>
            <ul className="navbar-links">
              <li className="active">
                <a href="/" className="h6">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/teleturismo" className="h6">
                  TeleTurismo
                </a>
              </li>
              <li>
                <a href="/municipalidad" className="h6">
                  Municipalidad
                </a>
              </li>
              <li>
                <a href="/plan-maestro-desarrollo-municipal" className="h6">
                  PMDM
                </a>
              </li>
              <li>
                <a href="/gobierno-digital" className="h6">
                  Gobierno Digital
                </a>
              </li>
              <li>
                <a href="/transparencia" className="h6">
                  Transparencia
                </a>
              </li>
              <li>
                <a href="/noticias" className="h6">
                  Noticias
                </a>
              </li>
              <li>
                <a href="/contacto" className="h6">
                  Contáctanos
                </a>
              </li>
            </ul>

            <div className="navbar-bars">
              <a className="navbar-m-toggle navicon-button x">
                <div className="navicon"></div>
              </a>
            </div>
          </div>
        </nav>

        <div className="navbar-level"></div>
      </header>
    </>
  );
};

export default Header;
