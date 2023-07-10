import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './componentes/Navbar';
import Pastelprincipal from './componentes/Pastelprincipal';
import 'bootstrap/dist/css/bootstrap.min.css';
import GallerySection from './componentes/GallerySection';
import TestimonialsSection from './componentes/TestimonialSection';
import ContactForm from './componentes/ContactForm';
import Footer from './componentes/Footer';
import Carrusel from './componentes/Carrusel';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Pastelprincipal/>
    <Carrusel/>
    <GallerySection/>
    <TestimonialsSection/>
    <ContactForm/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

