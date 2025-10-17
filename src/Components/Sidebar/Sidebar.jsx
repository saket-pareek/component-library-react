import { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar'>
      {/* Header */}
      <header className="header">
        <div className="header__brand">
          <h1 className="header__title">Sahand Ghavidel</h1>
        </div>
        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="header__hamburger"></span>
          <span className="header__hamburger"></span>
          <span className="header__hamburger"></span>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__overlay" onClick={toggleMenu}></div>
        <div className="mobile-nav__content">
          <div className="mobile-nav__header">
            <h2 className="mobile-nav__brand">Sahand Ghavidel</h2>
            <button
              className="mobile-nav__close"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <ul className="mobile-nav__menu">
            <li className="mobile-nav__item">
              <a href="#home" className="mobile-nav__link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="mobile-nav__item">
              <a href="#about" className="mobile-nav__link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="mobile-nav__item">
              <a href="#contact" className="mobile-nav__link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;