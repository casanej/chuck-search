import styled from 'styled-components';

export const ContainerStyled = styled.div<{ fullHeight?: boolean; justifyContent?: string; alignItems?: string }>`
    max-width: 1200px;
    min-height: calc(100vh - 50px);
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    ${props => props.fullHeight && 'height: 100%;'}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => props.alignItems && `align-items: ${props.alignItems};`}

    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`;