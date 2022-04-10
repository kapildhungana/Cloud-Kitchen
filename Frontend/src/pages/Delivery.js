import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const Delivery=()=>{
    if(!localStorage.token || localStorage.usertype!=="delivarypersonnel"){
        window.location.href = `/register`;
        return;
        }
    return(
        <div >
            <Navbar/>
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
                <div className="deliver-cart">
                        <div className="deliver-cartImagebox">
                            <img src="/images/mushroompizza.png" className="deliver-cartImage"></img>
                        </div>
                        <div className="deliver-cartInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemName">From: Chitoor - 12, 632014</div>
                            <div className="itemName">To: A- Block Mens hostel</div>
                        </div>
                        <div className="take">Take</div>
                    </div>

                    <div className="deliver-cart">
                        <div className="deliver-cartImagebox">
                            <img src="/images/mushroompizza.png" className="deliver-cartImage"></img>
                        </div>
                        <div className="deliver-cartInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemName">From: Chitoor - 12, 632014</div>
                            <div className="itemName">To: A- Block Mens hostel</div>
                        </div>
                        <div className="take">Take</div>
                    </div>
                    
            </div>
            <Footer/>
            
        </div>
    )
};
export default Delivery;