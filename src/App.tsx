import React, { useEffect } from 'react';
import './App.css';
import Cell from './Components/Cell/Cell';
import {useState} from 'react';
import ShowTurn from './Components/ShowTurn/showTurn';





const App : React.FC = () => {

  const [stateBoard,setBoard] = useState(Array(9).fill(null));
  const [marker,setMarker] = useState(true);
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  
  const calculateWinner = ()=>{
    
    for(let i = 0;i<winningCombinations.length;i++){
      const [a,b,c] = winningCombinations[i];
      if(stateBoard[a] && stateBoard[a]===stateBoard[b] && stateBoard[a]===stateBoard[c]){
        return true
      }
    }
    return false
  }

  const changeMarker  = (id:number) =>{

    // console.log('Hi from App');
    let updateBoard = [...stateBoard];
    updateBoard[id] = marker?'X':'O';
    setBoard(updateBoard)
    setMarker(!marker)
  }
  
  const winner = calculateWinner();

  return (


    <div className="App">

      {/* <ShowTurn marker />  */}
      {
        winner ? <h1>You win</h1>:
         <section className="board">
         {
           stateBoard.map((el,id)=><Cell key={id} marker={marker} changeMarker={()=>changeMarker(id)}>{el}</Cell>)
         }
 
       </section>
      }
     
     {/* <div>h1</div>
     <div>h2</div> */}
    </div>
  );
}

export default App;
