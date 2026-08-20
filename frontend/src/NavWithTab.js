import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import DropDownSearch from "./DropDownSearch";
import WomenTab from "./WomenTab";
import MenTab from "./MenTab";
import NewTab from "./NewTab";

const Nav = ({ clothes }) => (
  <nav className="site-nav" aria-label="Primary navigation">
    <div className="site-nav__inner">
      <div className="site-nav__categories">
        <NewTab />
        <MenTab />
        <WomenTab />
      </div>

      <div className="site-nav__actions">
        <DropDownSearch clothes={clothes} />
        <Link className="nav-action" to="/favorites" aria-label="Favorites">
          <AiOutlineHeart aria-hidden="true" />
        </Link>
        <Link className="nav-action" to="/cart" aria-label="Cart">
          <FiShoppingCart aria-hidden="true" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
