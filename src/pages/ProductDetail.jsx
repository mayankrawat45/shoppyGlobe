import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] =useState(null);

  const [loading, setLoading] =useState(true);

  const [error, setError] =useState("");

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
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
      />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>${product.price}</h2>
    </div>
  );
}

export default ProductDetail;