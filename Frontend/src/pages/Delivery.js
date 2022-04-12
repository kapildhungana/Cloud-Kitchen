import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Board2 from "./Components/Board2";
import { Link } from "react-router-dom";

const Delivery=(props)=>{
    console.log(props)
    if(!localStorage.token || localStorage.usertype!=="deliverypersonnel"){
        window.location.href = `/register`;
        return;
    }
    const type = props.type;
    return(
        <div >
            <Navbar user={"deliverypersonnel"}/>
            {/* <div className="inside">
                center this
            </div> */}
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Delivery</div>
            

            <div className="cartbox">

                {(() => {
                    if (type === "pending") {
                        return (
                            <div className="classtop">
                                <Link to="/home/deliverypersonnel/pending"><span className="toggle active">Pending</span></Link>
                                <Link to="/home/deliverypersonnel/delivering"><span className="toggle">Delivering</span></Link>
                            </div>
                        )
                    }
                    else if (type === "delivering") {
                        return (
                            <div className="classtop">
                                <Link to="/home/deliverypersonnel/pending"><span className="toggle">Pending</span></Link>
                                <Link to="/home/deliverypersonnel/delivering"><span className="toggle active">Delivering</span></Link>
                            </div>
                        )
                    }
                })()}

            {props.order.map((item) => {
                return(
                <Board2 item={item} />
                );
            })}
                    
            </div>
            {/* <Footer/> */}
            
        </div>
    )
};
export default Delivery;