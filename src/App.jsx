/* eslint-disable no-unused-vars */
import "./App.css";

import NewPage from "./pages/NewPage";
import AppLayout from "./components/AppLayout";
import Support from "./pages/Support";
import StorePage from "./pages/StorePage";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="store" element={<StorePage />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="support" element={<Support />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
