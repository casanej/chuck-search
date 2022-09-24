import { useState } from 'react';
import { RouteObject, useLoaderData } from 'react-router-dom';
import { JokeCard, Pagination, SearchBar } from '../../components';
import { ChuckNorrisIO } from '../../services';
import { ChuckNorrisResponse, ChuckNorrisResponsePaginated } from '../../services/ChuckNorrisIO/models';
import { SearchItems, SearchPageStyle } from './index.style';

import chuckNorrisAngry from '../../assets/images/chuck-norris-angry.png';
import chuckNorrisShy from '../../assets/images/chuck-norris-shy.png';

export const SearchPage = () => {
    const [currenPage, setCurrentPage] = useState(0);
    const searchJokes = useLoaderData() as ChuckNorrisResponse<ChuckNorrisResponsePaginated>;

    if (!searchJokes.success) return <SearchPageStyle alignItem='center'>
        <SearchBar />
        <img src={chuckNorrisShy} alt="No results found" width={300} />
        <h1>Error to get jokes</h1>
    </SearchPageStyle>

    if (searchJokes.data.total === 0) return <SearchPageStyle alignItem='center'>
        <SearchBar />
        <img src={chuckNorrisAngry} alt="No results found" width={300} />
        <h1>No jokes for you</h1>
    </SearchPageStyle>

    return <SearchPageStyle>
        <SearchBar />
        <SearchItems>
            {
                searchJokes.data.result[currenPage].map(joke => {
                    return <JokeCard key={joke.id} jokeData={joke} />
                })
            }
        </SearchItems>  
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