import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import PDP from "./pages/PDP";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/all" />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:id" element={<PDP />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
