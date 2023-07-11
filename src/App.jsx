/* eslint-disable no-unused-vars */

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Support from "./pages/Support";
import StorePage from "./pages/StorePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import UserInfo from "./components/profile/UserInfo";
import UserGames from "./components/profile/UserGames";
import UserOrders from "./components/profile/UserOrders";
import EditProfile from "./components/profile/editProfile";
import EditPassword from "./components/profile/EditPassword";
import GameProfile from "./pages/GameProfile";
import Authentication from "./components/authentication/Authentication";
import NotAuthentication from "./components/authentication/NotAuthentication";
import PaymentSuccess from "./pages/PaymentSuccess";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="store" element={<StorePage />} />
        <Route path="about" element={<About />} />
        <Route
          path="wishlist"
          element={
            <Authentication>
              <Wishlist />
            </Authentication>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="support" element={<Support />} />
        <Route
          path="user/"
          element={
            <Authentication>
              <Profile />
            </Authentication>
          }
        >
          <Route index element={<Navigate replace to="info" />} />
          <Route path="info" element={<UserInfo />} />
          <Route path="games" element={<UserGames />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="edit-password" element={<EditPassword />} />
          <Route path="*" element={<h2>not found</h2>} />
        </Route>
        <Route
          path="sign-in"
          element={
            <NotAuthentication>
              <SignInPage />
            </NotAuthentication>
          }
        />
        <Route
          path="sign-up"
          element={
            <NotAuthentication>
              <SignUpPage />
            </NotAuthentication>
          }
        />
        <Route path="game/:id" element={<GameProfile />} />
        <Route
          path="payment-success"
          element={
            <Authentication>
              <PaymentSuccess />
            </Authentication>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
