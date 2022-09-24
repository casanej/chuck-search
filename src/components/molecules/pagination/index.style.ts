import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    justify-content: center;
`;

export const PaginationItem = styled.div<{ active?: boolean }>`
    background-color: #FFF;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #c2c2c2;

    ${({ active }) => active
        ? css`
        background-color: #8D9B34;
        color: #fff;

        &:hover {
            background-color: #B8C75E;
        }
    `
        : css`
        background-color: #fff;
        color: #B8C75E;
        &:hover {
            background-color: #B8C75E;
            color: #fff;
        }
    `}
`;