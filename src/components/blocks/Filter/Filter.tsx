import React, {useState, FC} from 'react';
import './Filter.css'
import Tabs from "../../UI/Tabs/Tabs";
import CheckboxGroup from "../../UI/CheckboxGroup/CheckboxGroup";
import {IFilter} from "../../../interfaces/blocks/IFilter";

const Filter: FC<IFilter> = ({tabs, checkboxes}) => {
    const [tabsValue, setTabsValue] = useState(tabs[0].value)
    const [activeCheckboxes, setActiveCheckboxes] = useState(['all'])


    return (
        <div className="Filter">
            <Tabs
                tabs={tabs}
                value={tabsValue}
                change={setTabsValue}
            />
            <CheckboxGroup
                checkboxes={checkboxes}
                activeCheckboxes={activeCheckboxes}
                changeValue={setActiveCheckboxes}
            />
        </div>
    );
};

export default Filter;