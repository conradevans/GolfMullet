import NavItemWithDropdown from "./NavItemWithDropDown";
import { Link } from "react-router-dom";

const WomenTab = () => {
  return (
    <NavItemWithDropdown label="Women">
      <div className="tabStyle">
        <div className="columnStyle">
          <div>
            <Link to="/browse?filter=women" className="tabContent">
              <strong>Featured</strong>
            </Link>
            <Link to="/browse?filter=bestsellers,women" className="tabContent">
              <p>Best Sellers</p>
            </Link>
            <Link to="/browse?filter=new,women" className="tabContent">
              <p>New Arrivals</p>
            </Link>
            <Link to="/browse?filter=winter,women" className="tabContent">
              <p>Winter Collection</p>
            </Link>
            <Link to="/browse?filter=sale,women" className="tabContent">
              <p>Sale</p>
            </Link>
            <Link to="/browse?filter=hat,socks,women" className="tabContent">
              <p>Hats & Socks</p>
            </Link>
            <Link to="/browse?filter=dress,women" className="tabContent">
              <p>Golf Dresses</p>
            </Link>
            <Link to="/browse?filter=matching,women" className="tabContent">
              <p>Matching Sets</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest,women"
              className="tabContent"
            >
              <strong>Tops</strong>
            </Link>
            <Link to="/browse?filter=polo,women" className="tabContent">
              <p>Golf Polos</p>
            </Link>
            <Link to="/browse?filter=quarterzips,women" className="tabContent">
              <p>Quarterzips</p>
            </Link>
            <Link to="/browse?filter=sweatshirt,women" className="tabContent">
              <p>Sweatshirts</p>
            </Link>
            <Link to="/browse?filter=jacket,women" className="tabContent">
              <p>Jackets & Vests</p>
            </Link>
            <Link
              to="/browse?filter=polo,shirts,hoodie,quarterzips,sweatshirt,jacket,vest,women"
              className="tabContent"
            >
              <p>All Tops</p>
            </Link>
          </div>
          <div>
            <Link
              to="/browse?filter=women,shorts,skort,pants,sweatpants"
              className="tabContent"
            >
              <strong>Bottoms</strong>
            </Link>
            <Link to="/browse?filter=skorts,women" className="tabContent">
              <p>Golf Skorts</p>
            </Link>
            <Link to="/browse?filter=pants,women" className="tabContent">
              <p>Golf Pants</p>
            </Link>
            <Link to="/browse?filter=sweatpants,women" className="tabContent">
              <p>Sweatpants</p>
            </Link>
          </div>
        </div>
      </div>
    </NavItemWithDropdown>
  );
};

export default WomenTab;
