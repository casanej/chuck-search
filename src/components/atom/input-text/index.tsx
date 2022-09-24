import { FC, KeyboardEvent, useEffect, useState } from 'react'
import { InputTextStyled } from './index.style';

interface Props {
    fullWidth?: boolean;
    onChange?: (value: string, name: string) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
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

    return <InputTextStyled
        value={value}
        fullWidth={props.fullWidth}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={props.onKeyUp}
        placeholder={props.placeholder}
    />;
};
