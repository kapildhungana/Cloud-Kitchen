import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Components/LoginPage";
import HomePage from "./pages/Components/HomePage";
import Delivery from "./pages/Delivery"
import Orders from "./pages/Orders"
import Favorites from "./pages/Favorites";
import RegisterPage from "./pages/Components/RegisterPage";

function App() {
  const url = "http://localhost:5000/";
  const get_food3_url = "http://localhost:5000/products3";
  const get_order_url = "http://localhost:5000/order/";

  const [details, setDetails] = useState("");

  const [foodDetails, setFoodDetails] = useState([]);

  const [kporder ,setkpOrder] = useState([]);

  const [fdorder ,setfdOrder] = useState([]);

  const [cookorder ,setcookOrder] = useState([]);

  const [delivorder ,setdelivOrder] = useState([]);

  // const [cart, setCart] = useState([]);
  
  const getOrder = async() => {
    const orders = await axios.get(get_order_url);
    const kpOrders = [], cookOrders = [], fdOrders = [], delivOrders = [] ;
    orders.data.forEach(ord => {
        if(ord.status === 0){
          kpOrders.push(ord);
        }
        else if(ord.status === 1){
          cookOrders.push(ord);
        }
        else if(ord.status === 2){
          fdOrders.push(ord);
        }
        else if(ord.status === 3){
          delivOrders.push(ord);
        }
    });
    setkpOrder(kpOrders);
    setcookOrder(cookOrders);
    setfdOrder(fdOrders);
    setdelivOrder(delivOrders);

  }

  const getFoodData = async() => {
    const products3 = await axios.get(get_food3_url);
    setFoodDetails(products3.data);
  }
  
  useEffect(()=> getOrder());
  useEffect(() => getFoodData());
  const getData = async () => {
    const message = await axios.get(url);
    console.log(message);
    setDetails(message.data);
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/check" element={
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button onClick={getData}>Get Data</button>
              <br />
              <br />
              {details}
            </div>
        }></Route>
        <Route path="/" element={<LandingPage/>}/> 
        <Route path="/register" element={<RegisterPage/>}/> 
        <Route path="/logincustomer" element={<LoginPage user={"customer"} />}/> 
        <Route path="/loginkitchenemployee" element={<LoginPage user={"kitchenemployee"}/>}/> 
        <Route path="/logindeliverypersonnel" element={<LoginPage user={"deliverypersonnel"}/>}/> 
        <Route path="/home" element={<HomePage fooddetails={foodDetails}/>}/> 
        <Route path="/home/customer" element={<HomePage fooddetails={foodDetails} />}/> 
        <Route path="/cart" element={<Cart/>}/> 
        {/* <Route path="/home/kitchenemployee" element={<Orders order = {kporder} type={"pending"}/>}/>   */}
        <Route path="/home/kitchenemployee/pending" element={<Orders order = {kporder} type={"pending"}/>}/> 
        <Route path="/home/kitchenemployee/cooking" element={<Orders order = {cookorder} type={"cooking"}/>}/> 
        <Route path="/home/deliverypersonnel/pending" element={<Delivery order = {fdorder} type={"pending"}/>}/> 
        <Route path="/home/deliverypersonnel/delivering" element={<Delivery order = {delivorder} type={"delivering"}/>}/> 
        <Route path="/favorites" element={<Favorites/>}/> 
        <Route path="/profile" element={<Profile/>}/>



        
        {/* <Route path="/registerpage" element={<RegisterPage/>}/>
          <Route path="/mainpage" element={<MainPage/>}/> */}
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
