import React from 'react';
import "../style/About.css"
import Logo from "../assets/logoWhizQuiz.jpg"
import {Placemark, YMaps, Map} from "react-yandex-map";
const AboutPage = () => {
    return (
        <main>
            <div className="name_logo">
                <div>
                    <h1 className="name ash">EAZY QUIZY</h1>
                    <div className="map frdivst">
                        <YMaps>
                            <Map defaultState={{center: [43.235009, 76.909964], zoom: 17}}
                                 style={{ width: '100%', height: '400px' }}>
                                <Placemark geometry={[43.235009, 76.909964]}/></Map>
                        </YMaps>
                    </div>
                    <p>Almaty, 34A Manas str.</p>
                </div>

            </div>
            <div className="contact">
            <h1 className="name ash fs">CONTACT US:</h1>
            <p>E-mail: eazyquizy@quiz.com</p>
            <p>Phone Number: +7 (727) 320-00-00</p>
            </div>
        </main>
    );
};

export default AboutPage;