
const Bill = (props)=>{
    const item = props.item;
    return(
        <div className="row">
            <div id="data">{item.name}</div>
            <div id="data">$ {item.price}</div>
        </div>
    )
}

export default Bill;