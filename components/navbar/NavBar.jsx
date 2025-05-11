import React, { useState } from 'react';
import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = ({ setSideNavbarFunc, sideNavbar }) => {
    const [navbarModal, setNavbarModal] = useState(false);

    const handleClickModal = () => {
        setNavbarModal(prev => !prev);
    };

    const sideNavbarFunc = () => {
        setSideNavbarFunc(!sideNavbar);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbarHamberger" onClick={sideNavbarFunc}>
                    <MenuIcon sx={{ color: 'white' }} />
                </div>
                <YouTubeIcon sx={{ fontSize: '30px', color: 'white' }} className="navbar-logo" />
            </div>

            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input type='text' placeholder='Search' className='navbar_searchBoxInput' />
                    <SearchIcon sx={{ fontSize: '28px', color: 'white' }} className='navbar_searchIcon' />
                </div>
            </div>

            <div className="navbar-right">
                <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                <button onClick={handleClickModal} className='navbar-signInButton'>Sign In</button>
                {navbarModal && (
                    <div className="navbar-modal">
                        <div className="navbar-modal-option">Profile</div>
                        <div className="navbar-modal-option">Logout</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;