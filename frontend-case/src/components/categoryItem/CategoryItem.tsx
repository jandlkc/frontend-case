import React, { FC, useState } from "react";

import "./catItem.css";

interface Props {
  check: boolean;
  item: string;
  handleCheck: (item: string, statu: boolean) => void;
}
const CategoryItem: FC<Props> = ({ check, item, handleCheck }) => {
  const [checked, setChecked] = useState(check);
  const checkControl = () => {
    handleCheck(decodedItem!, !checked);
  };
  const element = document.createElement("div");
  element.innerHTML = item;
  const decodedItem = element.textContent;

  return (
    <div className="category-item-cont">
      <button
        className="check-cont"
        onClick={() => {
          checkControl();
        }}
      >
        {checked ? <div className="check"></div> : null}
      </button>
      <span className="cat-item-text">{decodedItem}</span>
    </div>
  );
};

export default CategoryItem;
