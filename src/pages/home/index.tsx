import Carousel from '../../components/carousel';
import Navbar from '../../components/navbar';
import { useTranslation } from 'react-i18next';

import './styles.css';

function Home() {
  const { t: translate } = useTranslation();
  return (
    <div className="home">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">
                <span>{translate('get-to-know-1')}</span>{' '}
                {translate('get-to-know-2')}
              </h2>
            </div>

            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="images/textile-2.avif"
                        className="img-fluid"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">
                          <span>{translate('design')}</span> {translate('and')}
                          <span> {translate('manifactured')}</span>
                        </h4>

                        <p>{translate('banner-explanation')}</p>

                        <div className="mt-2 mt-lg-auto">
                          <a href="about.html" className="custom-link mb-2">
                            {translate('more-information')}
                            <i className="bi-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="front-product">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <img
                src="images/woman-selling-fabrics.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12">
              <div className="px-5 py-5 py-lg-0">
                <h2 className="mb-4">
                  <span>{translate('production')}</span> {translate('and')}{' '}
                  <span>{translate('sales')}</span>
                </h2>
                <p className="lead mb-4">{translate('sales-information')}</p>
                <a href="products.html" className="custom-link turkish">
                  {translate('examine-product')}
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
