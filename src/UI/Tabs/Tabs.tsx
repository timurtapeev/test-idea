import React, {FC, useId, useMemo} from 'react';
import {ITabsProps} from "../../interfaces/ITabs";
import Tab from "../Tab/Tab";
import './Tabs.css'

const Tabs: FC<ITabsProps> = ({tabs, value, change}) => {
    const id = useId()
    console.log('render Tabs')

    const memoTabs = useMemo(() => {
        return tabs.map((el) => {
            return (
                <Tab
                    text={el.text}
                    value={el.value}
                    isCurrent={value === el.value}
                    tabsGroupId={id}
                    change={(value) => change(value)}
                    key={el.value}
                />
            )
        })
    }, [value])

    return (
        <div className="Tabs">
            {memoTabs}
        </div>
    );
};

export default Tabs;