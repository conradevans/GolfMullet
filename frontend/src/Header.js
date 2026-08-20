import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    const textOptions = [
      "Free shipping on orders $125+",
      "Up to 20% off select styles",
      "New clothes for the season",
    ];
    setHeaderText(textOptions[Math.floor(Math.random() * textOptions.length)]);
  }, []);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <span>Play sharp. Stay loose.</span>
      </div>

      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="GolfMullet home">
          <img
            className="brand__mark"
            src="/images/golfmullet-icon.jpg"
            alt=""
          />
          <span className="brand__name">GolfMullet</span>
        </Link>

        <p className="site-header__message">{headerText}</p>

        <button
          className="account-button"
          type="button"
          onClick={() => navigate(isLoggedIn ? "/account" : "/signin")}
          aria-label={isLoggedIn ? "View account" : "Sign in"}
        >
          <AiOutlineUser aria-hidden="true" />
          <span>{isLoggedIn ? "Account" : "Sign in"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
