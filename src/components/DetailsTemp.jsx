import React from 'react';
import "../style/Details.css"
import RegPopUp from "./RegPopUp";
const DetailsTemp = (props) => {
    return (
        <div className="details">
            <div className="welcome_banner">Добро пожаловать на квиз!</div>
            <div className="details_top">
                <div className="announcement">
                    <div className="game_name"> Theme: {props.gameInfo.Name} <RegPopUp name={props.gameInfo.Name}/> </div>
                    <div className="game_date">Date: {props.gameInfo.Date}</div>
                    <div className="description1"> {props.gameInfo.Description}</div>
                </div>
                <div className="game_pic"><img src={props.gameInfo.Image} className="game_det" /></div>
            </div>
            <div className="details_mid">
                <div className="descriptions"> {props.gameInfo.Description2}</div>
                <div className="description"> {props.gameInfo.Description3}</div>
                <div className="description1"> {props.gameInfo.Description4}</div>

            </div>
        </div>
    );
};

export default DetailsTemp;