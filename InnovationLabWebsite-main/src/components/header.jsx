import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    };

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

    return (
        <header className="header sticky top-0">
            <div className="header__left">
                <img src="./assets/c_logo.png" alt="logo" className="header__logo"/>
                <img src="./assets/iitlogo_dark.png" alt="IITPKD logo" className="header__logo" />
                {/* <h1 className="header__title">CSQUARE IITPKD</h1> */}
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="/" className="header__nav-link">Home</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/about" className="header__nav-link">About us</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/facilities" className="header__nav-link">Facilities</a>
                    </li>
                    {/* <li className="header__nav-item">
                        <a href="/log_registration" className="header__nav-link">Log/Equipment Register</a>
                    </li> */}
                    <li className="header__nav-item">
                        <a href="/ta_schedule" className="header__nav-link">TA</a>
                    </li>
                    {/* <li className="header__nav-item">
                        <a href="/projects" className="header__nav-link">Admin Login</a>
                    </li> */}
                    {/* <li className="header__nav-item">
                        <a href="/external_user_register" className="header__nav-link">External User register</a>
                    </li> */}
                    {/* <li className="header__nav-item"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="/#" className="header__nav-link">Others<FontAwesomeIcon icon={faCaretDown} className="header__dropdown-icon" />
                    </a>
                    {isDropdownOpen && (
                        <ul className="header__dropdown-menu">
                            <li><a href="/link1">Option 1</a></li>
                            <li><a href="/link2">Option 2</a></li>
                            <li><a href="/link3">Option 3</a></li>
                        </ul>
                    )}
                    </li> */}
                </ul>
            </nav>
            <div className="header__right">
                <form className="header__search-form" onSubmit={handleSearchSubmit}>
                    <input type="text" className="header__search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                    <button type="submit" className="header__search-btn">
                        <FontAwesomeIcon icon={faSearch} className="header__search-icon" />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;