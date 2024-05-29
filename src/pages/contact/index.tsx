import { useTranslation } from 'react-i18next';
import './styles.css';
import { Link } from 'react-router-dom';

function Contact() {
  const { t: translate } = useTranslation();

  return (
    <div className="contact">
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 header-info">
              <h1>
                <span className="text-primary">{translate('contact')}</span>
              </h1>
            </div>
          </div>
        </div>

        <img
          src="images/header/positive-european-woman-has-break-after-work.jpg"
          className="header-image img-fluid"
          alt=""
        />
      </header>

      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <form className="contact-form me-lg-5 pe-lg-3" role="form">
                <div className="form-floating">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Full name"
                    required
                  />

                  <label htmlFor="name">{translate('full-name')}</label>
                </div>

                <div className="form-floating my-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />

                  <label htmlFor="email">{translate('email-address')}</label>
                </div>

                <div className="form-floating my-4">
                  <input
                    type="subject"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />

                  <label htmlFor="subject">{translate('subject')}</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Leave a comment here"
                    required
                    style={{ height: '160px' }}
                  ></textarea>

                  <label htmlFor="message">{translate('message')}</label>
                </div>

                <div className="col-lg-5 col-6">
                  <button type="submit" className="form-control">
                    {translate('send')}
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12 mt-5 ms-auto">
              <div className="row">
                <div className="col-6 border-end contact-info">
                  <h6 className="mb-3">{translate('email')}</h6>

                  <Link
                    to="mailto:hello@company.com"
                    className="custom-link"
                    style={{ textTransform: 'initial' }}
                  >
                    makbas@akteks.com.tr
                    <i className="bi-arrow-right ms-2"></i>
                  </Link>
                </div>

                <div className="col-6 contact-info">
                  <h6 className="mb-3">{translate('phone')}</h6>

                  <p className="custom-link" style={{ marginBottom: '5px' }}>
                    +90 532 2342655
                  </p>

                  <p className="custom-link">+90 212 5610874</p>
                </div>

                <div className="col-6 border-top border-end contact-info">
                  <h6 className="mb-3">{translate('address')}</h6>

                  <p className="text-muted">
                    Osmaniye Mah. Sugözü Sk. No 12 B:16 Bakırköy 34144 İstanbul
                    TURKEY
                  </p>
                </div>

                <div className="col-6 border-top contact-info">
                  <h6 className="mb-3">{translate('social-media')}</h6>

                  <ul className="social-icon">
                    <li>
                      <Link
                        to="#"
                        className="social-icon-link bi-messenger"
                      ></Link>
                    </li>

                    <li>
                      <Link
                        to="#"
                        className="social-icon-link bi-youtube"
                      ></Link>
                    </li>

                    <li>
                      <Link
                        to="#"
                        className="social-icon-link bi-instagram"
                      ></Link>
                    </li>

                    <li>
                      <Link
                        to="#"
                        className="social-icon-link bi-whatsapp"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
