import { RouteObject, useLoaderData } from 'react-router-dom';
import { ChuckNorrisIO } from '../../services';
import { ChuckNorrisJoke, ChuckNorrisResponse } from '../../services/ChuckNorrisIO/models';
import { JokePageContent, JokePageName, JokePageStyled, JokePageTalker, JokePageWrapper } from './index.style';

import arnoldSchwarzenegger from '../../assets/images/arnold-schwarzenegger.png';

export const JokePage = () => {
    const jokeResponse = useLoaderData() as ChuckNorrisResponse<ChuckNorrisJoke>;

    if (!jokeResponse.success) return <div>Error to load the jokes. {jokeResponse.error.message}</div>

    return <JokePageStyled>
        <JokePageWrapper>
            <JokePageContent>
                <div>{jokeResponse.data.value}</div>
            </JokePageContent>
            <JokePageTalker>
                <img src={arnoldSchwarzenegger} alt="Arnold Schwarzenegger" />
            </JokePageTalker>
            <JokePageName>Arnold Schwarzenegger</JokePageName>
        </JokePageWrapper>
    </JokePageStyled>
};

export const jokePage: RouteObject = {
    path: 'joke/:id',
    element: <JokePage />,
    loader: async ({ params }) => {
        const chuckNorris = new ChuckNorrisIO();

        if (params.id) return chuckNorris.getJokeById(params.id);

        return {
            success: false,
            error: {
                code: '0000',
                message: 'ID not found',
            }
        }
    }
}