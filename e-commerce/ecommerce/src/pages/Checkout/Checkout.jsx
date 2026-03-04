import axios from "axios";
import { useState, useEffect } from "react";
import "./Checkout.css";
import "./CheckoutHeader.css";
import CheckoutHeader from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

const Checkout = ({ cart, setCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // helper to keep cart state in sync when the user switches delivery option
  const handleDeliveryOptionChange = (productId, deliveryOptionId) => {
    axios
      .put(`/api/cart-items/${productId}`, { deliveryOptionId })
      .then((response) => {
        // update the cart in parent state if setter was provided
        if (setCart) {
          setCart((prev) =>
            prev.map((item) =>
              item.productId === productId
                ? { ...item, deliveryOptionId }
                : item,
            ),
          );
        }
      })
      .catch((err) => {
        console.error("failed to update delivery option", err);
      });
  };

  useEffect(() => {
    axios
      .get("api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
};
export default Checkout;
