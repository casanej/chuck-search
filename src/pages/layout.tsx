import { FC } from 'react'
import { Outlet, RouteObject } from 'react-router-dom';
import { Container, NavBar } from '../components';

export const Layout:FC = () => {

    return <>
        <NavBar />
        <Container fullHeight >
            <Outlet />
        </Container>
    </>;
};

export const layoutPage: RouteObject = {
    path: '/',
    element: <Layout />,
}