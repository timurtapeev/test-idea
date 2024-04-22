import React, {FC} from 'react';
import './Button.css'
import {IButtonProps} from "../../../interfaces/UI/IButton";

const Button: FC<IButtonProps> = ({children, ...props}) => {
    return (
        <button className="Button" {...props}>
            {children}
        </button>
    );
};

export default Button;