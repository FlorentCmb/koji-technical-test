// Librairies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Style
import './Header.css'

const Header = () => {
    return (
        <nav className="Header">
            <Link className="Header-Link" to="/">Home</Link>
        </nav>
    )
}

export default Header