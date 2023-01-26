import React from "react";

function Header(props){
    return(<div className="headers">
        <h1>Tic Tac Toe!</h1>
        {props.start == 0 ? <p>It's player {props.player} turn</p> : null }     
    </div>);
}

export default Header;