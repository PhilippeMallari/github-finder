import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// We then passed a title prop which will indicate the title of the application
function Navbar({ title }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub size={33} className="inline pr-2" />
                    <Link to="/" className="text-lg font-bold align-middle">
                        {title}
                    </Link>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                        Home
                    </Link>
                    <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                        About
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

// The default props will set a default property/passed argument as a title which is Github Finder
Navbar.defaultProps = {
    title: 'Github Finder'
}

// The proptypes will indicate what type of data type
Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar