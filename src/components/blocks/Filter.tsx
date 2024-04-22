import React, {useState, FC} from 'react';
import Tabs from "../UI/Tabs/Tabs";
import {IFilter} from "../../interfaces/blocks/IFilter";

const Filter: FC<IFilter> = ({tabs}) => {
    const [tabsValue, setTabsValue] = useState('RUB')


    return (
        <div>
            <Tabs
                tabs={tabs}
                value={tabsValue}
                change={setTabsValue}
            />
        </div>
    );
};

export default Filter;