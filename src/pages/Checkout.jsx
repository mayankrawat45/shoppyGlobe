import { useSelector, useDispatch } from "react-redux";

import { clearCart } from "../redux/cartSlice";

import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <h2 className="p-6 text-2xl">
        Your Cart is Empty
      </h2>
    );
  }

  function handlePlaceOrder() {
    alert("Order placed");

    dispatch(clearCart());

    navigate("/");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Checkout
      </h1>

      <form className="flex flex-col gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Enter address"
          className="border p-3 rounded-lg"
        />
      </form>

      <h2 className="text-2xl font-semibold mb-4">
        Order Summary
      </h2>

      <div className="flex flex-col gap-3 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <p className="font-semibold">
              {item.title}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-black text-white px-6 py-3 rounded-md"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;