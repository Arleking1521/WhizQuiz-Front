import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hookes/useFetching";
import GamesService from "../API/GamesService";
import Loader from "../UI/Loader/Loader";
import DetailsTemp from "../components/DetailsTemp";
import "../style/Load.css"

const GameDetailsPage = () => {
    const params = useParams()
    const [game, setGame] = useState({});
    const [fetchGameById, isLoading, error] = useFetching(async () => {
        const response = await GamesService.getById(params.id)
        setGame(response.data);
    })
    useEffect(() => {
        fetchGameById(params.id);
    }, [])
    return (
        <div>
            {isLoading ? <div className="load"><Loader/></div> :
                <div>
                    <DetailsTemp gameInfo={game}/>
                </div>}

        </div>
    );
};

export default GameDetailsPage;