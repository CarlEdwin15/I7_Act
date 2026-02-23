import logo from "../assets/TM_Logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="TimeMinder Logo" className="logo-img" />
        <span className="logo-text">TimeMinder</span>
      </div>

      <div className="nav-links">
        <span className="active">Overview</span>
        <span>Calendar</span>
        <span>Habits</span>
        <span>List</span>
      </div>

      <div className="nav-icons">
        <div className="icon-circle"></div>
        <div className="icon-circle"></div>
      </div>
    </div>
  );
}

export default Navbar;
