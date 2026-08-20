import { Link } from "react-router-dom";

const NavItemWithDropdown = ({ label, children, isOpen, onOpen, onClose }) => {
  return (
    <div className="nav-item" onMouseEnter={onOpen}>
      <Link
        className="navLabel"
        to={`/browse?filter=${label}`}
        onFocus={onOpen}
        onClick={onClose}
        aria-expanded={isOpen}
      >
        {label}
      </Link>

      {isOpen && <div className="nav-item__dropdown">{children}</div>}
    </div>
  );
};

export default NavItemWithDropdown;
