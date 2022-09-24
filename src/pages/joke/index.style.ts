import styled from "styled-components";

export const JokePageStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const JokePageContent = styled.div`
    max-width: 600px;
    min-height: 125px;
    width: 100%;
    background-color: #868a56;
    border: 5px solid #575b28;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    position: absolute;
    top: 47px;
    left: 0px;
    
    > div {
        max-width: 375px;
        text-shadow: 0px 0px 7px #303030;
        letter-spacing: 1px;
        color: #E6E3BE;
        font-weight: bold;
    }
`;

export const JokePageTalker = styled.div`
    position: absolute;
    top: 0px;
    left: 41px;

    img {
        width: 140px;
    }
`;

export const JokePageName = styled.div`
    position: absolute;
    top: 175px;
    left: 425px;
`;

export const JokePageWrapper = styled.div`
    position: relative;
    width: 600px;
    height: 400px;
    overflow: hidden;

    @media (min-width: 360px) and (max-height: 600px) {
        ${JokePageContent} {
            max-width: 340px;
            top: 0px;
            left: 130px;
        }

        ${JokePageTalker} {
            top: 167px;
            left: 150px;
        }

        ${JokePageName} {
            top: 190px;
            left: 295px;
        }   
    }
`;