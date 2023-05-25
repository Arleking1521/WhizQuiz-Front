import React from "react";
import "./style/App.css"
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Router, Routes} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RulesPage from "./pages/RulesPage";
import AboutPage from "./pages/AboutPage";
import CommentsPage from "./pages/CommentsPage";
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/rules' element={<RulesPage />} />
                <Route exact path='/comments' element={<CommentsPage />} />
                <Route exact path='/about' element={<AboutPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
