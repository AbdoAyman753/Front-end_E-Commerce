/* eslint-disable no-unused-vars */

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Loader = lazy(() => import("./components/ui/Loader"));
const AppLayout = lazy(() => import("./components/layout/AppLayout"));
const Support = lazy(() => import("./pages/Support"));
const StorePage = lazy(() => import("./pages/StorePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Profile = lazy(() => import("./pages/Profile"));
const UserInfo = lazy(() => import("./components/profile/UserInfo"));
const UserGames = lazy(() => import("./components/profile/UserGames"));
const UserOrders = lazy(() => import("./components/profile/UserOrders"));
const EditProfile = lazy(() => import("./components/profile/editProfile"));
const EditPassword = lazy(() => import("./components/profile/EditPassword"));
const GameProfile = lazy(() => import("./pages/GameProfile"));
const Authentication = lazy(() =>
  import("./components/authentication/Authentication")
);
const NotAuthentication = lazy(() =>
  import("./components/authentication/NotAuthentication")
);
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="*" element={<ErrorPage />} />
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
    </Suspense>
  );
}

export default App;
