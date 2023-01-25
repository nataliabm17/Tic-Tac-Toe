import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [fields, setField] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [player, setPlayer] = useState(1);

  function updateBoard(event){
    
    const id = event.target.id;
    const id1 = parseInt(id / 10);
    const id2 = id % 10;
    const currentValue = fields[id1][id2];
    var currentMatrix = fields;

    // console.log(id1);
    // console.log(id2);
    // console.log(fields[id1][id2]);

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

    console.log( checkForWinner() );

    // console.log(fields);
    
  }

  function checkForWinner(){
    for( var i=0 ; i<3 ; i++){
      for( var j=0 ; j<3 ; j++){
        if( i === 0 ){
          if( fields[i][j] !== "" && fields[i][j] === fields[i+1][j] && fields[i][j] === fields[i+2][j] ){
            console.log("Winnnnnn");
            return true;
          }
          if( j == 0 ){
            if( fields[i][j] !== "" && fields[i][j] === fields[i+1][j+1] && fields[i][j] === fields[i+2][j+2] ){
              console.log("Winnnnnn");
              return true;
            }
          }
        }
        else if( j === 0 ) {
          if( fields[i][j] !== "" && fields[i][j] === fields[i][j+1] && fields[i][j] === fields[i][j+2] ){
            console.log("Winnnnnn");
            return true;
          }
          if( i === 1){
            if( fields[i][j] !== "" && fields[i][j] === fields[i-1][j+1] && fields[i][j] === fields[i-2][j+2] ){
              console.log("Winnnnnn");
              return true;
            }
          }
        }
      }
    }
    
    return false;
  }

  // function checkBoard(pos, add){
  //   console.log("new set");
  //   console.log(fields[pos]);
  //   console.log(fields[pos+add]);
  //   console.log(fields[pos+(2*add)]);

  //   if(fields[pos] === fields[pos+add] && fields[pos] === fields[pos+(2*add)] && fields[pos !== ""]) {
  //     return true;
  //     console.log("true");
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <div className="App">
        <Header player={player}/>
        <Board fields={fields} updateBoard={updateBoard}/>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
