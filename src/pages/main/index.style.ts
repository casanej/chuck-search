import styled from "styled-components";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    margin: auto;
    gap: 20px;
    width: 100%;

    > img {
        transform: rotate(-10deg);
    }

    > div {
        &:nth-child(2) {
            line-height: 0.9;
            text-align: center;
            margin-bottom: 20px;
            color: #6b8da0;
        }
    }
`;

export const MainPageTitle = styled.div`
    font-size: 42px;
    font-weight: bolder;
    font-family: "PixelMillennium", sans-serif;
`;