import { MarketPlaceCard } from "./MarketPlaceCard";

export function MarketPlaceGrid({ products, addToCart }) {
  return (
    <div className="marketplace-products-grid">
      {products.map((product) => {
        return (
          <MarketPlaceCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}
