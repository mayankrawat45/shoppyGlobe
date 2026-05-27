import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  console.log(cartItems)

  return (
    <div>
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))
      )}
      <Link to="/checkout">
        <button>Proceed To Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;