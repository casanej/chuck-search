import { FC } from 'react'
import { RouteObject } from 'react-router-dom';
import { Container } from '../../components';

import chuckNorrisAngry from '../../assets/images/chuck-norris-angry.png';
import { NotFoundStyled } from './index.style';

export const NotFoundPage: FC = () => {

    return <Container alignItems='center' justifyContent='center'>
        <NotFoundStyled>
            <img src={chuckNorrisAngry} alt="No results found" width={300} />
            <h1>Got lost? Go back to where you came from!</h1>
        </NotFoundStyled>
    </Container>;
};

export const notFoundPage: RouteObject = {
    path: '*',
    element: <NotFoundPage />,
}