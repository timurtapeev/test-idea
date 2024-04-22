import React, {useState, FC} from 'react';
import Tabs from "../UI/Tabs/Tabs";
import {IFilter} from "../../interfaces/blocks/IFilter";
import CheckboxGroup from "../UI/CheckboxGroup/CheckboxGroup";

const Filter: FC<IFilter> = ({tabs, checkboxes}) => {
    const [tabsValue, setTabsValue] = useState(tabs[0].value)
    const [activeCheckboxes, setActiveCheckboxes] = useState(['all'])


    return (
        <div>
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