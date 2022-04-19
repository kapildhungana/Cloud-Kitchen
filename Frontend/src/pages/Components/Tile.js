import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState } from "react";

const Tile = (props) => {
  const food = props.food;

  var cart = JSON.parse(localStorage.getItem("cart"));
  var fav = JSON.parse(localStorage.getItem("fav"));

  var status = false;
  var statusfav = false;

  if (
    fav.find((item) => {
      return item.name === food.name;
    })
  ) {
    statusfav = true;
  }

  if (
    cart.find((item) => {
      return item.name === food.name;
    })
  ) {
    status = true;
    console.log("item is there");
  }

  const [ordered, setOrdered] = useState(status);
  const [favorited, setFavorited] = useState(statusfav);
        if (!ordered) {
            cart.push([food,1]);
            localStorage.setItem('cart', JSON.stringify(cart));
            NotificationManager.success(`${food.name} is added to the cart!`);
            setOrdered(true);
            status= true;
        }
        else {
            NotificationManager.info(`${food.name} is already there in the cart!`);
        }

  const addToCart = () => {
    if (!ordered) {
      cart.push(food);
      localStorage.setItem("cart", JSON.stringify(cart));
      NotificationManager.success(`${food.name} is added to the cart!`);
      setOrdered(true);
      status = true;
    } else {
      NotificationManager.info(`${food.name} is already there in the cart!`);
    }
  };

  const addToFav = () => {
    //   alert("tofav");
    fav.push(food);
    localStorage.setItem("fav", JSON.stringify(fav));
    NotificationManager.success(`${food.name} is added to the favorites!`);
    setFavorited(true);
    statusfav = true;
  };

  const removeFromFav = () => {

    var filtered = fav.filter(function (foo) {
      return foo.name !== food.name;
    });
    localStorage.setItem("fav", JSON.stringify(filtered));
    NotificationManager.warning(`${food.name} is removed form the favorites!`);
    setFavorited(false);
    statusfav = false;
  };

  const imageurl = `/images/products/${food.imageurl}`;

  return (
    <div className="product">
      <div className="product_image">
        <img src={imageurl} alt={food.imageurl}></img>
      </div>
      <div className="title">
        {/* Golden Pizza!! */}
        {food.name}
      </div>
      <div className="tags">
        {food.tag.map((ta) => (
          <span>{ta}</span>
        ))}
        {/* <span>tag1</span>
                <span>tag1</span> */}
      </div>
      <div className="price">
        <span>${food.price}</span>
        <div className="tileicons">
          {favorited ? (
            <span>
              <img
                className="buy-icon"
                src="/images/heartfilled.png"
                alt="heartfilled"
                // onClick={addToFav}
                onClick={removeFromFav}
              ></img>
            </span>
          ) : (
            <span>
              <img
                className="buy-icon"
                src="/images/heartnotfilled.png"
                alt="heartnotfilled"
                // onClick={removeFromFav}
                onClick={addToFav}
              ></img>
            </span>
          )}

          {ordered ? (
            <span>
              <img
                className="buy-icon"
                src="/images/buytile.png"
                alt="buy"
                onClick={addToCart}
              ></img>
            </span>
          ) : (
            <span>
              <img
                className="buy-icon"
                src="/images/buywhite.png"
                alt="buy"
                onClick={addToCart}
              ></img>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Tile;
