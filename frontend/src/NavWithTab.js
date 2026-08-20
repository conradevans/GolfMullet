import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import DropDownSearch from "./DropDownSearch";
import WomenTab from "./WomenTab";
import MenTab from "./MenTab";
import NewTab from "./NewTab";
import Logo from "./Logo";

const Nav = ({ clothes }) => {
  return (
    <nav
      style={{
        position: "relative",
        backgroundColor: "lightgrey",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Arial",
          padding: "10px",
          gap: "40px",
        }}
      >
        <NewTab />

        <MenTab />

        <WomenTab />
      </div>

      <Logo />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <DropDownSearch clothes={clothes} />
        <Link to="Favorites">
          <AiOutlineHeart size={20} color="black" />
        </Link>
        <Link to="Cart">
          <FiShoppingCart size={20} color="black" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
