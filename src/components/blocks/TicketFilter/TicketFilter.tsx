import React, {FC, useState} from 'react';
import './TicketFilter.css'
import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import {ITicketFilter} from "../../../interfaces/blocks/ITicketFilter";
import {IFilterFieldCheckboxGroup, IFilterFieldTabs} from "../../../interfaces/blocks/IFilter";

const TicketFilter: FC<ITicketFilter> = ({tabs, checkboxes, data}) => {
    const [tabsValue, setTabsValue] = useState(tabs[0].value)
    const [activeCheckboxes, setActiveCheckboxes] = useState(['all'])
    const activeTab = tabs.find((el) => el.value === tabsValue)
    const fields: (IFilterFieldTabs | IFilterFieldCheckboxGroup)[] = [
        {
            name: 'Валюта',
            type: 'tabs',
            fields: tabs,
            change: setTabsValue,
            value: tabsValue,
        },
        {
            name: 'Количество пересадок',
            type: 'checkboxGroup',
            fields: checkboxes,
            change: setActiveCheckboxes,
            value: activeCheckboxes,
        },
    ]

    return (
        <div className="TicketFilter">
            <Filter
                fields={fields}
            />

            <TicketList
                ticketList={data}
                activeCurrency={{symbol: activeTab?.symbol ?? '₽', cost: activeTab?.cost ?? 1}}
            />
        </div>
    );
};

export default TicketFilter;