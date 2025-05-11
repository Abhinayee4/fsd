import React from 'react';
import './sideNavbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HistoryIcon from '@mui/icons-material/History';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SideNavBar = ({ sideNavbar }) => {
  return (
    <div className={sideNavbar ? 'vistro-sideNavbar' : 'vistro-sideNavbarHide'}>
      <div className="nav-section">
        <h4 className="nav-title">Vistro Navigation</h4>
        <div className="nav-item"><DashboardIcon /><span>Dashboard</span></div>
        <div className="nav-item"><SubscriptionsIcon /><span>Subscriptions</span></div>
        <div className="nav-item"><BookmarkIcon /><span>Bookmarks</span></div>
        <div className="nav-item"><FavoriteBorderIcon /><span>Favourites</span></div>
        <div className="nav-item"><HistoryIcon /><span>History</span></div>
        <div className="nav-item"><WhatshotIcon /><span>Trending</span></div>
        <div className="nav-item"><VideoLibraryIcon /><span>My Videos</span></div>
        <div className="nav-item"><AddBoxIcon /><span>Create</span></div>
      </div>

      <div className="nav-section">
        <h4 className="nav-title">More from StreamSphere</h4>
        <div className="nav-item"><HelpOutlineIcon /><span>Help</span></div>
        <div className="nav-item"><FeedbackOutlinedIcon /><span>Feedback</span></div>
        <div className="nav-item"><SettingsOutlinedIcon /><span>Settings</span></div>
      </div>
    </div>
  );
};

export default SideNavBar;
