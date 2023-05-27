import React from 'react';
import "../style/About.css"
import {Placemark, YMaps, Map} from "react-yandex-map";
const AboutPage = () => {
    return (
        <main>
            <div className="name_logo">
                <div>
                    <h1 className="name ash">WHIZ QUIZ</h1>
                    <div className="map frdivst">
                        <YMaps>
                            <Map
                                defaultState={{center: [43.235009, 76.909964], zoom: 17}}
                                style={{ width: '100%', height: '400px' }}
                            >
                                <Placemark geometry={[43.235009, 76.909964]}/>
                            </Map>
                        </YMaps>
                    </div>
                    <p>Almaty, Манаса 34А.</p>
                </div>

            </div>
            <div className="contact">
            <h1 className="name ash fs">НАШИ КОНТАКТЫ:</h1>
            <p>E-mail: WhizQuiz@quiz.com</p>
            <p>Телефон: +7 (707) 998-02-68</p>
            </div>
        </main>
    );
};

export default AboutPage;