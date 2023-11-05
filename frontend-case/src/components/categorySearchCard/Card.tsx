import React, { FC, useEffect, useState } from "react";
import Input from "../input/input";
import Button from "../button/Button";
import CategoryItem from "../categoryItem/CategoryItem";
import { useSelector } from "react-redux";
import "./card.css";

const Card: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [checkList, setCheckList] = useState<string[]>([]);
  const categories = useSelector((state: any) => state.category.categories);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (search === "") {
      if (checkList.length === 0) {
        setData(categories);
      } else {
        setData(categories.filter((item: any) => !checkList.includes(item)));
      }
    } else {
      setData(
        categories.filter((item: any) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, checkList, categories]);
  useEffect(() => {
    const storedCheckList = localStorage.getItem("checkList");
    if (storedCheckList) {
      setCheckList(JSON.parse(storedCheckList));
    }
  }, []);

  const handleCheck = (item: string, statu: boolean) => {
    if (statu) {
      // localStorage.setItem("checkList", JSON.stringify(checkList));
      // setCheckList([...checkList, item]);
      setCheckList((newList) => {
        const updatedCheckList = [...newList, item];
        localStorage.setItem("checkList", JSON.stringify(updatedCheckList));
        return updatedCheckList;
      });
      setData(data.filter((i: any) => i !== item));
    } else {
      // setCheckList(checkList.filter((i) => i !== item));
      // localStorage.setItem("checkList", JSON.stringify(checkList));

      setCheckList((newList) => {
        const updatedCheckList = newList.filter((i) => i !== item);
        localStorage.setItem("checkList", JSON.stringify(updatedCheckList));
        return updatedCheckList;
      });
      setData([...data, item]);
    }
  };

  return (
    <div className="category-card">
      <span className="cat-card-header">Kategoriler</span>
      <Input setSearch={setSearch} />
      <div className="category-list">
        {checkList.map((item: any) => (
          <CategoryItem
            handleCheck={(item: string, status: boolean) =>
              handleCheck(item, status)
            }
            check={true}
            item={item}
          />
        ))}
        {data.map((item: any) => (
          <CategoryItem
            check={false}
            handleCheck={(item: string, status: boolean) =>
              handleCheck(item, status)
            }
            item={item}
          />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default Card;
