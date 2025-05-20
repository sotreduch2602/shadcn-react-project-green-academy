import axiosInstance from "@/api/axios";
import { createContext, useEffect, useState } from "react";

export const BrandsContext = createContext({
  brands: [],
});

export const BrandsProvider = ({ children }) => {
  const [BrandLists, setBrandLists] = useState([]);
  const [selectBrand, setSelectBrand] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/brands")
      .then((res) => setBrandLists(res.data));
  }, []);

  const value = { BrandLists, setSelectBrand, selectBrand };
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
