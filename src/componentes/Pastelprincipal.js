import React from 'react';
import pastel_principal from './img/pastel_principal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const handleWhatsAppClick = () => {
  window.open('https://wa.me/message/4MOY524MEV6BJ1', '_blank');
};

const Pastelprincipal = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5" id='inicio'>
      <div className="custom-row row flex-lg-row-reverse align-items-center g-5 py-5" style={{ marginTop: '50px' }}>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={pastel_principal} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">¡Pasteles personalizados para celebraciones únicas!</h1>
          <p className="lead">Sabemos que cada celebración es única y especial, por eso en Duopie creamos tortas personalizadas hechas a medida para ti. ¡Déjanos endulzar tus momentos más memorables!</p>
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 btn-escribenos" style={{ backgroundColor: "#FFAF60", borderColor: "#FFAF60" }} onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={['fab', 'whatsapp']} style={{ color: "#fffafd" }} /> Escribenos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pastelprincipal;
