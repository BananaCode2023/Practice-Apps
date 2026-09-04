export function PropertyCard ({ filteredProperties, setFeaturedProperty, scrollToFeaturedPropertyPanel }) {

    const formatter = new Intl.NumberFormat('en-US');

    return(
        <>
            {filteredProperties.map( (property) => {
                return(
                    <div key={property.id} className="real-estate-property-card">
                        <img src={property.image} alt="" className="real-estate-property-image" />
                        <div className="real-estate-property-details">
                            <h4>{property.addressName}</h4>
                            <h3>${formatter.format(property.price)}</h3>
                            <div className="real-estate-property-tags">
                                <div className='real-estate-property-tag'>{property.beds} Beds</div>
                                <div className='real-estate-property-tag'>{property.baths} Baths</div>
                                <div className='real-estate-property-tag'>{property.sqft} sqft</div>
                            </div>
                            <button 
                            onClick={() => {
                                setFeaturedProperty(property)
                            }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}