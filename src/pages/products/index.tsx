import ProductCard from '../../components/product-card';
import './styles.css';
import productData from '../../data/products.json';
import { useTranslation } from 'react-i18next';

function Products() {
  const { t: translate } = useTranslation();
  return (
    <>
      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="col-lg-10 col-12">
          <h1>
            <span className="d-block text-primary">
              {translate('our-products')}
            </span>
          </h1>
        </div>
      </header>
      <section className="featured-product section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-5">{translate('man')}</h2>
            </div>
            {productData.products
              .filter((item) => item.gender === 'man')
              .map((product) => {
                const { productName, imageFormat } = product;
                return (
                  <div className="col-lg-4 col-12 mb-3">
                    <ProductCard
                      imageUrl={`product/${productName}.${imageFormat}`}
                    ></ProductCard>
                  </div>
                );
              })}

            <div className="col-12">
              <h2 className="mb-5">{translate('woman')}</h2>
            </div>
            {productData.products
              .filter((item) => item.gender === 'woman')
              .map((product) => {
                const { productName, imageFormat } = product;
                return (
                  <div className="col-lg-4 col-12 mb-3">
                    <ProductCard
                      imageUrl={`product/${productName}.${imageFormat}`}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
