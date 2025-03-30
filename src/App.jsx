import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./layouts/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { CategoriesProvider } from "./contexts/CategoriesContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CategoriesProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Homepage />} />
              <Route path="products" element={<ProductsPage />} />
            </Route>
          </Routes>
        </CategoriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
