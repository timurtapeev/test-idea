import React, {FC, memo, useCallback} from 'react';
import {ICheckboxGroup} from "../../../interfaces/UI/ICheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

const CheckboxGroup: FC<ICheckboxGroup> = ({checkboxes, activeCheckboxes, changeValue}) => {

    const changeValueHandler = useCallback((value: string) => {
        changeValue((prevState) => {
            if (value === 'all') {
                return checkboxes.map((el) => {
                    return el.value
                })
            }
            let values = prevState.filter((el) => el !== 'all')

            if (prevState.includes(value)) {
                return values.filter((el) => el !== value)
            } else {
                values.push(value)
                return values
            }
        })
    }, [])

    console.log('CheckboxGroup')

    return (
        <div>
            {checkboxes.map((el, i) => {
                return (
                    <Checkbox
                        key={el.value}
                        text={el.text}
                        value={el.value}
                        checked={activeCheckboxes.includes(el.value)}
                        change={changeValueHandler}
                    />
                )
            })}
        </div>
    );
};

export default memo(CheckboxGroup);