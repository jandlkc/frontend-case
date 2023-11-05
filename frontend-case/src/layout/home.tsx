import React, { FC, useEffect } from "react";
import Card from "../components/categorySearchCard/Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../Store/Features/CategorySlice";
import axios from "axios";
const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((response) => {
        dispatch(setCategories(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div>
      <Card />
    </div>
  );
};

export default Home;
