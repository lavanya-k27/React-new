import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

export const OrderSummary = ({
  deliveryOptions,
  cart,
  handleDeliveryOptionChange,
  getCartData,
}) => {
  return (
    <>
      <div className="order-summary">
        {deliveryOptions.length > 0 &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryOptions.find(
              (deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOptionId;
              },
            );
            return (
              <div key={cartItem.productId} className="cart-item-container">
                <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
                <div className="cart-item-details-grid">
                  <CartItemDetails
                    cartItem={cartItem}
                    getCartData={getCartData}
                  />
                  <DeliveryOptions
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                    handleDeliveryOptionChange={handleDeliveryOptionChange}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
