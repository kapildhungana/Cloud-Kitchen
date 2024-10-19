import { Link } from "react-router-dom";
import React from "react";

const LPBanner = () => {
    return ( 
        <div className="banner">
            <div className="banner_logo">GhostEats</div>
            <div className="banner_content">
                <div className="banner_heading"><h1>Great Food makes<br/>Great Day</h1></div>
                <div className="banner_para"><p>We have some amazing food waiting for you.</p>
                <p>Order now.</p></div>
                <div className="find_food_button">
                    <Link to={"/logincustomer"}><button>Find Food</button></Link>   
                </div>
            </div>
        </div>
     );
}
 
export default LPBanner;