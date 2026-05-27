import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handlePlaceOrder() {
    alert("Order placed");

    dispatch(clearCart());

    navigate("/");
  }

  return (
    <div>
      <h1>Checkout Page</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <br />

        <input
          type="text"
          placeholder="Enter address"
        />
      </form>

      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.quantity}
          </p>
        </div>
      ))}

      <button onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;