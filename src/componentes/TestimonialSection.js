import React from 'react';
import Ana_1 from './img/Ana_1.png';
import Juan_2 from './img/Juan_2.png';
import Carla_3 from './img/Carla_3.png';


const TestimonialsSection = () => {
  const handleViewDetails = (event) => {
    event.preventDefault();
    // Agrega aquí el código para manejar el evento de clic en "View details"
  };

  return (
    <section className="testimonials-section" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">Testimonios de Clientes</h1>
          <h3 className="text-center">Testimonios de nuestras tortas personalizadas</h3>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img src={Ana_1} alt="Imagen 1" width="140" height="140" className="bd-placeholder-img rounded-circle" />
              <h2 className="fw-normal">Ana C.</h2>
              <p>"¡Increíble! Pedí una torta personalizada para el cumpleaños de mi esposo y superó todas mis expectativas. No solo era hermosa, sino que también estaba deliciosa. Definitivamente recomiendo DuoPie para cualquier evento especial".</p>
              <p className="ver-detalles-text">
                <button className="btn btn-secondary" onClick={handleViewDetails} style={{ backgroundColor: '#F7C80B', color: '#323233' }} >Ver comentario</button>
              </p>            </div>
            <div className="col-lg-4 text-center">
              <img src={Juan_2} alt="Imagen 2" width="140" height="140" className="bd-placeholder-img rounded-circle" />
              <h2 className="fw-normal">Juan P.</h2>
              <p>"La mejor torta que he probado en mucho tiempo. Pedí una torta personalizada para mi boda y no podría estar más feliz con el resultado. Los detalles eran perfectos y el sabor era increíble. ¡Gracias DuoPie por hacer que mi día sea aún más especial!"</p>
              <p className="ver-detalles-text">
                <button className="btn btn-secondary" onClick={handleViewDetails} style={{ backgroundColor: '#F7C80B', color: '#323233' }} >Ver comentario</button>
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <img src={Carla_3} alt="Imagen 3" width="140" height="140" className="bd-placeholder-img rounded-circle" />
              <h2 className="fw-normal">Carla M.</h2>
              <p>"Si buscas una torta personalizada de alta calidad, no busques más allá de DuoPie. Desde el primer contacto, su equipo fue extremadamente profesional y atento a mis necesidades. Y cuando probé la torta, ¡no pude creer lo buena que estaba! Definitivamente volveré a pedir más".</p>
              <p className="ver-detalles-text">
                <button className="btn btn-secondary" onClick={handleViewDetails} style={{ backgroundColor: '#F7C80B', color: '#323233' }} >Ver comentario</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

