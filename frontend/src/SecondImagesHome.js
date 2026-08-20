import { Link } from "react-router-dom";

const SecondImagesHome = () => {
  return (
    <section className="home-section home-section--paper">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your fairway fit</p>
            <h2>Made for every kind of round.</h2>
            <p>
              Sharp enough for the clubhouse, relaxed enough for the back
              nine.
            </p>
          </div>
          <Link className="text-link" to="/browse">
            Browse all styles
          </Link>
        </div>

        <div className="lifestyle-grid">
          <Link className="lifestyle-card" to="/browse">
            <img
              src="/images/womangolfing.webp"
              alt="Golfer finishing a swing at sunset"
              loading="lazy"
            />
            <div className="lifestyle-card__content">
              <span>The golden-hour round</span>
              <h3>Play well. Stay awhile.</h3>
            </div>
          </Link>

          <Link className="lifestyle-card" to="/browse">
            <img
              src="/images/mangolfing.jpg"
              alt="Golf ball lined up with the cup and golfer"
              loading="lazy"
            />
            <div className="lifestyle-card__content">
              <span>The focused round</span>
              <h3>Keep your eye on the good stuff.</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondImagesHome;
