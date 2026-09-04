export function MarketPlaceFilters({ setSearchTerm, setSortBy }) {
  return (
    <div className="marketplace-filters-container">
      <h3>Browse Products</h3>

      <div className="marketplace-filters">
        <div className="marketplace-input">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search products..."
            className="market-place-search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="marketplace-input">
          <label>Sort By</label>
          <select
            className="market-place-filter"
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
          >
            <option value="featured">Featured</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
