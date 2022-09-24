import { FC, KeyboardEvent, useEffect, useState } from 'react'
import { InputTextIcon, InputTextStyled, InputTextWrapper } from './index.style';

import searchIcon from '../../../assets/images/icon-magnifying-glass.svg';

interface Props {
    fullWidth?: boolean;
    onChange?: (value: string, name: string) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
    onSearch?: () => void;
    placeholder?: string;
    value?: string;
}

export const InputText:FC<Props> = (props) => {
    const [value, setValue] = useState('')

    useEffect(() => {      
        if (props.onChange) props.onChange(value, 'input-text');
    }, [value])

    useEffect(() => {
        if (props.value) setValue(props.value);
    }, [props.value])

    return <InputTextWrapper>
        <InputTextStyled
            value={value}
            fullWidth={props.fullWidth}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={props.onKeyUp}
            placeholder={props.placeholder}
        />
        <InputTextIcon src={searchIcon} alt='Search' onClick={props.onSearch} />
    </InputTextWrapper>;
};
