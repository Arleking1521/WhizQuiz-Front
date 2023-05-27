import React, {useEffect, useState} from 'react';
import Logo from "../assets/logoWhizQuiz.jpg";
import {Container} from "react-bootstrap";
import "../style/Home.css"
import "../style/Load.css"
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
                    <div className="name" >Что такое квизы?</div>
                    <p className='Wiaq'>
                        В двух словах, это интеллектуальное и развлекательное соревнование.
                        Тематическая, классическая, музыкальная, киношная или спортивная викторина.
                        Вам задают вопросы, и вы на них отвечаете, чем больше правильных ответов, тем больше шансов на победу.</p>
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