import { useState } from 'react';
import { RouteObject, useLoaderData, useParams } from 'react-router-dom';
import { Pagination, SearchBar } from '../../components';
import { ChuckNorrisIO } from '../../services';
import { ChuckNorrisResponse, ChuckNorrisResponsePaginated } from '../../services/ChuckNorrisIO/models';
import { SearchPageStyle } from './index.style';

export const SearchPage = () => {
    const [currenPage, setCurrentPage] = useState(0);
    const searchJokes = useLoaderData() as ChuckNorrisResponse<ChuckNorrisResponsePaginated>;

    if (!searchJokes.success) return <div>Error to load the jokes. {searchJokes.error.message}</div>

    if (searchJokes.data.total === 0) return <div>Not found jokes</div>

    return <SearchPageStyle>
        <SearchBar />
        {
            searchJokes.data.result[currenPage].map(joke => {
                return <div key={joke.id} style={{marginTop: 10}}>
                    <div><a href={`/joke/${joke.id}`}>{joke.value}</a></div>
                    <div>{joke.categories.join(', ')}</div>
                </div>
            })
        }

        {
            searchJokes.data.totalPages > 1 && <Pagination totalPages={searchJokes.data.totalPages} onChange={setCurrentPage} />
        }
    </SearchPageStyle>
};

export const searchPage: RouteObject = {
    path: 'search/:query',
    element: <SearchPage />,
    loader: async ({ params }) => {
        const chuckNorris = new ChuckNorrisIO();

        if (params.query) return chuckNorris.getJokesBySearch(params.query);

        return {
            success: false,
            error: {
                code: '0000',
                message: 'Query text not found',
            }
        }
    }
}