/* eslint-disable no-unused-vars */
import "./App.css";

import NewPage from "./pages/NewPage";
import AppLayout from "./components/AppLayout";
import Support from "./pages/Support";
import StorePage from "./pages/StorePage";
import { Navigate, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import UserInfo from "./components/UserInfo";
import UserGames from "./components/UserGames";
import UserOrders from "./components/UserOrders";
import EditProfile from "./components/editProfile";
import EditPassword from "./components/EditPassword";
import GameProfile from "./pages/GameProfile";
import Authentication from "./components/Authentication";
import NotAuthentication from "./components/NotAuthentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="store" element={<StorePage />} />
        <Route path="about" element={<h2>About Page</h2>} />
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
      </Route>
    </Routes>
  );
}

export default App;
