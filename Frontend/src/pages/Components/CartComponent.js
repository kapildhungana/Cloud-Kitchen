import CartItem from "./CartItem";
import Bill from "./Bill";
import { Link } from "react-router-dom";
import axios from "axios";

const CartComponent = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const orderRequested = () => {
        const order_url = "http://localhost:5000/order/save";
        console.log(order_url)
        const ordDet = [];
        const fd = JSON.parse(localStorage.getItem('cart'));
        fd.map((f)=>{
            ordDet.push({
                name : f.name,
                quantity : 1
            })
        })

        const orderDetail = {
            customer : localStorage.getItem("username"),
            kitchenEmployee : "",
            deliveryPersonnel : "",
            orderDetails : ordDet,
            status : 0, 
        }

        axios.post(order_url,orderDetail);
    }
    const applyChange = ()=>{
        //localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href ="/cart";
    }
    
    return ( 
        <div className = "cartContainer">
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Cart</div>
            <div className="cartBody">
                <div className="cartItems">
                    {cart.map((c)=>(
                        <CartItem item={c} key={c[0].id}/>
                    ))}

                    <div className=" row">
                                <div className="Button2" onClick={applyChange}>Apply</div>
                    </div>

                </div>

                <div className="cartBill">
                    <div className="Billinner">
                        {cart.map((c)=>(
                            <Bill item={c} key={c[0].id}/>
                        ))}
                        <div className=" row">
                                <div className="Button" onClick={orderRequested}>Checkout</div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
     );
}
 
export default CartComponent;