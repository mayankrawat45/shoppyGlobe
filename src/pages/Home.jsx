import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <SearchBar/>
      <ProductList />
    </div>
  );
}

export default Home;