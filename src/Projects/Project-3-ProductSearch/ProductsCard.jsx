export function ProductsCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt="" className="product-image" />
      <div className="product-details">
        <h5>{product.title}</h5>
        <p>{
            product.description.length > 150 
            ? product.description.slice(0, 150) + '...'
            : product.description
        }</p>
        <div className="product-detail-footer">
          <p>${product.price.toFixed(2)}</p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
