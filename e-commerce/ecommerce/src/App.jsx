import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages/Checkout/Checkout";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const response = await axios.get("api/cart-items?expand=product");
      setCart(response.data);
    };

    getCartData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        {/* pass setCart so children can keep the cart in sync */}
        <Route
          path="checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
