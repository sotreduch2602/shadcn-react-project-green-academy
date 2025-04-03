import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  Products: [],
});

export const ProductsProvider = ({ children }) => {
  const [ProductLists, setProductLists] = useState([]);
  const [selectProduct, setSelectProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/")
      .then((res) => setProductLists(res.data));
  }, []);


  const value = {
    ProductLists,
    setProductLists,
    setSelectProduct,
    selectProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
