import HomePage from "../pages/HomePage";
import RulesPage from "../pages/RulesPage";
import CommentsPage from "../pages/CommentsPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/home', element: HomePage, exact: true},
    {path: '/rules', element: RulesPage, exact: true},
    {path: '/comments', element: CommentsPage, exact: true},
    {path: '/details/:id', element: GameDetailsPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
]