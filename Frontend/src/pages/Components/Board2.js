import axios from "axios";

const Board2 = (props) => {
    
    const item = props.item;
    console.log(item);

    const orderDone = async (item) => {

        if(item.status === 2){
            const order_url = "http://localhost:5000/order/update2";
            await axios.patch(order_url, item);
        }

    }

    return (
        <div className="cart">
            <div className="cartImagebox">
                <img src="/images/mushroompizza.png" className="cartImage"></img>
            </div>
            <div className="cartInfo">
                <div className="itemName">Mushroom Pizza</div>
                <div className="itemName">From: Chitoor - 12, 632014</div>
                <div className="itemName">To: A- Block Mens hostel</div>
            </div>
            <div className="take" onClick = {() => {
                orderDone(item);
            }}>Take</div>
        </div>
    )
}
 
export default Board2;