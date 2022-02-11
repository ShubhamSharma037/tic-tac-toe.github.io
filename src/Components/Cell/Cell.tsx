import React, { useEffect, useState } from 'react';
import classes from './Cell.module.css'


interface Props{
    marker : boolean,
    changeMarker : ()=>void,
    children : string
}

  

const Cell : React.FC<Props> = (props) =>{
 
    let [state,setState] =  useState(!props.marker)
   
    
    useEffect(()=>{
        // console.log('UseEffect '+props.children+' '+state)
    })
    
    

    const showMarker = () =>{

        // console.log('showMarker '+props.children+ ' '+state);
        setState(true)
        props.changeMarker();
    }
    
    return(
        <div className={classes.cell}>
            <span onClick={showMarker} className={state?classes.show:classes.hide}>{props.children}</span>
        </div>
    );
}


export default Cell;     