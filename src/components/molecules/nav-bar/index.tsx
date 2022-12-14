import { FC } from 'react'
import { Link } from 'react-router-dom';
import { NavBarItem, NavBarItems, NavBarStyled } from './index.syle';

export const NavBar: FC = () => {

    return <NavBarStyled>
        <NavBarItems>
            <div>
                <div>Chuck Search</div>
                <div>|</div>
                <div>If Chuck Norris approves, who are you to disagree.</div>
            </div>
            <NavBarItem>
                <Link to='/'>Home</Link>
            </NavBarItem>
        </NavBarItems>
    </NavBarStyled>;
};
