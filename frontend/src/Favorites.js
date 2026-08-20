import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import ProductCard from "./ProductCard";

const Favorites = ({ favorites, setFavorites }) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const removeFavorite = async (id) => {
    const res = await fetch(
      `https://golfmullet-backend.onrender.com/api/users/${userId}/favorites/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const updatedFavorites = await res.json();
    setFavorites(updatedFavorites);
  };

  if (favorites.length === 0) {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">
            <AiOutlineHeart />
          </span>
          <h1>No favorites yet</h1>
          <p>
            Save the styles that catch your eye and they will be waiting for you here.
          </p>
          <Link className="button button--primary" to="/browse">
            Explore the collection
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Your shortlist</p>
        <h1>Favorites</h1>
        <p>All the pieces worth another look, together in one place.</p>
      </header>

      <div className="favorites-grid">
        {favorites.map((item) => (
          <ProductCard key={item._id} item={item}>
            <button
              className="favorite-remove"
              type="button"
              onClick={() => removeFavorite(item._id)}
            >
              Remove
            </button>
          </ProductCard>
        ))}
      </div>
    </main>
  );
};

export default Favorites;
