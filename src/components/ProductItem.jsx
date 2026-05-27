import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <Link className="block mt-3 text-blue-500" to={`/product/${product.id}`}>
        View Details
      </Link>

      <br />

      <button className="bg-black text-white px-4 py-2 rounded-md mt-3 cursor-pointer" onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductItem;