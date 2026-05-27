import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        {item.title}
      </h2>

      <p className="text-gray-600">
        ${item.price}
      </p>

      <p>
        Quantity:
        <span className="font-bold ml-2">
          {item.quantity}
        </span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() =>
            dispatch(increaseQuantity(item.id))
          }
          className="bg-green-500 text-white px-3 py-1 rounded-md"
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch(decreaseQuantity(item.id))
          }
          className="bg-yellow-500 text-white px-3 py-1 rounded-md"
        >
          -
        </button>

        <button
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;