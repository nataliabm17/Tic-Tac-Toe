import React from "react";

function Winner(props) {
    return <div className="headers">
        <h1> The winner is player {props.winner}.</h1>
        <p>Click on the board to start a new game.</p>
    </div>
}

export default Winner;