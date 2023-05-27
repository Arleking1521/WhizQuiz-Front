import React from 'react';
import RegPopUp from "./RegPopUp";
import {useNavigate} from "react-router-dom";
const GamesItem = (props) => {
    const navigate = useNavigate();
    const handleDetailsClick = () =>{
        navigate(`/details/${props.game.id}`);
    };
    return (
        <div className="gameItem">
            <div className="games" onClick={handleDetailsClick}><img src={props.game.Image} className="game" /></div>
            <div><RegPopUp name={props.game.Name} /></div>
        </div>
    );
};

export default GamesItem;