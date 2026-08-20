import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemPage = ({ clothes, setCart, setFavorites, favorites }) => {
  const { id } = useParams();
  const userId = localStorage.getItem("userId");
  const item = clothes.find((c) => c.url === id);
  const [isFavorited, setIsFavorited] = useState();
  const token = localStorage.getItem("token");
  const [selectedSize, setSelectedSize] = useState("M");
  const [notification, setNotification] = useState("");
  const [notifTimeout, setNotifTimeout] = useState(null);

  useEffect(() => {
    if (!favorites) {
      setIsFavorited(false);
      return;
    }
    setIsFavorited(favorites.some((fav) => fav._id === item._id));
  }, []);

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

  if (!item) return <h2>Item not found</h2>;

  return (
    <>
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
            fontFamily: "arial",
          }}
        >
          {notification}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "40px",
        }}
      >
        <div>
          <img
            src={item.img}
            alt={item.name}
            style={{ padding: "40px", width: "300px", height: "450px" }}
          />
        </div>
        <div>
          <p
            style={{
              fontFamily: "arial",
              padding: "10px",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </p>
          <p style={{ fontFamily: "arial", padding: "10px", color: "grey" }}>
            {item.price}
          </p>
          <p
            style={{
              fontFamily: "arial",
              padding: "10px",
              textDecoration: "underline",
            }}
          >
            Sizes
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
            }}
          >
            {["S", "M", "L"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  backgroundColor: selectedSize === size ? "#ddd" : "white",
                  border: "1px solid #ccc",
                  width: "40px",
                  height: "40px",
                }}
              >
                {size}
              </button>
            ))}
          </div>
          <div style={{ padding: "10px" }}>
            <button
              onClick={addToCart}
              style={{
                border: "1px solid #ccc",
                backgroundColor: "white",
                width: "120px",
                height: "40px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div style={{ padding: "10px" }}>
            <button
              onClick={toggleFavorite}
              style={{
                border: "1px solid #ccc",
                backgroundColor: "white",
                width: "120px",
                height: "40px",
              }}
            >
              {isFavorited ? "★ Unfavorite" : "☆ Favorite"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
