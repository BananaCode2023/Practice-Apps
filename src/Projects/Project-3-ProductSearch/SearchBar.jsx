export function SearchBar ({setSearchTerm}) {

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="product-search-header">
            <p><strong>Project 3</strong></p>
            <h2>🛍️ Product Dashboard</h2>
            <input type="text" placeholder="Search Products" onChange={onSearchChange}/>
        </div>
    )
}