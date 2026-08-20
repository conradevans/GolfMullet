import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavItemWithDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        className="navLabel"
        to={`/browse?filter=${label}`}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>

      {isOpen && <div className="nav-item__dropdown">{children}</div>}
    </div>
  );
};

export default NavItemWithDropdown;
