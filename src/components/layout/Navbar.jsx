import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// We then passed a title prop which will indicate the title of the application
function Navbar({ title }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                Navbar
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