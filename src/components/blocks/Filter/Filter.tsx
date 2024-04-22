import React, {useState, FC} from 'react';
import './Filter.css'
import Tabs from "../../UI/Tabs/Tabs";
import CheckboxGroup from "../../UI/CheckboxGroup/CheckboxGroup";
import {IFilter} from "../../../interfaces/blocks/IFilter";

const Filter: FC<IFilter> = ({fields}) => {
    return (
        <div className="Filter">
            {fields.map((el, i) => {
                switch (el.type) {
                    case 'tabs':
                        return (
                            <div className="Filter__field">
                                <span className="Filter__field-title">{el.name}</span>
                                <Tabs
                                    key={i}
                                    tabs={el.fields}
                                    value={el.value}
                                    change={el.change}
                                />
                            </div>
                        )
                    case 'checkboxGroup':
                        return (
                            <div className="Filter__field">
                                <span className="Filter__field-title">{el.name}</span>
                                <CheckboxGroup
                                    key={i}
                                    checkboxes={el.fields}
                                    activeCheckboxes={el.value}
                                    changeValue={el.change}
                                />
                            </div>
                        )
                }
            })}
        </div>
    );
};

export default Filter;