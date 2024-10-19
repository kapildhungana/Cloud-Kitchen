import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Board1 from "../Components/Board1";
import React from 'react';


const Orders = (props) => {

    if (!localStorage.token || localStorage.usertype !== "kitchenemployee") {
        window.location.href = `/register`;
        return;
    }

    const type = props.type;

    return (
        <div >
            <Navbar user={"kitchenemployee"} />
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Orders</div>
            <div className="cartbox">
                {(() => {
                    if (type === "pending") {
                        return (
                            <>
                            <div className="classtop">
                                <Link to="/home/kitchenemployee/pending"><span className="toggle active">Pending</span></Link>
                                <Link to="/home/kitchenemployee/cooking"><span className="toggle">Cooking</span></Link>
                            </div>
                            {props.order.map((item) => (
                                <Board1 item={item} type={type}/>
                            ))};
                            </>
                        );
                    }
                    else if (type === "cooking") {
                        return (
                            <>
                            <div className="classtop">
                                <Link to="/home/kitchenemployee/pending"><span className="toggle">Pending</span></Link>
                                <Link to="/home/kitchenemployee/cooking"><span className="toggle active">Cooking</span></Link>
                            </div>

                            {
                                props.order.map((item1)=>{
                                    if(item1.status == 1 && item1.kitchenEmployee == localStorage.getItem("username")){
                                        return(
                                            <Board1 item={item1} type={type}/>
                                        )
                                        
                                    }
                                })
                            }
                            </>
                        );
                    }
                })()}
            </div>
        </div>
    )
};
export default Orders