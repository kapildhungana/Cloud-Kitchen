import { useState } from "react";

const Bill = (props)=>{
    const item = props.item;
    const [price,setPrice]=useState(item[1]*item[0].price);
    // setPrice(item[1]*item[0].price);
    return(
        <div className="row">
            <div id="data">{item[0].name}</div>
            <div id="data">$ {price}</div>
        </div>
    )
}

export default Bill;