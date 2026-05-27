import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <div className="p-6">
        <SearchBar />
      </div>

      <ProductList />
    </div>
  );
}

export default Home;