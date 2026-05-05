import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [isDarkMode, setIsDarkMode] = useState(false)
  // TODO: Implement state for cart management
const [cartItems, setCartItems] = useState([])
  // TODO: Implement state for category filtering
const [selectedFilter, setSelectedCategory] = useState('All')
const addToCart = (product) => {
  setCartItems([...cartItems, product])
}
  return (
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
