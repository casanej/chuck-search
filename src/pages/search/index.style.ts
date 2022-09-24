import styled from "styled-components";

export const SearchPageStyle = styled.div<{ alignItem?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: ${({ alignItem }) => alignItem || "flex-start"};

    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const SearchItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;