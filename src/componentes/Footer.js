import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import libro_reclamaciones from './img/libro_reclamaciones.png';
import logotipo from './img/logo.png';
import mastercard from './img/mastercad.png';
import visa from './img/visa.png';
import paypal from './img/paypal.png';



const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ background: '#F59332' }}>
      <div className="container text-center">
        <footer className="py-5">
          <div className="row justify-content-between">
            <div className="col-6 col-md-2 mb-3">
              <div className="inicio-footer" style={{ marginTop: "20px", marginBottom: "20px" }}> 
                <a href="#logo">
                  <img src={logotipo} alt="Imagen 1" width="183" height="91.99" className="bd-placeholder-img img-separation" style={{margin: '0 20 20 0'}}/>
                </a>
                <img src={libro_reclamaciones} alt="Imagen 2" width="183" height="91.99" className="bd-placeholder-img img-separation"  />
              </div>
              <h5 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '14px'}}>© 2023 Duopie. Todos los Derechos Reservados.</h5>
            </div>
            <div className="col-6 col-md-2 mb-3">
              
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <button className="nav-link p-0 text-body-secondary custom-link" style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '14px' }}>Links de interes</button>
                </li>
                <li className="nav-item mb-2">
                  <button className="nav-link p-0 text-body-secondary custom-link">Terminos y Condiciones</button>
                </li>
                <li className="nav-item mb-2">
                  <button className="nav-link p-0 text-body-secondary custom-link">Servicio al Cliente</button>
                </li>
                <li className="nav-item mb-2">
                  <button className="nav-link p-0 text-body-secondary custom-link">Libro de Reclamaciones</button>
                </li>
                <li className="nav-item mb-2">
                  <button className="nav-link p-0 text-body-secondary custom-link">Trabaja con Nosotros</button>
                </li>
              </ul>

            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '14px' }}>Metodos de pago</h5>
              <div className="payment-icons" >
                <img src={visa} alt="visa" style={{ width: "60px", height: "60px" }} />
                <img src={mastercard} alt="mastercard" style={{ width: "", height: "" }} />
                <img src={paypal} alt="paypal" style={{ width: "", height: "" }} />
              </div>
            
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '14px'}}>Redes Sociales</h5>
              <div className="social-icons"> 
                <a href="https://www.facebook.com/duopie/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", marginRight: "20px", fontSize: "45px" }} />
                </a>
                <a href="https://www.instagram.com/pasteleria_sanantonio/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", marginRight: "20px", fontSize: "45px" }} />
                </a>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
