import './styles.css';
import { useTranslation } from 'react-i18next';

function FeaturedProducts() {
  const { t: translate } = useTranslation();

  const featuredProducts = [
    {
      productName: 'man-1',
      imageFormat: 'jpeg',
    },
    {
      productName: 'woman-2',
      imageFormat: 'jpg',
    },
    {
      productName: 'man-2',
      imageFormat: 'jpeg',
    },
  ];
  return (
    <div className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">{translate('featured-products')}</h2>
          </div>

          {featuredProducts.map((featuredProduct) => {
            const { productName, imageFormat } = featuredProduct;
            return (
              <div className="col-lg-4 col-12 mb-3">
                <div className="product-thumb">
                  <a href="products.html">
                    <img
                      src={`images/product/${productName}.${imageFormat}`}
                      className="img-fluid product-image"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}

          <div className="col-12 text-center">
            <a
              href={`products.html${translate('language')}`}
              className="view-all"
            >
              {translate('view-all')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
