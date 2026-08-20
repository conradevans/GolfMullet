import useWindowSize from "./hooks/useWindowSize";
import { Link } from "react-router-dom";

const Logo = () => {
  const { width } = useWindowSize();

  return (
    <div>
      {width >= 800 && (
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Lucida Handwriting, cursive",
            fontSize: "19px",
          }}
        >
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            GOLF MULLET
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logo;
