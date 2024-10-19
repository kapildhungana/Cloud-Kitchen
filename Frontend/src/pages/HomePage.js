// import { useState } from "react";
import Navbar from "../Components/Navbar";
import Board from "../Components/Board";
import Offer from "../Components/Offer";
import Footer from "../Components/Footer";
import {NotificationContainer, NotificationManager} from "react-notifications";
import React from "react";


const HomePage = (props)=>{
    if(!localStorage.token || localStorage.usertype!=="customer"){
    window.location.href = `/register`;
    return;
    }
    const fooddetails=props.fooddetails;
    // console.log(fooddetails);
    return (
        <div>
            <Navbar user={"customer"} page={"homepage"}/>
            <Offer/>
            <NotificationContainer/>
            {fooddetails.map((fooddetail)=> (
                <Board fooddetail={fooddetail} key={fooddetail._id}/>
            )
        )};
           
            <Footer/>
            
        </div>
    );
}

export default HomePage;