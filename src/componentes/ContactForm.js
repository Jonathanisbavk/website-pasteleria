import React, { useState } from 'react';

// Código para enviar el formulario
const ContactForm = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    // Configuracion de Formsubmit
    xhr.open('POST', 'https://formsubmit.co/a8c2740628a3362af16db882c6d004f0');
    xhr.setRequestHeader('Accept', 'application/json');
    
    // Manipula la respuesta de la solicitud
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // La solicitud fue exitosa
          console.log('¡Formulario enviado con éxito!');
          setIsFormSubmitted(true);
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de confirmación al usuario
        } else {
          // La solicitud no fue exitosa
          console.error('Error al enviar el formulario:', xhr.status);
        }
      }
    };
    xhr.send(formData);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-md-6">
          <h1>Arequipa</h1>
          <iframe
            title="Ubicación de Arequipa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15309.323763476217!2d-71.4811426!3d-16.4080104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b6ebe74806b%3A0x26997181359130bc!2sDuopie!5e0!3m2!1ses-419!2spe!4v1686088924019!5m2!1ses-419!2spe"
            width="546.01"
            height="409.22"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Columna derecha */}
        <div className="col-md-6">
          <h1>Ponerse en contacto</h1>
          <p>¿Tienes una consulta? Rellena el formulario para contactar con nuestro equipo</p>
          {isFormSubmitted && (
            <div className="alert alert-success" role="alert">
              ¡Formulario enviado con éxito!
            </div>
          )}
          <form className="row g-3 needs-validation" action="https://formsubmit.co/jonathan9579285@gmail.com" method="POST" noValidate onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" name='nombre' required />
              <div className="invalid-feedback">
                Por favor ingresa tu nombre.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" name='email' required />
              <div className="invalid-feedback">
                Por favor ingresa una dirección de correo electrónico válida.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows="4" name='mensaje' required></textarea>
              <div className="invalid-feedback">
                Por favor ingresa un mensaje.
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary bg-color" type="submit">Enviar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
