import { useCallback, useState } from 'react'
import { RouteObject, useNavigate } from 'react-router-dom';
import { ChuckNorrisIO } from '../../services';

const chuckNorris = new ChuckNorrisIO();

export const MainPage = () => {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');

    const handleOnSearch = useCallback(() => {
        if (query) navigate(`/search/${query}`);         
    }, [query])

    const handleLuckySearch = useCallback(async () => {
        const luckyJoke = await chuckNorris.getJokesBySearch(query);

        if (luckyJoke.success) navigate(`/joke/${luckyJoke.data.result[0][0].id}`);
    }, [query])

    return <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleOnSearch}>Procurar</button>
        <button onClick={handleLuckySearch}>Estou com sorte</button>
    </div>;
};

export const mainPage: RouteObject = {
    path: '/',
    element: <MainPage />,
}