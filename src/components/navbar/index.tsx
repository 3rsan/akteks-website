import { ChangeEvent, useState } from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';
import Collapse from 'react-bootstrap/Collapse';

function Navbar() {
  const { t: translate, i18n } = useTranslation();
  //const activeLocale = i18n.resolvedLanguage:
  const handleLanguageOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const onNavbarToggle = () => {
    setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen);
  };

  const onTabClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    const updatedTabs = tabs.map((tab, i) => {
      const isActive = i === index;

      return { ...tab, isActive };
    });
    setTabs(updatedTabs);
  };

  const initialTabs = [
    {
      name: 'home',
      isActive: true,
      link: 'index.html',
    },
    {
      name: 'about',
      isActive: false,
      link: 'about.html',
    },
    {
      name: 'products',
      isActive: false,
      link: 'products.html',
    },
    {
      name: 'contact',
      isActive: false,
      link: 'contact.html',
    },
  ];

  const [tabs, setTabs] = useState(initialTabs);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className={`navbar-toggler ${!isNavbarOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
          onClick={onNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="index.html">
          <strong>
            <span>Akteks</span> Tekstil
          </strong>
        </a>
        <Collapse in={isNavbarOpen}>
          <div
            className={`navbar-collapse collapse ${isNavbarOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              {tabs.map((tabItem, index) => {
                const { name, isActive, link } = tabItem;
                return (
                  <li
                    className="nav-item"
                    onClick={(e) => onTabClick(e, index)}
                  >
                    <a
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      href={link}
                    >
                      {translate(name)}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="language-container">
              <select
                name="languages"
                id="languages"
                onChange={handleLanguageOnChange}
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="ru">Русский</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  );
}

export default Navbar;
