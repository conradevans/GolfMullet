import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useState } from "react";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    const textOptions = [
      "FREE SHIPPING ON ORDERS $125+",
      "UP TO 20% OFF SELECT STYLES",
      "NEW CLOTHES FOR THE SEASON",
    ];
    const int = Math.floor(Math.random() * textOptions.length);
    setHeaderText(textOptions[int]);
  }, []);

  const handleUserClick = () => {
    if (isLoggedIn) {
      console.log("account")
      navigate("/account");
    } else {
      console.log("signin")
      navigate("/signin");
    }
  };

  return (
    <header
      style={{
        backgroundColor: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/images/golfmullet-icon.jpg"
        alt="Golf Mullet Icon"
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "white",
          height: "40px",
          width: "40px",
          padding: "5px",
          cursor: "pointer",
        }}
      />

      {width >= 800 && (
        <strong
          style={{
            fontFamily: "Arial",
            fontSize: "19px",
          }}
        >
          {headerText}
        </strong>
      )}

      <button
        onClick={handleUserClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <AiOutlineUser
          color="black"
          style={{
            backgroundColor: "white",
            padding: "6px",
            height: "38px",
            width: "39px",
          }}
        />
      </button>
    </header>
  );
};

export default Header;
