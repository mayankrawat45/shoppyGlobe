import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

function ProductList() {
  const {products,loading,error} = useFetchProducts();
  const searchTerm=useSelector(state=>state.search.searchTerm)

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredProducts=products.filter(({title})=>title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>Products</h1>

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