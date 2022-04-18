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
    <div className="cartContainer">
      <Navbar user={"customer"} page={"favorites"} />
      <hr className="dividerLine"></hr>
      <div className="cartHeading">Favorites</div>
      <div className="cartBody">
      <div className="cartbox">You have no favorite food items yet!</div>
      {(() => {
        if (isempty) {
        //   return (
            <div className="cartbox">You have no favorite food items yet!</div>
        //   );
        } else {
          return (
            <div className="cartbox">
              {(() => {
                fav.map((item) => {
                  return(<Board3 item={item} />);
                });
              })()}
            </div>
          );
        }
      })()}
      </div>
    </div>
  );
};
export default Favorites;
