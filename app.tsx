import { FC } from 'react'
import { PagesApp } from './pages';
import { AppProviders } from './providers';

export const App:FC = () => {

    return <AppProviders>
        <PagesApp />
    </AppProviders>;
};
