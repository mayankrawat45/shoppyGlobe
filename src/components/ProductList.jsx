import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector(state => state.search.searchTerm)

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h2 className="text-red-500 text-2xl">
          {error}
        </h2>
      </div>
    );
  }

  const filteredProducts = products.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (filteredProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h2 className="text-2xl font-semibold">
          No Products Found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl mx-5 font-bold">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;