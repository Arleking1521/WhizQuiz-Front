import {
    HOME_ROUTE,
    RULES_ROUTE,
    COMMENTS_ROUTE,
    ABOUT_ROUTE, DETAILS_ROUTE
} from "./const"
import HomePage from "../pages/HomePage";
import RulesPage from "../pages/RulesPage";
import CommentsPage from "../pages/CommentsPage";
import AboutPage from "../pages/AboutPage";
import GameDetailsPage from "../pages/GameDetailsPage";

export const publicRoutes =[{
    path: HOME_ROUTE, Component: HomePage
}, {
    path: RULES_ROUTE, Component: RulesPage
},{
    path: COMMENTS_ROUTE, Component: CommentsPage
},{
    path: ABOUT_ROUTE, Component: AboutPage
},{
    path: DETAILS_ROUTE, Component: GameDetailsPage
}]