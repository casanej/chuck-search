import { RouteObject } from 'react-router-dom';
import { MainPageStyled } from './index.style';
import chuckSearchLogo from '../../assets/images/chuck-search-logo.png';
import { SearchBar } from '../../components';

export const MainPage = () => {         
    return <MainPageStyled>
        <img src={chuckSearchLogo} alt="Chuck Search Logo" width={260} />
        <SearchBar showActionButton />
    </MainPageStyled>;
};

export const mainPage: RouteObject = {
    element: <MainPage />,
    index: true
}