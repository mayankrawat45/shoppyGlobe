import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="">
      <img
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

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductItem;