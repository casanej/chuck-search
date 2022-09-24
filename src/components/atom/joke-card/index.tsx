import { FC } from 'react'
import { ChuckNorrisJoke } from '../../../services/ChuckNorrisIO/models';
import { JokeCardAction, JokeCardText, JokesCardStyle, JokeSeeMore } from './index.style';

interface Props {
    jokeData: ChuckNorrisJoke;
}

export const JokeCard:FC<Props> = (props) => {
    return <JokesCardStyle>
        <JokeCardAction></JokeCardAction>
        <JokeCardText>
            {props.jokeData.value}
        </JokeCardText>
        <JokeSeeMore to={`/joke/${props.jokeData.id}`}>+</JokeSeeMore>
    </JokesCardStyle>;
};
