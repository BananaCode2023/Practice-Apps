import { PropertyCard } from './PropertyCard'

export function PropertyGrid ({setFeaturedProperty, scrollToFeaturedPropertyPanel, filteredProperties }) {
    return(
        <div className="real-estate-property-grid">
            
            <PropertyCard 
              filteredProperties={filteredProperties} 
              setFeaturedProperty={setFeaturedProperty} 
              scrollToFeaturedPropertyPanel={scrollToFeaturedPropertyPanel} 
            />

        </div>
    )
}