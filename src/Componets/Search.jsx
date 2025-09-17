import React from "react";
import searchImg from "../assets/icons/searchImg.svg"

const Search = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "250px" }}>
      <input
        type="text"
        placeholder="Buscar..."
        aria-label="Buscar"
       //value={query}
        //onChange={(e) => setQuery(e.target.value)}
        //onKeyDown={handleKeyDown}
        style={{
          flex: 1,
          height: "35px",
          border: "1px solid #ccc",
          borderRadius: "5px 0 0 5px",
          paddingLeft: "10px",
          outline: "none"
        }}
      />
      <button
        //onClick={handleSearch}
        style={{
          height: "37px",
          width: "40px",
          border: "1px solid #ccc",
          borderLeft: "none",
          borderRadius: "0 5px 5px 0",
          backgroundColor: "#f5f5f5",
          cursor: "pointer"
        }}
      >
        <img src={searchImg} alt="Buscar" style={{ width: "18px", height: "18px" }} />
      </button>
    </div>
  );
};

export default Search;
