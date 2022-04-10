
const CartItem = (props)=>{
    const item= props.item;
    return(
            <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">{item.name}</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>8</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </div>
            </div>

    )
};

export default CartItem;


