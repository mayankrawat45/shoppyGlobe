import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch product"
          );
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

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

  return (
    <div className="p-6 flex flex-col md:flex-row gap-10">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-[400px] rounded-xl shadow-md"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-600">
          {product.description}
        </p>

        <h2 className="text-3xl font-semibold">
          ${product.price}
        </h2>

        <button
          onClick={() =>
            dispatch(addToCart(product))
          }
          className="bg-black text-white px-6 py-3 rounded-md w-fit"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;