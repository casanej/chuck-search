import React, { FC } from 'react'
import { ButtonSStyled } from './index.style';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: FC<Props> = (props) => {
    return <ButtonSStyled
        onClick={props.onClick}
    >
        {props.children}
    </ButtonSStyled>;
};
