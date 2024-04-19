import React, {FC, useId} from 'react';
import {ITabs} from "../interfaces/ITabs";
import './Tabs.css'

const Tabs: FC<ITabs> = ({tabs, value, change}) => {
    const id = useId()

    return (
        <div>
            {tabs.map((el) => {
                return (
                    <div key={el.value}>
                        <label className='Tab'>
                            <span>{el.text}</span>
                            <input
                                type="radio"
                                name={id}
                                value={el.value}
                                id={el.value}
                                checked={el.value === value}
                                onChange={(event) => change(event.target.value)}
                            />
                        </label>
                    </div>
                )
            })}
        </div>
    );
};

export default Tabs;