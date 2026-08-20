import NavItemWithDropdown from "./NavItemWithDropDown";
import { Link } from "react-router-dom";

const MenTab = () => {
  return (
    <NavItemWithDropdown label="Men">
      <div className="tabStyle">
        <div className="columnStyle">
          <div>
            <Link to="/browse?filter=men" className="tabContent">
              <strong>Featured</strong>
            </Link>
            <Link to="/browse?filter=bestsellers,men" className="tabContent">
              <p>Best Sellers</p>
            </Link>
            <Link to="/browse?filter=winter,men" className="tabContent">
              <p>Winter Collection</p>
            </Link>
            <Link to="/browse?filter=sale,men" className="tabContent">
              <p>Sale</p>
            </Link>
            <Link to="/browse?filter=rain,men" className="tabContent">
              <p>Rain Gear</p>
            </Link>
            <Link to="/browse?filter=accessories,men" className="tabContent">
              <p>Accessories</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest,men"
              className="tabContent"
            >
              <strong>Tops</strong>
            </Link>
            <Link to="/browse?filter=polo,men" className="tabContent">
              <p>Golf Polos</p>
            </Link>
            <Link to="/browse?filter=quarterzips,men" className="tabContent">
              <p>Quarterzips</p>
            </Link>
            <Link to="/browse?filter=shirts,men" className="tabContent">
              <p>T-Shirts</p>
            </Link>
            <Link to="/browse?filter=sweatshirt,men" className="tabContent">
              <p>Sweatshirts</p>
            </Link>
            <Link to="/browse?filter=jacket,men" className="tabContent">
              <p>Jackets & Vests</p>
            </Link>
            <Link
              to="/browse?filter=polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest,men"
              className="tabContent"
            >
              <p>All Tops</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=shorts,skorts,pants,sweatpants,men"
              className="tabContent"
            >
              <strong>Bottoms</strong>
            </Link>
            <Link to="/browse?filter=shorts,men" className="tabContent">
              <p>Golf Shorts</p>
            </Link>
            <Link to="/browse?filter=pants,men" className="tabContent">
              <p>Golf Pants</p>
            </Link>
            <Link
              to="/browse?filter=shorts,skorts,pants,sweatpants,men"
              className="tabContent"
            >
              <p>Shop All Bottoms</p>
            </Link>
          </div>
        </div>
      </div>
    </NavItemWithDropdown>
  );
};

export default MenTab;
