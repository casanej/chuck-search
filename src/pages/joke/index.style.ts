import styled from "styled-components";

export const JokePageContent = styled.div`
    max-width: 600px;
    min-height: 155px;
    width: 100%;
    background-color: #868a56;
    border: 5px solid #575b28;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    
    > div {
        max-width: 375px;
        text-shadow: 0px 0px 7px #303030;
        letter-spacing: 1px;
        color: #E6E3BE;
        font-weight: bold;
    }
`;

export const JokePageTalker = styled.div`
    img {
        width: 140px;
    }
`;

export const JokePageName = styled.div`
`;

export const JokePageWrapper = styled.div`
    position: relative;
    overflow: hidden;

    @media (min-width: 601px) {
        width: 600px;
        height: 220px;

        ${JokePageContent} {
            position: absolute;
            top: 20px;
            left: 0px;
        }

        ${JokePageTalker} {
            position: absolute;
            top: 0px;
            left: 41px;
        }

        ${JokePageName} {
            position: absolute;
            top: 180px;
            left: 425px;
        }   
    }

    @media (min-width: 360px) and (max-width: 600px) {
        ${JokePageContent} {
            max-width: 340px;
            margin-top: 20px;
        }

        ${JokePageTalker} {
            margin-top: -17px;
            margin-left 34px;
        }

        ${JokePageName} {
            position: absolute;
            top: 0;
            left: 15px;
        }   
    }
`;

export const JokePageStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;