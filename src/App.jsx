import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProviders from "./providers/AppProviders";
import Homepage from "./pages/Homepage";
import RootLayout from "./layouts/RootLayout";
import ScrollToTop from "./components/original_ui/ScrollToTop";
import Blogpage from "./pages/Blogpage";
import FAQpage from "./pages/FAQpage";
import Contactpage from "./pages/Contactpage";
import LoginPage from "./pages/user/Loginpage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProfilePage from "./pages/user/ProfilePage";
import CartList from "./pages/CartList";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminPage from "./pages/admin/AdminPage";
import RegisterPage from "./pages/user/Registerpage";
import ProductsPage from "./pages/Productspage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppProviders>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Homepage />} />
              <Route path="products">
                <Route index element={<ProductsPage />} />
                <Route path="detail/:id" element={<ProductDetailPage />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path="cart" element={<CartList />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>

              <Route
                path="admin"
                element={<ProtectedRoute requiredRole="admin" />}
              >
                <Route index element={<AdminPage />} />
              </Route>

              <Route path="blog" element={<Blogpage />} />
              <Route path="faq" element={<FAQpage />} />
              <Route path="contact" element={<Contactpage />} />
            </Route>

            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
          </Routes>
        </AppProviders>
      </BrowserRouter>
    </div>
  );
}

export default App;
