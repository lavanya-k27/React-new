import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./OrdersPage.css";
import { OrderGrid } from "./OrderGrid";

const OrdersPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    getOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} />
      </div>
    </>
  );
};

export default OrdersPage;
