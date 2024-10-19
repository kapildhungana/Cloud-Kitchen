
// import LoginPage from "./Components/LoginPage";
import LPBanner from "../Components/LPBanner";
import LPOurServices from "../Components/LPOurServices";
import LPStatistics from "../Components/LPStatistics";
import LPSubscribe from "../Components/LPSubscribe";
import Footer from "../Components/Footer";
import React from 'react';


// const LandingPage = () => {
//     return ( 
//         <div className="loginbody">
//             <LoginPage/>
//         </div>
//     )
// }
            
// import LPBanner from "./Components/LPBanner";
// import LPOurServices from "./Components/LPOurServices";
// import LPStatistics from "./Components/LPStatistics";
// import LPSubscribe from "./Components/LPSubscribe";

const LandingPage = () => {
    return ( 
        <div>
            <LPBanner/>
            <LPOurServices/>
            <LPStatistics/>
            <LPSubscribe/>
     <div>
      <Footer/>
    </div>
        </div>
     );
}
 
export default LandingPage;
