import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Golf Mullet home">
            <img
              className="brand__mark"
              src="/images/golfmullet-icon.jpg"
              alt=""
            />
            <span className="brand__name" aria-hidden="true">
              <span>Golf</span>
              <span>Mullet</span>
            </span>
          </Link>
          <p>
            Course-ready style with a little less ceremony. Made for the round
            and everything after it.
          </p>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <Link to="/browse">All styles</Link>
          <Link to="/browse?filter=polo">Polos</Link>
          <Link to="/browse?filter=shorts">Shorts</Link>
          <Link to="/browse?filter=shoes">Shoes</Link>
        </div>

        <div className="footer-column">
          <h3>Your bag</h3>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/account">Account</Link>
          <Link to="/signin">Sign in</Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/browse?filter=men">Men</Link>
          <Link to="/browse?filter=women">Women</Link>
          <Link to="/browse?filter=new">New arrivals</Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {today.getFullYear()} Golf Mullet, Inc.</p>
        <p>For the course. For after.</p>
      </div>
    </footer>
  );
};

export default Footer;
