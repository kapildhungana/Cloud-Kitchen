import { useState } from "react";

const CartItem = (props) => {
  const item = props.item;
  const [qty, setQty] = useState(item[1]);
  var cart = JSON.parse(localStorage.getItem('cart'));

  const deleteItem = ()=>{
    
    var filtered = cart.filter(function(foo){ 
     return foo[0].name !== item[0].name;
  });

  console.log("clicked");
  localStorage.setItem('cart', JSON.stringify(filtered));
  window.location.href ="/cart";
  }
  
  const imageurl = `/images/products/${item.imageurl}`;
  
  return (
    <div className="cartItem">
        <div className="trash" onClick={deleteItem}><img src="images/trash.png" alt="trash" /></div>
      <div className="itemImage">
        <img src={imageurl}></img>
      </div>
      <div className="itemInfo">
        {/* <div className="itemNumbers"> */}
          <div className="itemName">{item[0].name}</div>
        {/* </div> */}
        <div className="itemNumbers">
          <div className="itemQuantity">
            <div className="quantityButton">
              <button onClick={()=>{
                if(qty>1){
                  var filtered = cart.filter(function(foo){ 
                    return foo[0].name !== item[0].name;
                 });
                 filtered.push([item[0],qty-1]);
                 localStorage.setItem('cart', JSON.stringify(filtered));
                 setQty(qty-1);
                }
                
               
                // for(let i=0;i<cart.length;i++){
                //   if(cart[i][0].name===item[0].name)
                //   cart[i][1]=qty;
                //   item[1]=qty;
                //   localStorage.setItem('cart',JSON.Stringify(cart));
                //   break;
                // }
              }
                }>
                <p>-</p>
              </button>
            </div>
            <div className="quantity">
              <p>{qty}</p>
            </div>
            <div className="quantityButton">
              <button onClick={()=>{
                var filtered = cart.filter(function(foo){ 
                  return foo[0].name !== item[0].name;
               });
               filtered.push([item[0],qty+1]);
               localStorage.setItem('cart', JSON.stringify(filtered));
               setQty(qty+1);
                // for(let i=0;i<cart.length;i++){
                //   if(cart[i][0].name===item[0].name)

                //   cart[i][1]=qty;
                //   item[1]=qty;
                //   localStorage.setItem('cart',JSON.Stringify(cart));
                //   break;
                // }
              }}> 
                <p>+</p>
              </button>
            </div>
          </div>
          <div className="itemPrice">
            <p>$ {item[0].price}</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CartItem;
