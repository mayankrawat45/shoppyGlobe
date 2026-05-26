import useFetchProducts from "../hooks/useFetchProducts";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

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
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;