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

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;