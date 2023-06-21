/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import NewPage from "./pages/NewPage";
import AppLayout from "./components/AppLayout";
import Support from "./pages/Support";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="store" element={<h2>Store Page</h2>} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="wishlist" element={<h2>Wishlist Page</h2>} />
        <Route path="cart" element={<h2>Cart Page</h2>} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
