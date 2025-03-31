import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./layouts/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { BrandsProvider } from "./contexts/BrandContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CategoriesProvider>
          <BrandsProvider>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Homepage />} />
                <Route path="products" element={<ProductsPage />} />
              </Route>
            </Routes>
          </BrandsProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
