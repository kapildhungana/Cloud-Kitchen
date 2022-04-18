import axios from "axios";

const Board1 = (props) => {
  console.log(props);
  const item = props.item;
  console.log(item);

  const orderDone = async (item) => {
    const user = localStorage.getItem("username");
    item.kitchen = user;

    if (item.status === 0) {
      const order_url = "http://localhost:5000/order/update0";
      await axios.patch(order_url, item, user);
    } else if (item.status === 1) {
      const order_url = "http://localhost:5000/order/update1";
      await axios.patch(order_url, item);
    }
  };
  return (
    <div className="cart">
      <div className="cartImagebox">
        <img src="/images/mushroompizza.png" className="cartImage"></img>
      </div>

      {item.orderDetails.map((item1) => {
        return (
          <div className="cartInfo">
            <div className="itemName">{item1.name}</div>
            <div className="itemName">{item1.quantity}</div>
          </div>
        );
      })}

      <div
        className="take"
        onClick={() => {
          orderDone(item);
        }}
      >
        Take
      </div>
    </div>
  );
};

export default Board1;
