import './styles.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t: translate } = useTranslation();
  return (
    <div className="footer">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-10 me-auto mb-4">
              <h4 className="text-white mb-3">
                <a href="index.html">Akteks</a> Tekstil
              </h4>
              <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
                Copyright © 2023 <strong>Akteks Tekstil</strong>
              </p>
              <br />
            </div>

            <div className="col-lg-5 col-8">
              <h5 className="text-white mb-3">{translate('site-map')}</h5>

              <ul className="footer-menu d-flex flex-wrap">
                <li className="footer-menu-item">
                  <a
                    href={`about.html#${translate('language')}`}
                    className="footer-menu-link"
                  >
                    {translate('about')}
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a
                    href={`products.html#${translate('language')}`}
                    className="footer-menu-link"
                  >
                    {translate('products')}
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a
                    href={`contact.html#${translate('language')}`}
                    className="footer-menu-link"
                  >
                    {translate('contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-4">
              <h5 className="text-white mb-3">{translate('social-media')}</h5>

              <ul className="social-icon">
                <li>
                  <a
                    href="https://www.youtube.com/"
                    className="social-icon-link bi-youtube"
                  ></a>
                </li>

                <li>
                  <a
                    href="https://www.whatsapp.com/"
                    className="social-icon-link bi-whatsapp"
                  ></a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="social-icon-link bi-instagram"
                  ></a>
                </li>

                <li>
                  <a
                    href="https://www.skype.com/"
                    className="social-icon-link bi-skype"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
