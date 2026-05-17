import React from "react";

const categories = [
  { key: "pizzas", label: "Pizzas" },
  { key: "snacks", label: "Snacks" },
  { key: "desserts", label: "Desserts" },
  { key: "boissons", label: "Boissons" },
];

function NavCarte({ onChangeCategory, current }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChangeCategory(cat.key)}
          className={`nav-carte-btn ${current === cat.key ? "nav-carte-btn-active" : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default NavCarte;
