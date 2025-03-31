import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./layouts/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { BrandsProvider } from "./contexts/BrandContext";
import { ProductsProvider } from "./contexts/ProductContext";
import ScrollToTop from "./components/original_ui/ScrollToTop";
import Blogpage from "./pages/Blogpage";
import FAQpage from "./pages/FAQpage";
import Contactpage from "./pages/Contactpage";
import LoginPage from "./pages/user/Loginpage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CategoriesProvider>
          <BrandsProvider>
            <ProductsProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Homepage />} />

                  <Route path="products">
                    <Route index element={<ProductsPage />} />
                    <Route path="detail" element={<ProductDetailPage />} />
                  </Route>

                  <Route path="blog" element={<Blogpage />} />
                  <Route path="faq" element={<FAQpage />} />
                  <Route path="contact" element={<Contactpage />} />
                </Route>

                <Route path="login" element={<LoginPage />}></Route>
              </Routes>
            </ProductsProvider>
          </BrandsProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
