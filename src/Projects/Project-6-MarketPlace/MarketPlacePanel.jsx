import "./MarketPlace.css";
import bagImg from "../../assets/bagImg.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MarketPlaceGrid } from "./MarketPlaceGrid";

export function MarketPlacePanel({addToCart}) {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );

        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <title>{product.title}</title>

      <section className="marketplace-section">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="marketplace-panel-container">
            <img src={product.image} alt="" />
            <div className="marketplace-panel-details-container">
              <h2>{product.title}</h2>
              <h3 className="marketplace-panel-price">${product.price}</h3>
              <p className="marketplace-panel-rating">
                ⭐ {product.rating?.rate}
              </p>
              <p className="marketplace-panel-details">{product.description}</p>
              <div className="marketplace-quantity">
                <button
                  onClick={() => {
                    setQuantity(Math.max(1, quantity - 1))
                  }}
                >
                  -
                </button>
                <input type="number" value={quantity} readOnly className="quantity-changer"/>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                >
                  +
                </button>
              </div>
              <div className="marketplace-panel-detail-footer">
                <button 
                  className="marketplace-panel-button add-to-cart-btn"
                  onClick={() => {
                    addToCart(product,quantity);
                  }}
                >
                  Add to Cart
                </button>
                <Link
                  to={"/marketplace"}
                  className="marketplace-panel-button back-btn"
                >
                  ← Back
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
