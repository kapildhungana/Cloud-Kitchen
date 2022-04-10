import { NotificationContainer, NotificationManager } from "react-notifications";
import { useState } from "react";

const Tile = (props) => {

    const food = props.food;

<<<<<<< HEAD
    var cart = JSON.parse(localStorage.getItem('cart'));
    var status=false;

    if (cart.find((item)=>{
    return item.name==food.name;
    })) {
        status =true;
        console.log("item is there");
    }
    
    const [ordered, setOrdered] = useState(status);

    const addToCart = () => {

        if (!ordered) {
            cart.push(food);
            localStorage.setItem('cart', JSON.stringify(cart));
            NotificationManager.success(`${food.name} is added to cart!!`);
            setOrdered(true);
            status= true;
        }
        else {
            NotificationManager.info(`${food.name} already there in cart!!`);
        }

        // console.log(cart);
=======
    const addToCart = async()=>{
        var cart= JSON.parse(localStorage.getItem('cart'));
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
        
>>>>>>> fa91372a378a0a4c300d8f2b54099a63297460e3
    }

    return (
        <div className="product">
            <div className="product_image">
                <img src="/images/food.jpg" alt="food"></img>
            </div>
            <div className="title">
                {/* Golden Pizza!! */}
                {food.name}
            </div>
            <div className="tags">
                {
                    food.tag.map((ta) =>
                        <span>{ta}</span>
                    )}
                {/* <span>tag1</span>
                <span>tag1</span> */}
            </div>
            <div className="price">
                <span>
                    ${food.price}
                    {/* 5$ */}
                </span>

                {ordered ?
                    (<span>
                        <img className="buy-icon" src="/images/buy.png" alt="buy" onClick={addToCart}></img>
                    </span>) :
                    (<span>
                        <img className="buy-icon" src="/images/buywhite.png" alt="buy" onClick={addToCart}></img>
                    </span>)
                }

            </div>
        </div>
    );
};
export default Tile;