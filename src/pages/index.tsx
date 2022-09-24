import { FC } from 'react'
import { RouterProvider } from 'react-router-dom';
import { NavBar } from '../components';
import { Container } from '../components/atom';
import { appRoutes } from './routes';

export const PagesApp:FC = () => {
    return <>
        <NavBar />
        <Container fullHeight >
            <RouterProvider router={appRoutes} />
        </Container>
    </>
};
