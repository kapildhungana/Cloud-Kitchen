

const Board1 = (props) => {
    const item = props.item;
    // console.log(item);
    const orderDone = (item) => {
        
    }

    return (
        <div className="cart">
            <div className="cartImagebox">
                <img src="/images/mushroompizza.png" className="cartImage"></img>
            </div>
            <div className="cartInfo">
                <div className="itemName">{item.orderDetails[0].name}</div>
                <div className="itemName">Quantity Take</div>
            </div>
            <div className="take" onClick={orderDone(item)}>Take</div>
        </div>
    )
}

export default Board1;