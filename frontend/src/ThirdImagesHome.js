import { Link } from "react-router-dom";

const ThirdImagesHome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // ✅ center outer container
        marginTop: "20px",
      }}
    >
      <div
        style={{
          border: "4px solid white",
          padding: "10px 20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2vw",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: "20vw",
              height: "30vw",
              maxWidth: "300px",
              maxHeight: "450px",
              minWidth: "150px",
              minHeight: "225px",
              overflow: "hidden",
            }}
          >
            <Link to="/browse?filter=shorts">
              <img
                src="/images/homeimage1.webp"
                alt="Image 1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>
            <Link to="/browse?filter=shorts">
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2vw",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Shop Shorts
              </div>
            </Link>
          </div>

          {/* Image 2 */}
          <div
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: "20vw",
              height: "30vw",
              maxWidth: "300px",
              maxHeight: "450px",
              minWidth: "150px",
              minHeight: "225px",
              overflow: "hidden",
            }}
          >
            <Link to="/browse?filter=polo">
              <img
                src="/images/homeimage2.webp"
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>
            <Link to="/browse?filter=polo">
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2vw",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Shop Polos
              </div>
            </Link>
          </div>

          {/* Image 3 */}
          <div
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: "20vw",
              height: "30vw",
              maxWidth: "300px",
              maxHeight: "450px",
              minWidth: "150px",
              minHeight: "225px",
              overflow: "hidden",
            }}
          >
            <Link to="/browse?filter=shoes">
              <img
                src="/images/homeimage3.avif"
                alt="Image 3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>
            <Link to="/browse?filter=shoes">
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2vw",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Shop Runners
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdImagesHome;
