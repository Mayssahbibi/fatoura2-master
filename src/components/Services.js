import React from 'react';

const Services = () => (
  <section id="service" className="services pt-0">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <span>Nos Services</span>
        <h2>Nos Services</h2>
      </div>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/storage-service.jpg" alt="" className="img-fluid" />
            </div>
            <h3>Stockage</h3>
            <p>Tous vos colis sont stockés à nos dépôts</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/trucking-service.jpg" alt="" className="img-fluid" />
            </div>
            <h3>Livraison</h3>
            <p>Livraison sur toute la Tunisie en 24 Heures</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="card">
          <div className="card-img">
              <img src="assets/img/packing-service.jpg" alt="" className="img-fluid" />
            </div>
            <h3>Emballage</h3>
            <p>Emballage professionnel pour vos colis</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;