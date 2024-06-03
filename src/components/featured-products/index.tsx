import { Link } from 'react-router-dom';
import ProductCard from '../product-card';
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
    <section className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">{translate('featured-products')}</h2>
          </div>

          {featuredProducts.map((featuredProduct, index) => {
            const { productName, imageFormat } = featuredProduct;
            return (
              <div key={index} className="col-lg-4 col-12 mb-3">
                <ProductCard
                  imageUrl={`product/${productName}.${imageFormat}`}
                ></ProductCard>
              </div>
            );
          })}

          <div className="col-12 text-center">
            <Link to={`/products${translate('language')}`} className="view-all">
              {translate('view-all')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
