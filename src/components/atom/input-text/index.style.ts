import styled from "styled-components";

export const InputTextWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputTextStyled = styled.input<{ fullWidth?: boolean }>`
    border: 1px solid #ccc;
    border-radius: 50px;
    color: #000;
    padding: 7px 15px;
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const InputTextIcon = styled.img`
    position: absolute;
    top: 8px;
    right: 13px;
    width: 16px;
    height: 16px;
    transform: scale(-1) rotate(-90deg);
    cursor: pointer;
`;