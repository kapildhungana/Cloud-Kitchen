const CartItem = (props) => {
  const item = props.item;
  const imageurl = `/images/products/${item.imageurl}`;
  return (
    <div className="cartItem">
        <div className="trash"><img src="images/trash.png" alt="trash" /></div>
      <div className="itemImage">
        <img src={imageurl}></img>
      </div>
      <div className="itemInfo">
        {/* <div className="itemNumbers"> */}
          <div className="itemName">{item.name}</div>
        {/* </div> */}
        <div className="itemNumbers">
          <div className="itemQuantity">
            <div className="quantityButton">
              <button>
                <p>-</p>
              </button>
            </div>
            <div className="quantity">
              <p>8</p>
            </div>
            <div className="quantityButton">
              <button>
                <p>+</p>
              </button>
            </div>
          </div>
          <div className="itemPrice">
            <p>$ {item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
