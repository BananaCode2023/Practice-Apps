export function FeaturedProperty ({ featuredProperty, featuredPropertyPanelRef, setFeaturedProperty, scrollToTopViewPanel }) {
    
    const formatter = new Intl.NumberFormat('en-US');

    return(
        <div className="real-estate-featured-property" ref={featuredPropertyPanelRef}>
            <img src={featuredProperty.image} alt="" className='real-estate-property-image' />
            <div className="real-estate-property-details">
                <h4>{featuredProperty.addressName}</h4>
                    <h3>${formatter.format(featuredProperty.price)}</h3>
                <div className="real-estate-property-tags">
                    <div className='real-estate-property-tag'>
                        <p>Beds</p>
                        <h5>{featuredProperty.beds}</h5>
                    </div>
                    <div className='real-estate-property-tag'>
                        <p>Baths</p>
                        <h5>{featuredProperty.baths}</h5>
                    </div>
                    <div className='real-estate-property-tag'>
                        <p>sqft</p>
                        <h5>{featuredProperty.sqft}</h5>
                    </div>
                </div>
                <p className="real-estate-property-description">{featuredProperty.description}</p>
                <div className='real-estate-property-buttons'>
                    <button>Contact Agent</button>
                    <button onClick={ async () => {
                        await setFeaturedProperty(null)
                        scrollToTopViewPanel()
                    }}>Back</button>
                </div>
            </div>
        </div>
    )
}