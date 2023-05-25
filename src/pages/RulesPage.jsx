import React from 'react';
import "../style/Rules.css"
import heart from '../assets/heart-outline.svg'
import chat from '../assets/chatbubbles-outline.svg'
import phone from '../assets/phone-portrait-outline.svg'
import doc from '../assets/document-outline.svg'
import Logo from '../assets/logo.png'
const RulesPage = () => {
    return (
        <main>
            <div className="top_rul">
                <div className="left_rul">
                    <h3 className="itl shadow1">RULES ON THE QUIZ</h3>
                    <h1 className="itl shadow1">IN FACT, EVERYTHING IS VERY</h1>
                    <h1 className="itl shadow1">SIMPLE</h1>
                    <p className="itl">The most important thing for us is that you have a good time</p>
                    <p className="itl">In addition, do not forget</p>
                    <div className="rules">
                        <div className="rul"><img src={heart} alt="" width="40px" className='aimge' /> DO NOT INTERFERE WITH OTHERS</div>
                        <div className="rul"><img src={chat} alt="" width="40px" className='aimge' /> DON'T SHOUT OUT ANSWERS</div>
                        <div className="rul"><img src={phone} alt="" width="40px" className='aimge' /> DO NOT USE CALCULATORS AND OTHER GADGETS</div>
                        <div className="rul"><img src={doc} alt="" width="40px" className='aimge' /> DO NOT WRITE OFF</div>
                    </div>
                </div>
            </div>
            <p className="big_r mg_shadow">RULES</p>
        </main>
    );
};

export default RulesPage;