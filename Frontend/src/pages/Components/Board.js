import Tile from "./Tile";
import React, { useState, useEffect } from 'react';

const Board = (props) => {
    const fooddetail=props.fooddetail;
    const title=fooddetail.title;
    const foods=fooddetail.food;

    const [filteredFoods, setFilteredFoods] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setFilteredFoods(
            foods.slice(0,3)
        )
      },[]);

    const expand=()=>{
        setOpen(!open)
    }

    return ( 
        <div className="board">
        <h1 className="board_title"> {title} </h1>
        
        {open? (<div className="content">
            {foods.map((food)=> (
                <Tile food={food} key={food._id}/>
            )
        )}
        </div>) :
        (<div className="content">
        {filteredFoods.map((food)=> (
            <Tile food={food} key={food._id}/>
        )
    )}
    </div>) 
        }
        
        <div className="Button2" onClick={() => expand()}>{open ? 'View Less' : 'View More'}</div>
        </div>
        
     );
}

export default Board;