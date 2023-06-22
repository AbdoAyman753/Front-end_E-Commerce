/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </>
  );
}

export default App;
