import { ProductsCard } from "./ProductsCard";

export function ProductsGrid({products}) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <ProductsCard key={product.id} product={product}/>
        );
      })}
    </div>
  );
}
