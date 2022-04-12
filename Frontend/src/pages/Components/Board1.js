import axios from "axios";

const Board1 = (props) => {
  const item = props.item;
  const orderDone = async (item) => {
    if (item.status === 0) {
      const order_url = "http://localhost:5000/order/update0";
      await axios.patch(order_url, item);
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
      <div className="cartInfo">
        <div className="itemName">{item.orderDetails[0].name}</div>
        <div className="itemName">Quantity Take</div>
      </div>
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
