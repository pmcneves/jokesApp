import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex align-items-center">
            <ul>
                <NavLink to="/jokes" className="navbar-item" activeClassName="navbar-item--active">Jokes</NavLink>
                <NavLink to="/library" className="navbar-item" activeClassName="navbar-item--active">Library</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
