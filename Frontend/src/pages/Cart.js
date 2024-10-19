import CartComponent from '../Components/CartComponent';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React from 'react';


const Cart = () => {
    if(!localStorage.token || localStorage.usertype!=="customer"){
        window.location.href = `/logincustomer`;
        return;
        }
    return ( 
        <div>
            <Navbar user={"customer"} page={"cartpage"}/>
            <div className="cart1">
            <CartComponent/>
            </div>
            {/* <Footer/> */}

        </div>
        
     );
}
 
export default Cart;