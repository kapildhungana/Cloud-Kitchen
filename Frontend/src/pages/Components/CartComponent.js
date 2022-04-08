import CartItem from "./CartItem";
import Bill from "./Bill";

const CartComponent = () => {
    // const cart = [{
    //     id: 1,
    //     tag : ["veg","all time snack"],
    //     name : "Pasta Carbonara",
    //     price : 25, 
    //     imageurl : "random1",           
    // },
    // {
    //     id:2,
    //     tag : ["veg","kids special"],
    //     name : "Mushroom Risotto",
    //     price : 25, 
    //     imageurl : "random2",
    // },
    // {
    //     id:3,
    //     tag : ["veg","most loved"],
    //     name : "Margherita Pizza",
    //     price : 25, 
    //     imageurl : "random3",
    // },];
    const cart = JSON.parse(localStorage.getItem('cart'));
    return ( 
        <div className = "cartContainer">
            <hr className="dividerLine"></hr>
            <div className="cartHeading">Cart</div>
            <div className="cartBody">
                <div className="cartItems">
                    {cart.map((c)=>(
                        <CartItem item={c} key={c.id}/>
                    ))}

                </div>

                <div className="cartBill">
                    <div className="Billinner">
                    {cart.map((c)=>(
                        <Bill item={c} key={c.id}/>
                    ))}
                     <div className=" row">
                            <div className="Button">Checkout</div>
                       </div>

                    </div>
                    
                    
                   
                </div>
            </div>
        </div>
     );
}
 
export default CartComponent;

{/* <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartItem">
                        <div className="itemImage">
                            <img src="images/mushroompizza.png"></img>
                        </div>
                        <div className="itemInfo">
                            <div className="itemName">Mushroom Pizza</div>
                            <div className="itemNumbers">
                                <div className="itemQuantity">
                                    <div className="quantityButton"><button><p>-</p></button></div>
                                    <div className="quantity"><p>2</p></div>
                                    <div className="quantityButton"><button><p>+</p></button></div>
                                </div>
                                <div className="itemPrice">
                                    <p>$6.00</p>
                                </div>
                            </div>
                        </div>
                    </div> */}