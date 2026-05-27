import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="min-h-[80vh]">
      <div className="p-6">
        <SearchBar />
      </div>

      <ProductList />
    </div>
  );
}

export default Home;