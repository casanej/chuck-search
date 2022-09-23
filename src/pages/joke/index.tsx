import { RouteObject, useLoaderData } from 'react-router-dom';
import { ChuckNorrisIO } from '../../services';
import { ChuckNorrisJoke, ChuckNorrisResponse } from '../../services/ChuckNorrisIO/models';

export const JokePage = () => {
    const jokeResponse = useLoaderData() as ChuckNorrisResponse<ChuckNorrisJoke>;

    if (!jokeResponse.success) return <div>Error to load the jokes. {jokeResponse.error.message}</div>

    return <div>
        {
            jokeResponse.data.value
        }
    </div>
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