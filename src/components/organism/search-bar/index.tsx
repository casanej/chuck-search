import { FC, KeyboardEvent, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ChuckNorrisIO } from '../../../services';
import { Button, InputText } from '../../atom';
import { SearchActionButton } from './index.style';

const chuckNorris = new ChuckNorrisIO();

interface Props {
    showActionButton?: boolean;
}

export const SearchBar: FC<Props> = (props) => {
    const navigate = useNavigate();
    const params = useParams<{ query?: string }>();

    const [query, setQuery] = useState('');

    const handleOnSearch = useCallback(() => {
        if (query) navigate(`/search/${query}`);
    }, [query])

    const handleLuckySearch = useCallback(async () => {
        const luckyJoke = await chuckNorris.getJokesBySearch(query);

        if (luckyJoke.success) navigate(`/joke/${luckyJoke.data.result[0][0].id}`);
    }, [query])

    const handlePressEnter = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') handleOnSearch();
    }, [handleOnSearch])

    return <>
        <InputText
            value={params.query}
            fullWidth
            placeholder="Come on, it's just a word"
            onChange={(value) => { setQuery(value) }}
            onKeyUp={handlePressEnter}
            onSearch={() => handleOnSearch()}
        />

        {props.showActionButton && <SearchActionButton>
            <Button onClick={handleOnSearch}>Find a Joke</Button>
            <Button onClick={handleLuckySearch}>I'm Lucky</Button>
        </SearchActionButton>
        }
    </>;
};
