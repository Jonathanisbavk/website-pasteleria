import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import galeria_1 from './img/galeria_1.png';
import galeria_2 from './img/galeria_2.png';
import galeria_3 from './img/galeria_3.png';
import galeria_4 from './img/galeria_4.png';
import galeria_5 from './img/galeria_5.png';
import galeria_6 from './img/galeria_6.png';
import galeria_7 from './img/galeria_7.png';
import galeria_8 from './img/galeria_8.png';
import galeria_9 from './img/galeria_9.png';

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleGalleryItemClick = (e) => {
      if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src');
        setModalImage(src);
        setShowModal(true);
      }
    };

    document.addEventListener('click', handleGalleryItemClick);

    return () => {
      document.removeEventListener('click', handleGalleryItemClick);
    };
  }, []);

  return (
    <div >
      <section className="gallery min-vh-100" id='tematicas'>
        <div className="album py-5">
          <div className="title-container">
            <h1 className="gallery-title">Catálogo de diseños personalizados</h1>
            <p className="gallery-description">
              ¿Buscas un pastel único y personalizado en Arequipa? ¡En Duopie tenemos todo tipo de tortas personalizadas para cada ocasión!
            </p>
          </div>
          <div className="container-lg">
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div className="col">
                <img src={galeria_1} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_2} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_3} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_4} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_5} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_6} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_7} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_8} className="gallery-item" alt="gallery" />
              </div>
              <div className="col">
                <img src={galeria_9} className="gallery-item" alt="gallery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={modalImage} className="modal-img" alt="modal img" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GallerySection;
