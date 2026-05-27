import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Cart Page
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-xl">
          Your Cart is Empty
        </h2>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <Link to="/checkout">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;