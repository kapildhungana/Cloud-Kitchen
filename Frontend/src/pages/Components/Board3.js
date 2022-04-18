const Board3 = (props) => {
  const item = props.item;
  const imageurl = `/images/products/${item.imageurl}`;

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
    </div>
  );
};

export default Board3;
