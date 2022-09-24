import styled from "styled-components";

export const JokesCardStyle = styled.div`
    background-color: #F4F4F4;
    border-radius: 10px;        
    width: 100%;
    text-overlow: ellipsis;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const JokeCardAction = styled.div`
    background-color: #8D9B34;
    width: 10px;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const JokeCardText = styled.div`
    padding: 10px 0;
    width: 100%;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
        text-decoration: none;
        color: #1a1a1a;

        &:hover {
            text-decoration: underline;
        }

        &:visited {
            color: #9a9a9a;
        }
    }
`;

export const JokeSeeMore = styled.a`
    width: 40px;
    color: #8D9B34;
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
    text-align: center;

    &:hover {
        transform: scale(1.3);
    }

    &:visited {
        color: #B8C75E;
    }
`;