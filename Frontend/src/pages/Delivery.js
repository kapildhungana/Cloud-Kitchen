import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Board2 from "./Components/Board2";

const Delivery=(props)=>{
    if(!localStorage.token || localStorage.usertype!=="deliverypersonnel"){
        window.location.href = `/register`;
        return;
        }
    return(
        <div >
            <Navbar user={"deliverypersonnel"}/>
            {/* <div className="inside">
                center this
            </div> */}
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Delivery</div>
            

            <div className="deliver-cartbox">
            <div className="classtop">
                <span className="toggle active">Delivery</span>
                <span className="toggle">Cooking</span>
            </div>

            {props.order.map((item) => {
                <Board2 item = {item} />
            })}
                    
            </div>
            <Footer/>
            
        </div>
    )
};
export default Delivery;