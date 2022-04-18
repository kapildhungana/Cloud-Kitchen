import axios from "axios";

const Board2 = (props) => {
    
    const item = props.item;
    const type = props.type;

    var button_value = "";

    if (type === "pending"){
        button_value = "Take";
    } else if (type === "delivering"){
        button_value = "Delivered";
    }


    const orderDone = async (item) => {

        item.delivery = localStorage.getItem("username");

        if(item.status === 2){
            const order_url = "http://localhost:5000/order/update2";
            await axios.patch(order_url, item);
        }

    }

    const getIt = async () => {
        
        const order_url = "http://localhost:5000/order/address";
        const res = await axios.patch(order_url, item);
        console.log(res.data.cust[0].address[0].country);
        item.addr1 = res.data.cust[0].address[0].country;
        console.log(item);
        
    }

    const getAddress =  () => {

        getIt();
        console.log(item);
        
    }

    return (
        <div className="cart">
            
            {getAddress()}
            <div className="cartImagebox">
                <img src="/images/mushroompizza.png" className="cartImage"></img>
            </div>
            <div className="cartInfo">
                <div className="itemName">Mushroom Pizza</div>
                <div className="itemName">From: {item.addr1}</div>
                <div className="itemName">To: A- Block Mens hostel</div>
            </div>
            <div className="take" onClick = {() => {
                orderDone(item);
            }}>{button_value}</div>
        </div>
    )
}
 
export default Board2;