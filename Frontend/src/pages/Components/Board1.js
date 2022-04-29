import axios from "axios";

const Board1 = (props) => {
  const item = props.item;
  const type = props.type;
  // const imageurl = `/images/products/${props.item.orderDetails[0].imageurl}`;
  const imageurl = `/images/products/springrolls.jpg`;

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


  var button_value = "";

  if (type === "pending"){
    button_value = "Take";
  } else if (type === "cooking"){
    button_value = "Cooked";
  }

  return (
    <div className="cart">
      <div className="cartImagebox">
        {/* <img src="/images/mushroompizza.png" className="cartImage"></img> */}
        <img src={imageurl} className="cartImage"></img>
      </div>
      <div className="cartInfoContainer">
      {item.orderDetails.map((item1) => {
        return (
          <div className="cartInfo">
            <div className="itemName">{item1.name}</div>
            <div className="itemName">{item1.quantity}</div>
          </div> 
        );
      })}
      </div>

      <div
        className="take"
        onClick={() => {
          orderDone(item);
        }}
      >
        {button_value}
      </div>
    </div>
  );
};

export default Board1;
