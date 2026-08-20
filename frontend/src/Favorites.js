import { Link } from "react-router-dom";

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
      <h2 style={{ fontFamily: "arial", padding: "20px" }}>
        No favorites yet.
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {favorites.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "220px",
            textAlign: "center",
            fontFamily: "arial",
          }}
        >
          {/* Wrap only the image and text in Link */}
          <Link
            to={`/item/${item.url}`}
            style={{ textDecoration: "none", color: "black", display: "block" }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <p style={{ fontWeight: "bold", margin: "10px 0" }}>{item.name}</p>
            <p style={{ color: "grey" }}>{item.price}</p>
          </Link>

          {/* Button outside the Link to ensure it works */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent Link from being triggered
              removeFavorite(item._id);
            }}
            style={{
              marginTop: "10px",
              border: "1px solid #ccc",
              backgroundColor: "white",
              width: "100%",
              height: "35px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
