// Librairies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Style
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <Link className="Header-Link" to="/">Home</Link>
        </div>
    )
}

export default Header