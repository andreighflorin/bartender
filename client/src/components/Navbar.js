import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Bartender</h1>
        </Link>
        <Link to="/add">Add new order</Link>
      </nav>
  </div>
  )
}