import { Link } from "react-router-dom";

const SecondImagesHome = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          flex: 1,
          minWidth: "300px",
          height: "300px", // lock height to keep buttons centered
          overflow: "hidden",
        }}
      >
        <Link to="browse">
          <img
            src="/images/WomenGolfing.jpg"
            alt="First"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <p
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "arial",
            }}
          >
            Shop
          </p>
        </Link>
      </div>

      <div
        style={{
          position: "relative",
          flex: 1,
          minWidth: "300px",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <Link to="browse">
          <img
            src="/images/mangolfing.jpg"
            alt="Second"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <p
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "arial",
            }}
          >
            Shop
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SecondImagesHome;
