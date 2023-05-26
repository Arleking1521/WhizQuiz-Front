import React from 'react';
import PopUp from "./PopUp";
const GamesItem = (props) => {
    return (
        <div className="gameItem">
            <div className="games"><img src={props.game.Image} className="game" /></div>
            <div><PopUp name={props.game.Name} /></div>
        </div>
    );
};

export default GamesItem;