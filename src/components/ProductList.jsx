import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.50', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 5, name: 'Orange', price: '$0.80', category: 'Fruits', inStock: false }
]

const ProductList = ({categoryFilter, addToCart}) => {
  const filteredProducts = categoryFilter === 'All' ? sampleProducts : sampleProducts.filter(product => product.category === categoryFilter)
  return (
    <div>
      <h2>Available Products</h2>
      <div className='product-list-container'>
        {filteredProducts.length === 0 ? <p>No products available in this category.</p> : filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* TODO: Filter sample data using selected category */}
    
    </div>
  )
}

export default ProductList
