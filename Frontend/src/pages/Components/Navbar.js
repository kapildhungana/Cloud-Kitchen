import { Link } from "react-router-dom";
const Navbar = ()=> {
  const logout=()=>{
    console.log("clicked");
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
    localStorage.removeItem('cart');
  }
  return (
    <div className="navbar">
      <div className="logo">
      <Link to={"/home"}><img src="/images/GhostEats.png" alt="GhostEats" /></Link></div>
      <div className="nav_list">
          <ul>
              {/* <li><img src="/images/search.png" alt="search" /></li> */}
              <li><Link to={"/profile"}><img src="/images/people.png" alt="people" /></Link></li>
              <li> <Link to={"/cart"}><img src="/images/buy.png" alt="buy" /></Link></li>
              <li>
              <img src="/images/logout.png" alt="logout" onClick={logout}/>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
