import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ScrollImagesHome = ({ clothes }) => {
  return (
    <section className="home-section home-section--paper">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Fresh off the fairway</p>
            <h2>Clubhouse favorites.</h2>
            <p>
              Reliable layers, easy color, and shoes ready to go the distance.
            </p>
          </div>
          <Link className="text-link" to="/browse">
            Shop all products
          </Link>
        </div>

        <div className="product-rail">
          {clothes.map((item) => (
            <ProductCard key={item._id || item.url} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollImagesHome;
