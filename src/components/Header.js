import "./Header.css"
import React from 'react'
import Sale from '../images/sale.jpg';

function Header() {
  return (
    <div className='header' style={{ backgroundImage: `url(${Sale})` }}>
        <h1>Promotion Cost Calculator</h1>
    </div>
  )
}

export default Header