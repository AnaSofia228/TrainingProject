import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="sticky-header" className="dreamhub_nav_manu">
            <div className="logo">
              <a className="main_sticky" href="/" title="dreamhub">
                <h2>GYM<font color='#FFF000'>QU</font></h2>
              </a>
            </div>
            <nav className="dreamhub_menu">
              <ul className="nav_scroll">
                <li><a href="/">Inicio</a></li>
                <li><a href="about-us.html">Nosotros</a></li>
                <li className={isMenuOpen ? 'active' : ''}>
                  <a href="#" onClick={toggleMenu}>
                    Gimnasios <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className={`sub-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="about-us.html">Smart Power Gym</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="faq.html">faq</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                  </ul>
                </li>
                <li>
                  <a href="service.html">
                    Servicios <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><a href="service.html">Rutinas</a></li>
                    <li><a href="service-details.html">Tienda</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
              <div className="dreamhub-btn">
                <a href="team.html">Ingresar</a>
              </div>
    </div>
  );
}

export default Navbar;