import styled from 'styled-components';

export const SearchPageStyle = styled.div<{ alignItem?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: ${({ alignItem }) => alignItem || 'flex-start'};

    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    > img {
        width: 200px;
    }1

    @media (max-width: 768px) {
        gap: 30px;
        
        img {
            width: 150px;
        }
    }
`;

export const SearchItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;