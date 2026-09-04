import "./MarketPlace.css";

import { MarketPlaceFilters } from "./MarketPlaceFilters";
import { MarketPlaceGrid } from "./MarketPlaceGrid";
import { useEffect, useState } from "react";
import axios from "axios";

export function MarketPlace({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "featured") {
        return a.id - b.id;
      }

      if (sortBy === "priceLowHigh") {
        return a.price - b.price;
      }

      if (sortBy === "priceHighLow") {
        return b.price - a.price;
      }

      if (sortBy === "ratingHighLow") {
        return b.rating.rate - a.rating.rate;
      }

      return 0;
    });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <title>Marketplace App</title>

      <section className="marketplace-section">
        <MarketPlaceFilters
          setSearchTerm={setSearchTerm}
          setSortBy={setSortBy}
        />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p>No products found 🔍</p>
          </div>
        ) : (
          <MarketPlaceGrid products={filteredProducts} addToCart={addToCart} />
        )}
      </section>
    </>
  );
}
