import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
        width="200"
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      <br />

      <button className="cursor-pointer" onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductItem;