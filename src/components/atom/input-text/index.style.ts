import styled from "styled-components";

export const InputTextStyled = styled.input<{ fullWidth?: boolean }>`
    border: 1px solid #ccc;
    border-radius: 50px;
    color: #000;
    padding: 7px 15px;
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;