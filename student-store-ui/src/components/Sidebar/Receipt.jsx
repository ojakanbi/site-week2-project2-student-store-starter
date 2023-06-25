import React from "react";

export default function Receipt({ receiptItems, total, name, email }) {
  return (
    <div className="information-check">
      <h2>Checkout Info</h2>

      {receiptItems.length > 0 ? ( // Update the condition to check receiptItems.length
        <>
          <div className="receipt">
            <h2>Receipt for {name}</h2>
            <p>Sent to: {email}</p>
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
              {total.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
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
