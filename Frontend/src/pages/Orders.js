import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from "axios";
import Board1 from "./Components/Board1";

const Orders=  (props) =>{
    console.log(props);

    if(!localStorage.token || localStorage.usertype!=="kitchenemployee"){
        window.location.href = `/register`;
        return;
    }
    
    
    return(
        <div >
            {/* <div className="inside">
                center this
            </div> */}
            <Navbar user={"kitchenemployee"}/>
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Orders</div>
            

            <div className="cartbox">
                <div className="classtop">
                    <span className="toggle active">Delivery</span>
                    <span className="toggle">Cooking</span>
                </div>

                {props.order.map((item)=> (
                    <Board1 item = {item} />
                ))};
                    
            </div>
            <Footer/>
            
        </div>
    )
};
export default Orders