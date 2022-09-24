import styled from "styled-components";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    margin: auto;
    gap: 20px;
    width: 100%;

    img {
        max-width: 420px;
    }

    @media (max-width: 460px) {
        img {
            max-width: 320px;
        }
    }
`;