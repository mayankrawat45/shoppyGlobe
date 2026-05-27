import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        ShoppyGlobe
      </h1>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;