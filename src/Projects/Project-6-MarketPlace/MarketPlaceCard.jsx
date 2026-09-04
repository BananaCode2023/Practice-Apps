import { Link } from "react-router-dom";

export function MarketPlaceCard({ product, addToCart }) {
  return (
    <div className="marketplace-product-card">
      <img src={product.image} alt="" className="marketplace-product-image" />
      <div className="marketplace-product-details">
        <h5>{product.title}</h5>
        <p className="marketplace-product-price">${product.price.toFixed(2)}</p>
        <p className="marketplace-product-rating">⭐ {product.rating.rate}</p>
        <div className="marketplace-product-detail-footer">
          <button
            className="marketplace-product-button add-to-cart-btn"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
          <Link
            className="marketplace-product-button view-product-btn"
            to={`/marketplace/${product.id}`}
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
