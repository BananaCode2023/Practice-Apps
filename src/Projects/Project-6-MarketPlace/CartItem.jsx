export function CartItem({ currentCart, removeFromCart, updateQuantity }) {
  return (
    <>
      <tbody className="cart-item">
        {currentCart.map((item) => {
          return (
            <tr className="product-info" key={item.productId}>
              <td className="product-name">
                <img src={item.productImg} alt="" />
                {item.productName}
              </td>
              <td className="product-price">${item.price.toFixed(2)}</td>
              <td className="product-quantity">
                <input
                  type="number"
                  value={item.quantity}
                  min='1'
                  max='99'
                  onChange={(event) => {
                    const newQuantity = Number(event.target.value)
                    
                    if(newQuantity <= 0){
                      removeFromCart(item.productId);
                    }
                    updateQuantity(item.productId, newQuantity);
                  }}
                />
              </td>
              <td className="product-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="product-btn">
                <button
                  className="del-btn"
                  onClick={() => {
                    removeFromCart(item.productId);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
