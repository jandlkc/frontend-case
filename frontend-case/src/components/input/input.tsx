import React, { FC } from "react";
import SearchSVG from "../../assets/searchsvg";
import "./input.css";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Input: FC<Props> = ({ setSearch }) => {
  return (
    <div className="input-container">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search-input"
        type="text"
        placeholder="Kategori ara..."
      />
      <SearchSVG size={"20"} />
    </div>
  );
};

export default Input;
