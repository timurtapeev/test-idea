import React, {FC} from 'react';
import './Sort.css'
import {ISortProps} from "../../../interfaces/UI/ISort";

const Sort: FC<ISortProps> = ({text, value, change}) => {
    return (
        <label className="Sort">
            {text}
            {value === 'increase' ? '↑': '↓'}
            <input
                type="checkbox"
                value={value}
                checked={value === 'increase'}
                onChange={() => {
                    const changeValue = value === 'increase' ? 'decrease' : 'increase'
                    change(changeValue)
                }}
            />
        </label>
    );
};

export default Sort;