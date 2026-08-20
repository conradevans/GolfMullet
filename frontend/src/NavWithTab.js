import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import DropDownSearch from "./DropDownSearch";
import WomenTab from "./WomenTab";
import MenTab from "./MenTab";
import NewTab from "./NewTab";

const Nav = ({ clothes }) => {
  const [activePanel, setActivePanel] = useState(null);

  const closePanels = () => setActivePanel(null);

  return (
    <nav
      className="site-nav"
      aria-label="Primary navigation"
      onMouseLeave={closePanels}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closePanels();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") closePanels();
      }}
    >
      <div className="site-nav__inner">
        <div className="site-nav__categories">
          <NewTab
            isOpen={activePanel === "New"}
            onOpen={() => setActivePanel("New")}
            onClose={closePanels}
          />
          <MenTab
            isOpen={activePanel === "Men"}
            onOpen={() => setActivePanel("Men")}
            onClose={closePanels}
          />
          <WomenTab
            isOpen={activePanel === "Women"}
            onOpen={() => setActivePanel("Women")}
            onClose={closePanels}
          />
        </div>

        <div className="site-nav__actions">
          <DropDownSearch
            clothes={clothes}
            isOpen={activePanel === "search"}
            onOpen={() => setActivePanel("search")}
            onClose={closePanels}
          />
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
};

export default Nav;
