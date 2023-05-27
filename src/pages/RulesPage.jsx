import React from 'react';
import "../style/Rules.css"
import heart from '../assets/heart-outline.svg'
import chat from '../assets/chatbubbles-outline.svg'
import phone from '../assets/phone-portrait-outline.svg'
import doc from '../assets/document-outline.svg'

const RulesPage = () => {
    return (
        <main>
            <div className="top_rul">
                <div className="left_rul">
                    <h3 className="itl shadow1">Правила нашего квиза</h3>
                    <h1 className="itl shadow1">ВСЕ ОЧЕНЬ ПРОСТО</h1>
                    <p className="itl">Самое главное для нас - это чтобы вы хорошо провели время</p>
                    <p className="itl">Кроме того, не забывайте</p>
                    <div className="rules">
                        <div className="rul"><img src={heart} alt="" width="40px" className='aimge'/> НЕ МЕШАЙТЕ ДРУГИМ
                            ИГРОКАМ
                        </div>
                        <div className="rul"><img src={chat} alt="" width="40px" className='aimge'/> НЕ ВЫКРИКИВАЙТЕ
                            ОТВЕТЫ
                        </div>
                        <div className="rul"><img src={phone} alt="" width="40px" className='aimge'/> НЕ ПОЛЬЗОВАТЬСЯ
                            КАЛЬКУЛЯТОРАМИ И ДРУГИМИ ГАДЖЕТАМИ
                        </div>
                        <div className="rul"><img src={doc} alt="" width="40px" className='aimge'/> НЕ СПИСЫВАТЬ</div>
                    </div>
                </div>
            </div>
            <p className="big_r mg_shadow">ПРАВИЛА</p>
        </main>
    );
};

export default RulesPage;