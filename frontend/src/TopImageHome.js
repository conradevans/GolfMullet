import { Link } from "react-router-dom";

const TopImageHome = () => {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <Link
        className="hero__media-link"
        to="/browse"
        aria-label="Shop all Golf Mullet styles"
      >
        <img
          className="hero__image"
          src="/images/golf-hero.jpg"
          alt="Golf ball resting beside the flag on a green"
        />
      </Link>

      <div className="hero__content">
        <p className="hero__eyebrow">Golf style, loosened up</p>
        <h1 id="home-hero-title">Ready for the round. Built for after.</h1>
        <p className="hero__copy">
          Easygoing course essentials for early tee times, long afternoons,
          and whatever comes next.
        </p>
        <Link className="button button--light" to="/browse">
          Shop the collection
        </Link>
        <p className="hero__note">The summer edit</p>
      </div>
    </section>
  );
};

export default TopImageHome;
