import React, {FC, useId} from 'react';
import {ITabsProps} from "../../../interfaces/UI/ITabs";
import Tab from "../Tab/Tab";
import './Tabs.css'

const Tabs: FC<ITabsProps> = ({tabs, value, change}) => {
    const id = useId()

    return (
        <div className="Tabs">
            {tabs.map((el) => {
                return (
                    <Tab
                        text={el.text}
                        value={el.value}
                        isCurrent={value === el.value}
                        tabsGroupId={id}
                        change={change}
                        key={el.value}
                    />
                )
            })}
        </div>
    );
};

export default Tabs;