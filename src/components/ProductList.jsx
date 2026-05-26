import useFetchProducts from "../hooks/useFetchProducts";
import Loader from "./Loader";

function ProductList() {
  const {
    products,
    loading,
    error,
  } = useFetchProducts();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <h3 key={product.id}>
          {product.title}
        </h3>
      ))}
    </div>
  );
}

export default ProductList;