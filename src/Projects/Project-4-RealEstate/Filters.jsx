
export function Filters ({minPrice, maxPrice, bedrooms, setMinPrice, setMaxPrice, setBedrooms}) {

    const hasFilters = minPrice !== 0 || maxPrice !== 1000000 || bedrooms !== ''

    return(
        <div className="real-estate-filters">
            <div className="real-estate-input-form">
                <label>Min Price</label>
                <input 
                    type="number" 
                    min="0" 
                    max="1000000"
                    value={minPrice}
                    onChange={(event) => {
                        setMinPrice(Number(event.target.value))
                    }}
                />
            </div>
            <div className="real-estate-input-form">
                <label>Max Price</label>
                <input 
                    type="number" 
                    min="600000" 
                    max="99000000"
                    value={maxPrice}
                    onChange={(event) => {
                        setMaxPrice(Number(event.target.value))
                    }}
                />
            </div>
            <div className="real-estate-input-form">
                <label>Bedrooms (leave empty for all)</label>
                <input 
                    type="number" 
                    placeholder="Any"
                    value={bedrooms}
                    onChange={(event) => {
                        setBedrooms(event.target.value === '' ? '' : Number(event.target.value))
                    }}
                />
            </div>
            <div className="real-estate-input-button">
                <button 
                    className={hasFilters ? 'btn-active' : 'btn-inactive'}
                    onClick={() => {
                        setMinPrice(0)
                        setMaxPrice(1000000)
                        setBedrooms('')
                    }}
                >
                    Reset Filters
                </button>
            </div>
        </div>
    )
}