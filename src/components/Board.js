import React from "react";

function Board(props){

    return(<div className="board">
        <div className="field1" id="00" onClick={props.updateBoard}><p>{props.fields[0][0]}</p></div>
        <div className="field2" id="10" onClick={props.updateBoard}><p>{props.fields[1][0]}</p></div>
        <div className="field3" id="20" onClick={props.updateBoard}><p>{props.fields[2][0]}</p></div>
        <div className="field4" id="01" onClick={props.updateBoard}><p>{props.fields[0][1]}</p></div>
        <div className="field5" id="11" onClick={props.updateBoard}><p>{props.fields[1][1]}</p></div>
        <div className="field6" id="21" onClick={props.updateBoard}><p>{props.fields[2][1]}</p></div>
        <div className="field7" id="02" onClick={props.updateBoard}><p>{props.fields[0][2]}</p></div>
        <div className="field8" id="12" onClick={props.updateBoard}><p>{props.fields[1][2]}</p></div>
        <div className="field9" id="22" onClick={props.updateBoard}><p>{props.fields[2][2]}</p></div>
    </div>);
}

export default Board;