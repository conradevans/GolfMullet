import NavItemWithDropdown from "./NavItemWithDropDown";
import { Link } from "react-router-dom";

const NewTab = () => {
  return (
    <NavItemWithDropdown label="New">
      <div className="tabStyle">
        <div className="columnStyle">
          <div>
            <Link to="/browse?filter=new" className="tabContent">
              <strong>Featured</strong>
            </Link>
            <Link to="/browse?filter=bestsellers" className="tabContent">
              <p>Best Sellers</p>
            </Link>
            <Link to="/browse?filter=new,rain" className="tabContent">
              <p>Rain Gear</p>
            </Link>
            <Link to="/browse?filter=new,accessories" className="tabContent">
              <p>Accessories</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=new,polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest"
              className="tabContent"
            >
              <strong>Tops</strong>
            </Link>
            <Link to="/browse?filter=new,polo" className="tabContent">
              <p>Golf Polos</p>
            </Link>
            <Link to="/browse?filter=new,shirts" className="tabContent">
              <p>T-Shirts</p>
            </Link>
            <Link to="/browse?filter=new,hoodie" className="tabContent">
              <p>Hoodies</p>
            </Link>
            <Link
              to="/browse?filter=new,polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest"
              className="tabContent"
            >
              <p>All Tops</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=new,shorts,skort,pants,sweatpants"
              className="tabContent"
            >
              <strong>Bottoms</strong>
            </Link>
            <Link to="/browse?filter=new,shorts" className="tabContent">
              <p>Golf Shorts</p>
            </Link>
            <Link to="/browse?filter=new,pants" className="tabContent">
              <p>Golf Pants</p>
            </Link>
            <Link
              to="/browse?filter=new,shorts,skort,pants,sweatpants"
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

export default NewTab;
