import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <header className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold">
        ShoppyGlobe
      </h1>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : ""
          }
        >
          Cart ({cartItems.length})
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;