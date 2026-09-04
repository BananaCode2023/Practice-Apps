import './RealEstate.css'
import { Filters } from './Filters';
import { PropertyGrid } from './PropertyGrid';
import { FeaturedProperty } from './FeaturedProperty';
import { RealEstateHeader } from './RealEstateHeader';
import { useEffect, useRef, useState } from 'react';
import mockListings from './utils/properties.json'

export function RealEstate() {

  const [mockData] = useState(mockListings)
  const [featuredProperty, setFeaturedProperty] = useState(null)
  const [filteredProperties, setFilteredProperties] = useState([])

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [bedrooms, setBedrooms] = useState('')

  const featuredPropertyPanelRef = useRef(null)
  const topViewRef = useRef(null)

  const scrollToFeaturedPropertyPanel = () => {
    featuredPropertyPanelRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const scrollToTopViewPanel = () => {
    topViewRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    
    const filterProperties = mockData.filter((property) => {
        return (
          property.price >= minPrice && property.price <= maxPrice && 
          (
            bedrooms === '' || property.beds === Number(bedrooms)
          )
        )
      }
    )

    setFilteredProperties(filterProperties)


  }, [minPrice, maxPrice, bedrooms, mockData])

  useEffect(() => {
      if (featuredProperty) {
          setTimeout(() => {
              featuredPropertyPanelRef.current?.scrollIntoView({
                  behavior: 'smooth'
              })
          }, 0)
      }
  }, [featuredProperty])

  return (
    <>
      <title>Real Estate App</title>

      <section className="real-estate-section" ref={topViewRef}>
        <div className="real-estate-container">
            
            <RealEstateHeader/>

            <Filters 
            minPrice={minPrice}
            maxPrice={maxPrice}
            bedrooms={bedrooms}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setBedrooms={setBedrooms}
            />

            <PropertyGrid 
              mockData={mockData} 
              setFeaturedProperty={setFeaturedProperty} 
              scrollToFeaturedPropertyPanel={scrollToFeaturedPropertyPanel} 
              filteredProperties={filteredProperties}
            />

            {featuredProperty && 
              <FeaturedProperty 
                featuredProperty={featuredProperty} 
                featuredPropertyPanelRef={featuredPropertyPanelRef} 
                setFeaturedProperty={setFeaturedProperty}
                scrollToTopViewPanel={scrollToTopViewPanel}
              />}

        </div>
      </section>

    </>
  );
}
