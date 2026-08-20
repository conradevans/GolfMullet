import { Link } from "react-router-dom";

const TopImageHome = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "575px",
        overflow: "hidden",
      }}
    >
      <Link to="browse">
        <img
          src="/images/GolfBallStockImage.jpg"
          alt="Golf Ball Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Link>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "black",
          fontFamily: "arial",
        }}
      >
        <Link to="browse" style={{ textDecoration: "none", color: "black" }}>
          <h2>
            <strong>SUMMER READY</strong>
          </h2>
          <p
            to="/browse"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Shop
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TopImageHome;
