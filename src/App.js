import React from "react";
import "./style/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
