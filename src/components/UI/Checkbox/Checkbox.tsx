import React, {FC, memo, useId} from 'react';
import {ICheckboxProps} from "../../../interfaces/UI/ICheckbox";
import './Checkbox.css'

const Checkbox: FC<ICheckboxProps> =
({
    text,
    checked,
    value,
    change
}) => {
    const id = useId()
    console.log('render')
    return (
        <div className="Checkbox">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                value={value}
                onChange={(event) => change(event.target.value)}
            />
            <label htmlFor={id}>
                {text}
            </label>
        </div>
    );
};

export default memo(Checkbox);