import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux";

const CartItem = ({item}) => {
  const dispatch=useDispatch();
  return (
    <div className="border">
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={()=>dispatch(increaseQuantity(item.id))} >+</button>
      <button onClick={()=>dispatch(decreaseQuantity(item.id))} >-</button>
      <button onClick={()=>dispatch(removeFromCart(item.id))} >Remove</button>
    </div>
  )
}

export default CartItem