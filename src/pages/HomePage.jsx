import React from 'react';
import Logo from "../assets/logoWhizQuiz.jpg";
import {Container} from "react-bootstrap";
import "../style/home.css"

import HP from "../assets/Harry.jpg"
import Marvel from "../assets/Marvel.jpg"
import LoRaH from "../assets/LordOfRings.jpg"
import Avatar from "../assets/AvatarA.jpg"
import PopUp from "../components/PopUp";

const HomePage = () => {
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
            <div className="future_games">
              <div className="f_games">GAMES:</div>
              <div className="games_all">
                <div className="games"><img src={HP} className="game" /></div>
                <div className="games"><img src={Marvel} className="game" /></div>
                <div className="games"><img src={LoRaH} className="game" /></div>
                <div className="games"><img src={Avatar} className="game" /></div>
              </div>
              <div className='buttons'>
                <PopUp name='Harry Potter' />
                <PopUp name='Marvel' />
                <PopUp name='Lord of rings & Hobbits' />
                <PopUp name='Avatar: Legend about Aang' />
              </div>

            </div>


        </Container>
    );
};

export default HomePage;