import { createBrowserRouter } from 'react-router-dom';
import { jokePage } from './joke';
import { mainPage } from './main';
import { searchPage } from './search';

export const appRoutes = createBrowserRouter([
    mainPage, jokePage, searchPage
])