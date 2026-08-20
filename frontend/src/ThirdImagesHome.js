import { Link } from "react-router-dom";

const ThirdImagesHome = () => {
  return (
    <section className="home-section" aria-labelledby="category-heading">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Course essentials</p>
            <h2 id="category-heading">Build your rotation.</h2>
            <p>
              Start with the pieces that make getting dressed the easiest part
              of the day.
            </p>
          </div>
        </div>

        <div className="category-grid">
          <Link className="category-card" to="/browse?filter=shorts">
            <img
              src="/images/homeimage1.webp"
              alt="Two golfers celebrating on the course"
              loading="lazy"
            />
            <div className="category-card__content">
              <span>Move freely</span>
              <h3>Shop shorts</h3>
            </div>
          </Link>

          <Link className="category-card" to="/browse?filter=polo">
            <img
              src="/images/homeimage2.webp"
              alt="Golfer taking a swing in a green polo"
              loading="lazy"
            />
            <div className="category-card__content">
              <span>The daily uniform</span>
              <h3>Shop polos</h3>
            </div>
          </Link>

          <Link className="category-card" to="/browse?filter=shoes">
            <img
              src="/images/homeimage3.avif"
              alt="Athletic golf footwear"
              loading="lazy"
            />
            <div className="category-card__content">
              <span>From the ground up</span>
              <h3>Shop shoes</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThirdImagesHome;
