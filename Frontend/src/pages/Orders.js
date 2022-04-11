import Navbar from "./Components/Navbar";
import Board1 from "./Components/Board1";
import { Link } from "react-router-dom";

const Orders = (props) => {

    if (!localStorage.token || localStorage.usertype !== "kitchenemployee") {
        window.location.href = `/register`;
        return;
    }

    const type = props.type;

    return (
        <div >
            {/* <div className="inside">
                center this
            </div> */}
            <Navbar user={"kitchenemployee"} />
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Orders</div>


            <div className="cartbox">

                {(() => {
                    if (type === "pending") {
                        return (
                            <div className="classtop">
                                <Link to="/home/kitchenemployee/pending"><span className="toggle active">Pending</span></Link>
                                <Link to="/home/kitchenemployee/cooking"><span className="toggle">Cooking</span></Link>
                            </div>
                        );
                    }
                    else if (type === "cooking") {
                        return (
                            <div className="classtop">
                                <Link to="/home/kitchenemployee/pending"><span className="toggle">Pending</span></Link>
                                <Link to="/home/kitchenemployee/cooking"><span className="toggle active">Cooking</span></Link>
                            </div>
                        );
                    }
                })()}


                {props.order.map((item) => (
                    <Board1 item={item} />
                ))};

            </div>
            {/* <Footer/> */}

        </div>
    )
};
export default Orders