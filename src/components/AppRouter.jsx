import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import RulesPage from "../pages/RulesPage";
import CommentsPage from "../pages/CommentsPage";
import AboutPage from "../pages/AboutPage";
import GameDetailsPage from "../pages/GameDetailsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path={'/home'} element={<HomePage />} />
            <Route exact path={'/rules'} element={<RulesPage />} />
            <Route exact path={'/comments'} element={<CommentsPage />} />
            <Route exact path={'/about'} element={<AboutPage />} />
            <Route exact path={'/details/:id'} element={<GameDetailsPage />} />
        </Routes>
    );
};

export default AppRouter;