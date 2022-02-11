import React from 'react';
import classes from './showTurn.classes.module.css';


interface Props{
    marker : boolean
}
const ShowTurn : React.FC<Props> = (props) =>{


    return(
        <div className={classes.showTurn}>
            <span className={props.marker?'x':'o'}>Player 1 </span> 
            <span>Player 2</span>
        </div>
    )
}

export default ShowTurn;