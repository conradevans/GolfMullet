import { Link } from "react-router-dom";

const ScrollImagesHome = ({ clothes }) => {
  return (
    <div className="scroll-container">
      {clothes.map((item) => (
        <Link
          key={item._id || item.url} // Use MongoDB _id if available, fallback to URL
          to={`/item/${item.url}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            flex: "0 0 auto",
          }}
        >
          <div className="clothing-card">
            <img
              src={item.img}
              alt={item.name}
              width="200"
              height="200"
              style={{ borderRadius: "8px" }}
            />
            <p style={{ fontFamily: "arial" }}>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ScrollImagesHome;
