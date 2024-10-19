import React from "react";

const Offer=()=>{
    let addMomoToCart = () => console.log("adding momo to cart")
    return(
    <div className="out">
         {/* <div className="offer-outer">
            <div className="left">
                <div className="left-in">
                    <div className="bold">Todays Special</div>
                    <div className="bold">Mo: Mo:</div>
                    <div >The goodness of Mo: Mo: with hot soup for this cold day. Its nature’s demand.</div>
                    <div className="Button3" onClick={addMomoToCart}>OrderNow</div>
                </div>
            </div>
            <div className="right">
                <img src="/images/momo.jpg" alt="offer"></img>
            </div>
        </div> */}


         <div className="flex">
         <div className="offer-outer">
            <div className="left">
                <div className="left-in">
                    <div className="bold">Todays Special</div>
                    <div className="bold">Jhol Mo: Mo:</div>
                    <div >The goodness of Mo: Mo: with hot soup for this cold day. Its nature’s demand.</div>
                    <div className="Button3">OrderNow</div>
                </div>
            </div>
            <div className="right">
                <img src="/images/food.jpg" alt="offer"></img>
            </div>
        </div>
         </div>

         <div className="flex">
         <div className="offer-outer">
            <div className="left">
                <div className="left-in">
                    <div className="bold">Todays Special</div>
                    <div className="bold">Jhol Mo: Mo:</div>
                    <div >The goodness of Mo: Mo: with hot soup for this cold day. Its nature’s demand.</div>
                    <div className="Button3">OrderNow</div>
                </div>
            </div>
            <div className="right">
                <img src="/images/food.jpg" alt="offer"></img>
            </div>
        </div>
         </div>
    </div>
     
    )
}

export default Offer;