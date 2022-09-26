import { RouteObject } from 'react-router-dom';
import { MainPageStyled, MainPageTitle } from './index.style';
import chuckSearchLogo from '../../assets/images/chuck-norris-neutral.png';
import { SearchBar } from '../../components';

export const MainPage = () => {
    return <MainPageStyled>
        <img src={chuckSearchLogo} alt='Chuck Search Logo' width={70} />
        <div>
            <MainPageTitle>CHUCKSEARCH</MainPageTitle>
            <div>He definitely wouldn't need it</div>
        </div>
        <SearchBar showActionButton />
    </MainPageStyled>;
};

export const mainPage: RouteObject = {
    element: <MainPage />,
    index: true
}