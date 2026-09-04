
import { ProductsGrid } from './ProductsGrid'
import { SearchBar } from './SearchBar'
import './ProductSearch.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function ProductSearch () {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')


    useEffect( () => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setProducts(response.data)  // ← Fetch ALL once
                setLoading(false)
            } catch (error) {
                console.error('Error fetching:', error)
                setLoading(false)
            }
        }

        fetchProductData();

        // dependency array is empty since we are not adding products in product dashboard. In simple term, there will be no rerendering happening just once.
    },[])

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
        <>
            <title>Product Search App</title>

            <section className="product-search-section">
                <SearchBar setSearchTerm={setSearchTerm}/>
                    
                {loading && (
                    <div className='loading'>
                        <div className="spinner"></div>
                        <p>Loading products...</p>
                    </div>
                )}

                {filteredProducts.length === 0 ? (
                    <div className="empty-state">
                        <p>No products found 🔍</p>
                    </div>
                ) : (
                    <ProductsGrid products={filteredProducts} />
                )}

                <div className="product-search-instructions">
                    <h5>How this works</h5>
                    <ul>
                        <li>{`useEffect(() => {}, []) runs once on mount`}</li>
                        <li>Dependency array controls when effect runs</li>
                        <li>async/await for API calls inside useEffect</li>
                        <li>Try/catch for error handling</li>
                        <li>Multiple loading/error/success states</li>
                        <li>.filter() for client-side search</li>
                        <li>Reusable ProductCard component receives props</li>
                    </ul>
                </div>
            </section>
        </>
    )
}