import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Board3 = (props) => {
  const item = props.item;
  const imageurl = `/images/products/${item.imageurl}`;

  const orderDone = (item) => {
    const fav = JSON.parse(localStorage.getItem("fav"));
    var filtered = fav.filter(function (foo) {
      return foo.name !== item.name;
    });
    localStorage.setItem("fav", JSON.stringify(filtered));
    NotificationManager.warning(`${item.name} is removed form the favorites!`);
  };

  return (
    <div className="cart">
      <div className="cartImagebox">
        <img src={imageurl} className="cartImage"></img>
      </div>
      <div className="cartInfoContainer">
        <div className="cartInfo">
          <div className="itemName">{item.name}</div>
          <div className="itemName">$ {item.price}</div>
        </div>
      </div>
      <div
        className="take"
        onClick={() => {
          orderDone(item);
        }}
      >
        Remove
      </div>
    </div>
  );
};

export default Board3;
