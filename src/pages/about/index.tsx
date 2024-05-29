import { useTranslation } from 'react-i18next';
import './styles.css';

function About() {
  const { t: translate } = useTranslation();

  return (
    <>
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 header-info">
              <h1>
                <span className="d-block text-primary">Akteks</span>
                <span className="d-block text-dark">Tekstil</span>
              </h1>
              <p>{translate('about-explanation-1')}</p>
            </div>
          </div>
        </div>

        <img
          src="images/header/businesspeople-meeting-office-working.jpg"
          className="header-image img-fluid"
          alt=""
        />
      </header>
      <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto col-11">
              <h2 className="text-center">
                <span>{translate('mission-vision')}</span>
              </h2>
              <p>{translate('about-explanation-2')}</p>

              <p>{translate('about-explanation-3')}</p>

              <p>{translate('about-explanation-4')}</p>

              <p>{translate('about-explanation-5')}</p>

              <p>{translate('about-explanation-6')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
