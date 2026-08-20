import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useWindowSize from "./hooks/useWindowSize";

const DropDownSearch = ({ clothes }) => {
  const { width } = useWindowSize();
  const allowedFilters = [
    "polo",
    "shirts",
    "hoodie",
    "shorts",
    "pants",
    "men",
    "women",
    "quarterzips",
    "sweatshirt",
    "sweatpants",
    "jacket",
    "vest",
    "hat",
    "socks",
    "dress",
    "matching",
    "skort",
    "shoes",
    "red",
    "blue",
    "green",
    "purple",
    "white",
    "black",
    "brown",
    "winter",
    "accessories",
    "rain",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredClothes = search
    ? clothes.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Search icon trigger */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={{ display: "inline-block" }}
      >
        <Link to="/browse">
          <AiOutlineSearch size={20} color="black" />
        </Link>
      </div>

      {/* Dropdown container */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            left: 0,
            width: width - 31,
            maxHeight: search ? "calc(100vh - 125px)" : "100px",
            overflowY: search ? "auto" : "hidden",
            backgroundColor: "#fff",
            borderTop: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
          className="hide-scrollbar"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setIsOpen(false);
            setSearch("");
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Search form with Enter key redirect */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (search.trim()) {
                  const terms = search
                    .toLowerCase()
                    .split(" ")
                    .filter((term) => allowedFilters.includes(term));

                  if (terms.length > 0) {
                    navigate(`/browse?filter=${terms.join(",")}`);
                  } else {
                    navigate("/browse");
                  }

                  setIsOpen(false);
                  setSearch("");
                }
              }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: "8px 16px",
                  width: "85%",
                  maxWidth: "600px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginBottom: "16px",
                }}
              />
            </form>

            {/* Search results */}
            {search && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "16px",
                  paddingBottom: "40px",
                }}
              >
                {filteredClothes.map((item) => (
                  <div key={item.id}>
                    <Link
                      to={`/item/${item.url}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        setIsOpen(false);
                        setSearch("");
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "200px", height: "200px" }}
                      />
                      <p
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontFamily: "arial",
                          fontSize: "12px",
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontFamily: "arial",
                          fontSize: "12px",
                        }}
                      >
                        {item.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DropDownSearch;
