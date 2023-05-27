import React from 'react';
import GamesItem from "./GamesItem";

const GamesList = ({games}) => {
    return (
        <div className="future_games">
            <div className="f_games">ПРЕДСТОЯЩИЕ ИГРЫ:</div>
            <div className="games_all">
                {games.map((game) =>
                    <GamesItem game={game} key={game.id}/>
                    )}
            </div>
        </div>
    );
};

export default GamesList;