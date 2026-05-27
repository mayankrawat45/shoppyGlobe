import { useDispatch, useSelector } from "react-redux";

import { setSearchTerm } from "../redux/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const searchTerm = useSelector(
    (state) => state.search.searchTerm
  );

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) =>
        dispatch(setSearchTerm(e.target.value))
      }
      className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export default SearchBar;