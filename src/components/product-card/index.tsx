import { Link } from 'react-router-dom';
import './styles.css';

function ProductCard(props: { imageUrl: string }) {
  const { imageUrl } = props;
  return (
    <div className="product-thumb">
      <Link to="/products">
        <img
          src={`images/${imageUrl}`}
          className="img-fluid product-image"
          alt=""
        />
      </Link>
    </div>
  );
}

export default ProductCard;
