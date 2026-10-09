import { Link } from "react-router-dom";
import "./MarketPlace.css";

export function MarketPlaceHeader({ currentCart }) {

  const totalQuantity = currentCart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="market-place-header">
      <Link className="market-place-logo" to="/marketplace">
        <p><strong>Project 6</strong></p>
        <h3>🛍️ Marketplace</h3>
      </Link>

      <div className="market-place-column">
        <Link to="/marketplace" className="browse">
          Browse
        </Link>
        <Link to="/cart" className="cart">
          🛒 Cart <span className="cart-quantity">{totalQuantity}</span>
        </Link>
      </div>
    </div>
  );
}
