import { UserProvider } from "../contexts/user/UserContext";
import { CartProvider } from "../contexts/CartContext";
import { CategoriesProvider } from "../contexts/CategoriesContext";
import { BrandsProvider } from "../contexts/BrandContext";
import { ProductsProvider } from "../contexts/ProductContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <CategoriesProvider>
          <BrandsProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </BrandsProvider>
        </CategoriesProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default AppProviders;
