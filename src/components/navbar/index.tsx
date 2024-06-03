import { ChangeEvent, useEffect, useState } from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';
import { Link, useLocation } from 'react-router-dom';
import Headroom from 'headroom.js';

function Navbar() {
  const { t: translate, i18n } = useTranslation();
  const location = useLocation();
  const handleLanguageOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState<string | undefined>();

  const onNavbarToggle = () => {
    setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen);
  };

  useEffect(() => {
    const myElement: any = document.querySelector('.navbar');
    const headroom = new Headroom(myElement);
    headroom.init();
  }, []);

  const tabs = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'about',
      link: '/about',
    },
    {
      name: 'products',
      link: '/products',
    },
    {
      name: 'contact',
      link: '/contact',
    },
  ];

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location]);

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <button
          className={`navbar-toggler ${!isNavbarOpen ? 'collapsed' : ''}`}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={isNavbarOpen}
          aria-label='Toggle navigation'
          onClick={onNavbarToggle}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <Link className='navbar-brand' to='/'>
          <strong>
            <span>Akteks</span> Tekstil
          </strong>
        </Link>
        <Collapse in={isNavbarOpen}>
          <div className={`navbar-collapse`} id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
              {tabs.map((tabItem) => {
                const { name, link } = tabItem;
                return (
                  <li className='nav-item'>
                    <Link
                      className={`nav-link ${
                        activeUrl === link ? 'active' : ''
                      }`}
                      to={link}
                      onClick={onNavbarToggle}
                    >
                      {translate(name)}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='language-container'>
              <select
                name='languages'
                id='languages'
                onChange={handleLanguageOnChange}
              >
                <option value='tr'>Türkçe</option>
                <option value='en'>English</option>
                <option value='de'>Deutsch</option>
                <option value='es'>Español</option>
                <option value='ru'>Русский</option>
                <option value='ar'>العربية</option>
              </select>
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  );
}

export default Navbar;
