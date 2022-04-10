
const Tile= (props) => {

    const food=props.food;

    const addToCart = ()=>{
        var cart= JSON.parse(localStorage.getItem('cart'));
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    }

    return(
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
                 food.tag.map((ta)=>
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
                <span>
                    <img className="buy-icon" src="/images/buywhite.png" alt="buy" onClick={addToCart}></img>
                </span>
            </div>
        </div>
    );
};
export default Tile;