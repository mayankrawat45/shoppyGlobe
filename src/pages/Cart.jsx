import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Cart Page
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold">
            Your Cart is Empty
          </h2>

          <Link to="/">
            <button className="bg-black text-white px-5 py-2 rounded-md">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <h2 className="text-2xl font-bold">
            Total: ${totalPrice}
          </h2>

          <Link to="/checkout">
            <button className="bg-black hover:bg-gray-800 transition text-white px-6 py-3 rounded-md">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;