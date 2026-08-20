import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ width: "20%" }}>
        {Object.entries(checkboxGroups).map(([group, options]) => (
          <div key={group} style={{ marginBottom: "20px" }}>
            <h4>{group}</h4>
            {options.map((option) => (
              <div key={option}>
                <label
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
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
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ width: "80%", paddingLeft: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              maxWidth: "70%",
            }}
          >
            {activeFilters.map((f, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#eee",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontFamily: "arial",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {f} <button onClick={() => handleRemoveFilter(f)}>×</button>
              </span>
            ))}
          </div>

          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              style={{ padding: "5px 10px", fontSize: "16px" }}
            >
              <option value="">-- Select --</option>
              {dropdownOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {filteredClothes.length > 0 ? (
            filteredClothes.map((item) => (
              <Link
                to={`/item/${item.url}`}
                key={item.id}
                style={{
                  width: "200px",
                  textAlign: "center",
                  fontFamily: "arial",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </Link>
            ))
          ) : (
            <p>No results match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
