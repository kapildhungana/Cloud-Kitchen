import { Link } from "react-router-dom";
const Navbar = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usertype");
    localStorage.removeItem("cart");
  };

  const user = props.user;
  const page = props.page;

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/home"}>
          <img src="/images/GhostEats.png" alt="GhostEats" />
        </Link>
      </div>

      {(() => {
        if (user === "customer") {
          return (
            <div className="nav_list">
              <ul>
                {(() => {
                  if (page === "homepage") {
                    return (
                      <li>
                        <Link to={"/home"}>
                          <img src="/images/home_red.png" alt="home" />
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link to={"/home"}>
                          <img src="/images/home.png" alt="home" />
                        </Link>
                      </li>
                    );
                  }
                })()}

                {(() => {
                  if (page === "profilepage") {
                    return (
                      <li>
                        <Link to={"/profile"}>
                          <img src="/images/people_red.png" alt="people_red" />
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link to={"/profile"}>
                          <img src="/images/people.png" alt="people" />
                        </Link>
                      </li>
                    );
                  }
                })()}

                {(() => {
                  if (page === "favorites") {
                    return (
                      <li>
                        <Link to={"/favorites"}>
                          <img src="/images/star_red.png" alt="star_red" />
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link to={"/favorites"}>
                          <img src="/images/star.png" alt="star" />
                        </Link>
                      </li>
                    );
                  }
                })()}

                {(() => {
                  if (page === "cartpage") {
                    return (
                      <li>
                        <Link to={"/cart"}>
                          <img src="/images/buy_red.png" alt="buy_red" />
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link to={"/cart"}>
                          <img src="/images/buy.png" alt="buy" />
                        </Link>
                      </li>
                    );
                  }
                })()}

                <li>
                  <img src="/images/logout.png" alt="logout" onClick={logout} />
                </li>
              </ul>
            </div>
          );
        } else if (user === "kitchenemployee" || user === "deliverypersonnel") {
          return (
            <div className="nav_list">
              <ul>
                <li>
                  <img src="/images/logout.png" alt="logout" onClick={logout} />
                </li>
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Navbar;
