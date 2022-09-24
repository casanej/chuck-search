import React, { FC } from 'react'
import { Container } from '../../atom';
import { NavBarItems, NavBarStyled } from './index.syle';

interface Props { }

export const NavBar: FC<Props> = (props) => {

    return <NavBarStyled>
        <Container>
            <NavBarItems>
                <div>
                    <div>ICONE</div>
                    <div>Chuck Search</div>
                </div>
                <div>
                    <div>Home</div>
                </div>
            </NavBarItems>
        </Container>
    </NavBarStyled>;
};
