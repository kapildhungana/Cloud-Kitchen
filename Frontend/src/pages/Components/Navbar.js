const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><img src="images/GhostEats.png" alt="GhostEats" /></div>
      <div className="nav_list">
          <ul>
              <li><img src="images/search.png" alt="search" /></li>
              <li><img src="images/people.png" alt="people" /></li>
              <li><img src="images/buy.png" alt="buy" /></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
