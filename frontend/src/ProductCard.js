import { Link } from "react-router-dom";

const ProductCard = ({ item, children, className = "" }) => {
  return (
    <article className={`product-card ${className}`.trim()}>
      <Link className="product-card__link" to={`/item/${item.url}`}>
        <div className="product-card__media">
          <img src={item.img} alt={item.name} loading="lazy" />
        </div>
        <div className="product-card__info">
          <div>
            <h3 className="product-card__name">{item.name}</h3>
            <p className="product-card__price">{item.price}</p>
          </div>
          <span className="product-card__arrow" aria-hidden="true">
            →
          </span>
        </div>
      </Link>
      {children}
    </article>
  );
};

export default ProductCard;
