import React from 'react';

const FeaturedServices = () => (
  <section id="featured-services" className="featured-services">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
          <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
          <div>
            <h4 className="title">Stockage</h4>
            <p className="description">Nos dépôts de Stockage sont à votre disposition pour tous vos opérations</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
          <div>
            <h4 className="title">Livraison 24 / 24</h4>
            <p className="description">Votre colis livré dans toute la Tunisie en 24 H<br />Nos agences sont ouvertes 24/24 - 7/7</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
          <div>
            <h4 className="title">Emballage</h4>
            <p className="description">Votre produit est emballé dans nos dépôts et livré par nous !</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedServices;
