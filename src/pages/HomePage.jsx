import React, {useEffect, useState} from 'react';
import Logo from "../assets/logoWhizQuiz.jpg";
import {Container} from "react-bootstrap";
import "../style/home.css"
import GamesService from "../API/GamesService";
import GamesList from "../components/GamesList";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../hookes/useFetching";

const HomePage = () => {
    const [games, setGames] = useState([])
    const [fetchGames, isGamesLoading, gamesError] = useFetching(async () => {
        const games = await  GamesService.getAll()
        setGames(games)
    })

    useEffect( () => {
        fetchGames()
    }, [])

    return (
        <Container className='main'>
            <div className='name_logo'>
                <div>
                    <div className="name" >What is a quiz?</div>
                    <p className='Wiaq'>
                        In a nutshell, this is an intellectual and entertaining competition.
                        Thematic, classical, musical, movie or sports quiz.
                        You are asked questions and you answer them, the more correct answers, the more chances to win.</p>
                </div>
                <div>
                    <img src={Logo} className='home_logo'/>
                </div>
            </div>
            {
                gamesError && <div className="load">${gamesError}</div>
            }
            {isGamesLoading ? <div className="load"><Loader/></div> :
                games.length ? <GamesList games={games}/> : <div className="f_games">Нет заплатированных игр!</div>
            }



        </Container>
    );
};

export default HomePage;