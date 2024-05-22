import { ChangeEvent } from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t: translate, i18n } = useTranslation();
  //const activeLocale = i18n.resolvedLanguage:
  const handleLanguageOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="index.html">
          <strong>
            <span>Akteks</span> Tekstil
          </strong>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active " href="index.html">
                {translate('home')}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="about.html">
                {translate('about')}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="products.html">
                {translate('products')}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="contact.html">
                {translate('contact')}
              </a>
            </li>
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
      </div>
    </nav>
  );
}

export default Navbar;
