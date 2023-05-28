import React, {useEffect, useState} from "react";
import "./style/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false)
    })

    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
            }}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
