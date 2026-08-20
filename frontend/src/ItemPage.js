import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiCheck, FiShoppingBag } from "react-icons/fi";

const ItemPage = ({ clothes, setCart, setFavorites, favorites }) => {
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const item = clothes.find((c) => c.url === id);
  const itemId = item?._id;
  const [isFavorited, setIsFavorited] = useState();
  const token = localStorage.getItem("token");
  const [selectedSize, setSelectedSize] = useState("M");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (!favorites || !itemId) {
      setIsFavorited(false);
      return;
    }
    setIsFavorited(favorites.some((fav) => fav._id === itemId));
  }, [favorites, itemId]);

  const addToCart = async () => {
    if (!userId) return alert("Please sign in first");

    try {
      const res = await fetch(
        "https://golfmullet-backend.onrender.com/api/users/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId,
            product: item,
            size: selectedSize,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to add to cart");

      const updatedCart = await res.json();
      setCart(updatedCart);
      setNotification("This item has been added to cart");
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("Error adding to cart");
    }
  };

  const toggleFavorite = async () => {
    if (!userId) return alert("Please sign in first");

    try {
      const res = await fetch(
        "https://golfmullet-backend.onrender.com/api/users/favorites",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId,
            product: item,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update favorites");

      const updatedFavorites = await res.json();
      setFavorites(updatedFavorites);
      setIsFavorited((prev) => !prev);
    } catch (err) {
      console.error("Favorite failed:", err);
      alert("Error updating favorites");
    }
  };

  if (!item) {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <h1>Item not found</h1>
          <p>This style may have moved. Browse the current collection to find your next fit.</p>
          <Link className="button button--primary" to="/browse">
            Browse collection
          </Link>
        </section>
      </main>
    );
  }

  return (
    <>
      {notification && (
        <div className="item-toast" role="status">
          <FiCheck aria-hidden="true" />
          {notification}
        </div>
      )}

      <main className="page-shell item-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/browse">Shop</Link> / {item.name}
        </nav>

        <div className="item-layout">
          <div className="item-media">
            <img src={item.img} alt={item.name} />
          </div>

          <section className="item-details">
            <p className="eyebrow">Course to clubhouse</p>
            <h1>{item.name}</h1>
            <p className="item-price">{item.price}</p>
            <p className="item-copy">
              An easy-wearing staple selected for clean lines, comfortable rounds,
              and a sharp finish beyond the course.
            </p>

            <div className="size-header">
              <span>Select size</span>
              <span>{selectedSize}</span>
            </div>
            <div className="size-options" aria-label="Select a size">
              {["S", "M", "L"].map((size) => (
                <button
                  className={`size-button ${
                    selectedSize === size ? "is-selected" : ""
                  }`}
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="item-actions">
              <button
                className="button button--primary button--wide"
                type="button"
                onClick={addToCart}
              >
                <FiShoppingBag aria-hidden="true" /> Add to cart
              </button>
              <button
                className="button button--secondary button--wide"
                type="button"
                onClick={toggleFavorite}
                aria-pressed={Boolean(isFavorited)}
              >
                <AiOutlineHeart aria-hidden="true" />
                {isFavorited ? "Remove from favorites" : "Add to favorites"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ItemPage;
