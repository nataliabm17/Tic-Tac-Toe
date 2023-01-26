import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Start from "./components/Start";

function App() {

 

  const [fields, setField] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [playsCounter, setPlaysCounter] = useState(0);


//  useEffect(() => {
//     if (playsCounter > 8) {
//       console.log('Count is more that 8');
//     } else {
//       console.log('Count is less that 8');
//     }
//   }, [playsCounter]);


  function updateBoard(event){
    setWinner(0);
    const id = event.target.id;
    const id1 = parseInt(id / 10);
    const id2 = id % 10;
    const currentValue = fields[id1][id2];
    var currentMatrix = fields;


    if (playsCounter === 9) {
      restartGame();
    }

    if (currentValue === "") {
      setPlaysCounter( (prevValue) => {
        return (prevValue + 1);
      });
    }

    setField( () => {
      if (currentValue === "") {
        if (player === 1){
          currentMatrix[id1][id2] = "X";
          setPlayer(2);
        } else if (player === 2){
          currentMatrix[id1][id2] = "O";
          setPlayer(1);
        }
      }
      return currentMatrix;
    } );

    // console.log(fields);
    // console.log(currentMatrix);

    checkForWinner(currentMatrix);
    
  }

  function restartGame(){
    setField([["", "", ""], ["", "", ""], ["", "", ""]]);
    setPlayer(1);
    setPlaysCounter(0);
  }

  function startGame() {
    restartGame();
    setWinner(0);
  }

  function checkForWinner(matrix){
    for( var i=0 ; i<3 ; i++){
      for( var j=0 ; j<3 ; j++){
        if( i === 0 ){
          if( matrix[i][j] !== "" && matrix[i][j] === matrix[i+1][j] && matrix[i][j] === matrix[i+2][j] ){
            matrix[i][j] === "X" ? setWinner(1) : setWinner(2);
            restartGame();
          }
          if( j == 0 ){
            if( matrix[i][j] !== "" && matrix[i][j] === matrix[i+1][j+1] && matrix[i][j] === matrix[i+2][j+2] ){
              matrix[i][j] === "X" ? setWinner(1) : setWinner(2);
              restartGame();
            }
          }
        }
        else if( j === 0 ) {
          if( matrix[i][j] !== "" && matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+2] ){
            matrix[i][j] === "X" ? setWinner(1) : setWinner(2);
            restartGame();
          }
          if( i === 2){
            if( matrix[i][j] !== "" && matrix[i][j] === matrix[i-1][j+1] && matrix[i][j] === matrix[i-2][j+2] ){
              matrix[i][j] === "X" ? setWinner(1) : setWinner(2);
              restartGame();
            }
          }
        }
      }
    }
  }


  return (
    <div className="App">
      {/* {winner !== 0 ? <Winner winner={winner}/> : <Header player={player}/>} */}
      {/* {playsCounter > 8 ? <Start /> : <Board fields={fields} updateBoard={updateBoard}/>}
       */}

      <Header player={player} start={playsCounter > 8 || winner !== 0}/>
      {(playsCounter > 8 || winner !== 0) ? <Start startGame={startGame} title = {winner === 0 ? "Game has ended with no winner" : "The winner is Player " + player}/> : <Board fields={fields} updateBoard={updateBoard}/> }
    </div>
  );
}

export default App;
