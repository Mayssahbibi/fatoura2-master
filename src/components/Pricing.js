import React from 'react';

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="container">
      <div className="section-header">
        <span>Tarification</span>
        <h2>Nos Tarifs</h2>
      </div>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-body">
              <h3>Standard</h3>
              <p>Idéal pour les envois classiques</p>
              <div className="price">100 TND</div>
              <ul>
                <li>Envoi en 24h</li>
                <li>Suivi en ligne</li>
                <li>Emballage standard</li>
              </ul>
              <a href="#" className="btn">Choisir</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <div className="card-body">
              <h3>Express</h3>
              <p>Pour une livraison rapide</p>
              <div className="price">200 TND</div>
              <ul>
                <li>Envoi en 12h</li>
                <li>Suivi en temps réel</li>
                <li>Emballage premium</li>
              </ul>
              <a href="#" className="btn">Choisir</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card">
            <div className="card-body">
              <h3>Premium</h3>
              <p>Service complet et rapide</p>
              <div className="price">300 TND</div>
              <ul>
                <li>Envoi en 6h</li>
                <li>Suivi en temps réel</li>
                <li>Emballage premium</li>
                <li>Assurance incluse</li>
              </ul>
              <a href="#" className="btn">Choisir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
