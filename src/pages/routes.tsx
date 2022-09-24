import { FC } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Container, NavBar } from '../components';
import { jokePage } from './joke';
import { mainPage } from './main';
import { notFoundPage } from './not-found';
import { searchPage } from './search';

export const Layout:FC = () => {

    return <>
        <NavBar />
        <Container fullHeight >
            <Outlet />
        </Container>
    </>;
};

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [mainPage, jokePage, searchPage, notFoundPage]
    }
])