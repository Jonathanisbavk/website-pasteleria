import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../index.css';
import imagendelogo from './img/logo.png';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from 'react-bootstrap';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Nav() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/4MOY524MEV6BJ1', '_blank');
  };

  return (
    <div className="navegacion--" style={{ backgroundColor: "#C77729" }}>
      <Router>
        <Navbar expand="lg" fixed="top" className="navbar-dark">
          <div className="container">
            <div className="social-icons">
              <a href="https://www.facebook.com/duopie/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", marginRight: "20px", fontSize: "45px" }} />
              </a>
              <a href="https://www.instagram.com/pasteleria_sanantonio/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", marginRight: "20px", fontSize: "45px" }} />
              </a>
            </div>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav" className="justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#inicio" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                  <a href="#nosotros" className="nav-link">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a href="#inicio" className="nav-link">
                    <img src={imagendelogo} alt="logo" width="183" height="91.99" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tematicas" className="nav-link">Temáticas</a>
                </li>
                <li className="nav-item">
                  <a href="#soporte" className="nav-link">Soporte</a>
                </li>
              </ul>
            </Navbar.Collapse>
            <div className="text-end btn-container">
              <button type="button" className="btn btn-primary" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faTruck} style={{ color: "#fffafd" }} /> Programa tu pedido
              </button>
            </div>
          </div>
        </Navbar>
      </Router>
    </div>
  );
}

export default Nav;
