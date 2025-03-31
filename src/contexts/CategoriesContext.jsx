import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectCategory, setSelectCategory] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories/")
      .then((res) => setCategoriesList(res.data));
  }, []);

  const value = {
    categoriesList,
    setCategoriesList,
    selectCategory,
    setSelectCategory,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
