import React from "react";

function Start(props){
   return( <div className="headers">
    <h1>{props.title}</h1>
    <p>Click on the button to start</p>
    <button type="button" onClick={props.startGame}>Start Game</button>
   </div>); 
}

export default Start;