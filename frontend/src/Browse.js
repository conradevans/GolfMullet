import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSliders } from "react-icons/fi";
import ProductCard from "./ProductCard";

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

const dropdownOptions = ["bestsellers", "new", "sale"];

const Browse = ({ clothes }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const [selectedOption, setSelectedOption] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [sizeSelections, setSizeSelections] = useState({
    s: false,
    m: false,
    l: false,
  });

  useEffect(() => {
    const filterList = filter
      .split(",")
      .map((f) => f.trim().toLowerCase())
      .filter((f) => allowedFilters.includes(f) || dropdownOptions.includes(f));

    setActiveFilters(filterList);

    const matchedDropdown = dropdownOptions.find((opt) =>
      filterList.includes(opt)
    );
    setSelectedOption(matchedDropdown || "");
  }, [filter]);

  const handleSelectChange = (e) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);

    const baseFilters = activeFilters.filter(
      (f) => !dropdownOptions.includes(f)
    );

    const updated = dropdownOptions.includes(newOption)
      ? [...baseFilters, newOption]
      : baseFilters;

    setSearchParams({ filter: updated.join(",") });
  };

  const handleFilterToggle = (filterValue) => {
    const updated = activeFilters.includes(filterValue)
      ? activeFilters.filter((f) => f !== filterValue)
      : [...activeFilters, filterValue];
    setSearchParams({ filter: updated.join(",") });
  };

  const handleRemoveFilter = (filterValue) => {
    const updated = activeFilters.filter((f) => f !== filterValue);
    setSearchParams({ filter: updated.join(",") });
    if (dropdownOptions.includes(filterValue)) setSelectedOption("");
  };

  const groupedFilters = {
    gender: ["men", "women"],
    color: ["red", "blue", "green", "purple", "white", "black", "brown"],
    category: [
      "polo",
      "shirts",
      "hoodie",
      "shorts",
      "pants",
      "quarterzips",
      "sweatshirt",
      "jacket",
      "vest",
      "hat",
      "socks",
      "dress",
      "matching",
      "skort",
      "shoes",
      "winter",
      "accessories",
      "rain",
    ],
  };

  const filteredClothes =
    activeFilters.length === 0
      ? clothes
      : clothes.filter((item) => {
          const tagsArray = item.tags
            .join(",")
            .toLowerCase()
            .split(",")
            .map((t) => t.trim());

          const matchedGender = activeFilters.filter((f) =>
            groupedFilters.gender.includes(f)
          );
          const matchedColor = activeFilters.filter((f) =>
            groupedFilters.color.includes(f)
          );
          const matchedCategory = activeFilters.filter((f) =>
            groupedFilters.category.includes(f)
          );
          const matchedDropdown = activeFilters.filter((f) =>
            dropdownOptions.includes(f)
          );

          const matchesGroup = (group) =>
            group.length === 0 || group.some((f) => tagsArray.includes(f));

          return (
            matchesGroup(matchedGender) &&
            matchesGroup(matchedColor) &&
            matchesGroup(matchedCategory) &&
            matchesGroup(matchedDropdown)
          );
        });

  const checkboxGroups = {
    Gender: ["men", "women"],
    Color: ["red", "blue", "green", "purple", "white", "black", "brown"],
    Size: ["s", "m", "l"],
    Tops: [
      "polo",
      "shirts",
      "hoodie",
      "quarterzips",
      "sweatshirt",
      "jacket",
      "vest",
    ],
    Bottoms: ["shorts", "pants", "skort", "sweatpants"],
    Other: [
      "hat",
      "socks",
      "shoes",
      "dress",
      "matching",
      "winter",
      "accessories",
      "rain",
    ],
  };

  return (
    <main className="page-shell">
      <header className="shop-header">
        <div className="page-heading">
          <p className="eyebrow">The lineup</p>
          <h1>Shop all</h1>
          <p>Polished golf essentials made for the round and whatever follows.</p>
        </div>
        <p className="shop-count">
          {filteredClothes.length} {filteredClothes.length === 1 ? "style" : "styles"}
        </p>
      </header>

      <div className="shop-layout">
        <aside className="filters-panel" aria-label="Product filters">
          <h2 className="filters-panel__title">
            <FiSliders aria-hidden="true" /> Filters
          </h2>
          {Object.entries(checkboxGroups).map(([group, options]) => (
            <fieldset className="filter-group" key={group}>
              <legend>{group}</legend>
              {options.map((option) => (
                <label className="filter-option" key={option}>
                  <input
                    type="checkbox"
                    checked={
                      group === "Size"
                        ? sizeSelections[option] || false
                        : activeFilters.includes(option)
                    }
                    onChange={() => {
                      if (group === "Size") {
                        setSizeSelections((prev) => ({
                          ...prev,
                          [option]: !prev[option],
                        }));
                      } else {
                        handleFilterToggle(option);
                      }
                    }}
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </fieldset>
          ))}
        </aside>

        <section aria-label="Products">
          <div className="shop-toolbar">
            <div className="filter-chips" aria-label="Active filters">
              {activeFilters.map((activeFilter) => (
                <span className="filter-chip" key={activeFilter}>
                  {activeFilter}
                  <button
                    type="button"
                    onClick={() => handleRemoveFilter(activeFilter)}
                    aria-label={`Remove ${activeFilter} filter`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <label>
              <span className="sr-only">Collection</span>
              <select
                className="shop-select"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">All collections</option>
                {dropdownOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="product-grid">
            {filteredClothes.length > 0 ? (
              filteredClothes.map((item) => (
                <ProductCard key={item._id || item.id || item.url} item={item} />
              ))
            ) : (
              <p className="product-grid__empty">
                No results match your filters. Try removing a filter to see more.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Browse;
