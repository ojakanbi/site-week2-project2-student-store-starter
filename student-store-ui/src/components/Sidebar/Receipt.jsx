import React from "react";
import "./Receipt.css";

export default function Receipt({ customerInfo, receiptItems, name, email, onShopAgain }) {
  const calculateTotal = () => {
    let subTotal = 0;
    receiptItems.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    const taxRate = 0.1; // Assuming 10% tax rate
    const tax = subTotal * taxRate;
    const total = subTotal + tax;

    return total;
  };

  return (
    <div className="information-check">
      <h2>Checkout Info</h2>

      {receiptItems.length > 0 ? (
        <>
          <div className="receipt">
            <h2>Receipt for {customerInfo.name}</h2>
            <p>Sent to: {customerInfo.email}</p>
            {/* Render the items in the receiptItems */}
            <ul>
              {receiptItems.map((item, index) => (
                <li key={index}>
                  {item.quantity} total {item.name} purchased at a cost of ${item.price} for a total of ${item.quantity * item.price}
                </li>
              ))}
            </ul>
            <p>
              Total Price:{" "}
              {calculateTotal().toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <button onClick={onShopAgain} className="shop-again">
            Shop Again
          </button>
          {/* Add Shop Again button */}
        </>
      ) : (
        <div className="notification">
          <h2>No items in your cart or checkout not complete.</h2>
        </div>
      )}

      <p>
        A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
      </p>
    </div>
  );
}
