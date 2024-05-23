import { useTranslation } from 'react-i18next';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Carousel() {
  const { t: translate } = useTranslation();
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
  };
  return (
    <section className="slick-slideshow">
      <Slider {...settings}>
        <div className="slick-custom">
          <img src="images/textile-7.jpeg" className="img-fluid" alt="" />

          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">{translate('who-we-are')}</h1>

                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    {translate('who-we-are-explanation')}
                  </p>

                  <a href="about.html" className="btn custom-btn">
                    {translate('about')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slick-custom">
          <img src="images/textile-6.jpeg" className="img-fluid" alt="" />

          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">{translate('production')}</h1>

                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    {translate('production-explanation')}
                  </p>

                  <a href="product.html" className="btn custom-btn">
                    {translate('examine-product')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Carousel;
