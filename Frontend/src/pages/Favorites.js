import Navbar from "./Components/Navbar";
import Board3 from "./Components/Board3";

const Favorites = () => {
  if (!localStorage.token || localStorage.usertype !== "customer") {
    window.location.href = `/register`;
    return;
  }

  const fav = JSON.parse(localStorage.getItem("fav"));

  var isempty;

  if (fav.length === 0) {
    isempty = true;
  } else {
    isempty = false;
  }

  return (
    <div>
      <Navbar user={"customer"} page={"favorites"} />
      <div className="cart1">
        <div className="cartContainer">
          <hr className="dividerLine"></hr>
          <div className="cartHeading">Favorites</div>
          {(() => {
            if (isempty) {
              return (
                <div className="cartBody favoriteBody">
                    You have no favorite food items yet!
                </div>
              );
            } else {
              return (
                <div className="cartBody favoriteBody">
                  {/* <div className="cartbox"> */}
                    {fav.map((item) => {
                      return <Board3 item={item} />;
                    })}
                  {/* </div> */}
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};
export default Favorites;
