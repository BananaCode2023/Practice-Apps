import "./MarketPlace.css";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export function Cart({ currentCart, removeFromCart, updateQuantity }) {
  const totalQuantity = currentCart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = currentCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const taxPrice = totalPrice * 0.1;

  return (
    <>
      <title>Cart</title>

      <section className="cart-section">
        <div className="cart-container">
          {currentCart.length === 0 ? (
            <div className="empty-cart">
              <h4>cart is empty</h4>
              <Link to="/marketplace">Browse Items</Link>
            </div>
          ) : (
            <>
              <table className="cart-items">
                <thead className="cart-items-header products-info">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody className="cart-border"></tbody>

                <CartItem
                  currentCart={currentCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              </table>
              <div className="products-totals">
                <div className="product-total product-total-items">
                  <h6>Items</h6>
                  <h3>{totalQuantity}</h3>
                </div>
                <div className="product-total product-total-subtotal">
                  <h6>Subtotal</h6>
                  <h3>${totalPrice.toFixed(2)}</h3>
                </div>
                <div className="product-total product-total-tax">
                  <h6>Tax (10%)</h6>
                  <h3>${taxPrice.toFixed(2)}</h3>
                </div>
                <div className="product-total product-total-order-price">
                  <h6>Total</h6>
                  <h3>${(totalPrice + taxPrice).toFixed(2)}</h3>
                </div>
              </div>
              <button className="checkout-btn">Checkout</button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
