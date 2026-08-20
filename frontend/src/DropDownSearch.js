import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const DropDownSearch = ({ clothes, isOpen, onOpen, onClose }) => {
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
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredClothes = search
    ? clothes.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (!isOpen) setSearch("");
  }, [isOpen]);

  const closeSearch = () => {
    onClose();
    setSearch("");
  };

  return (
    <div className="search-shell" onMouseEnter={onOpen}>
      <Link
        className="nav-action"
        to="/browse"
        aria-label="Search products"
        aria-expanded={isOpen}
        onFocus={onOpen}
      >
        <AiOutlineSearch aria-hidden="true" />
      </Link>

      {isOpen && (
        <div className="search-panel hide-scrollbar">
          <form
            className="search-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (!search.trim()) return;

              const terms = search
                .toLowerCase()
                .split(" ")
                .filter((term) => allowedFilters.includes(term));

              navigate(
                terms.length > 0
                  ? `/browse?filter=${terms.join(",")}`
                  : "/browse"
              );
              closeSearch();
            }}
          >
            <AiOutlineSearch aria-hidden="true" />
            <input
              className="search-input"
              type="search"
              placeholder="Search polos, shorts, shoes…"
              aria-label="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </form>

          {search && (
            <div className="search-results">
              {filteredClothes.length > 0 ? (
                filteredClothes.map((item) => (
                  <Link
                    className="search-result"
                    key={item._id || item.id || item.url}
                    to={`/item/${item.url}`}
                    onClick={closeSearch}
                  >
                    <img
                      className="search-result__image"
                      src={item.img}
                      alt=""
                    />
                    <p className="search-result__name">{item.name}</p>
                    <p className="search-result__price">{item.price}</p>
                  </Link>
                ))
              ) : (
                <p className="search-results__empty">
                  No exact matches. Press Enter to browse all products.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDownSearch;
