import styled from "styled-components";

export const NavBarStyled = styled.nav`
    background-color: #886144;
    color: #FFFFFF;
    padding: 10px;
`;

export const NavBarItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;

    > div {
        display: flex;
        gap: 10px;
    }
`;

export const NavBarItem = styled.div`
    color: #fff;
    text-decoration: none;

    a {
        color: #fff;
        text-decoration: none;
    }
`;