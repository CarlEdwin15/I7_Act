import logo from "../assets/TM_Logo.png";
import overview from "../assets/icons/overview.png";
import calendar from "../assets/icons/calendar.png";
import habits from "../assets/icons/habits.png";
import list from "../assets/icons/list.png";
import settings from "../assets/icons/settings.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="TimeMinder Logo" className="logo-img" />
        <span className="logo-text">TimeMinder</span>
      </div>

      <div className="nav-links">
        <div className="logo">
          <img src={overview} alt="Navbar Overview" className="nav-overview" />
          <span className="active">Overview</span>
        </div>

        <div className="logo">
          <img src={calendar} alt="Navbar Calendar" className="nav-calendar" />
          <span>Calendar</span>
        </div>

        <div className="logo">
          <img src={habits} alt="Navbar Habits" className="nav-habits" />
          <span>Habits</span>
        </div>

        <div className="logo">
          <img src={list} alt="Navbar List" className="nav-list" />
          <span>List</span>
        </div>
      </div>

      <div className="nav-icons">
        <div className="icon-circle">
          <img src={settings} alt="Navbar Settings" className="nav-settings" />
        </div>

        <div className="nav-profile">
          <div className="profile-pic"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
