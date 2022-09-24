import React, { FC } from 'react'
import { ContainerStyled } from './index.style';

interface Props {
    children: React.ReactNode;
    fullHeight?: boolean;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const Container:FC<Props> = (props) => {
    return <ContainerStyled
        fullHeight={props.fullHeight}
        justifyContent={props.justifyContent}
        alignItems={props.alignItems}
    >{props.children}</ContainerStyled>;
};
