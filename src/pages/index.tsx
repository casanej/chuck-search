import { FC } from 'react'
import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './routes';

export const PagesApp:FC = () => {
    return <RouterProvider router={appRoutes} />;
};
