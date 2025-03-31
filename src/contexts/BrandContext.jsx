import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BrandsContext = createContext({
  brands: [],
});

export const BrandsProvider = ({ children }) => {
  const [BrandLists, setBrandLists] = useState([]);
  const [selectBrand, setSelectBrand] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/brands/")
      .then((res) => setBrandLists(res.data));
  }, []);

  const value = { BrandLists, setSelectBrand, selectBrand };
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
