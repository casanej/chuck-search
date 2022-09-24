import { FC } from 'react'
import { Link } from 'react-router-dom';
import { NavBarItem, NavBarItems, NavBarStyled } from './index.syle';

export const NavBar: FC = () => {

    return <NavBarStyled>
        <NavBarItems>
            <div>
                <div>ICONE</div>
                <div>Chuck Search</div>
            </div>
            <NavBarItem>
                <Link to='/'>Home</Link>
            </NavBarItem>
        </NavBarItems>
    </NavBarStyled>;
};
