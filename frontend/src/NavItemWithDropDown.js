import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";

const NavItemWithDropdown = ({ label, children }) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div
      style={{ position: "relative" }}
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

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "22px", // Adjust to match nav height
            left:
              label === "New"
                ? -10
                : label === "Men"
                ? -102
                : label === "Women"
                ? -193
                : 0,
            width: width - 111,
            backgroundColor: "#fff",
            borderTop: "1px solid #ccc",
            padding: "20px 40px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default NavItemWithDropdown;
