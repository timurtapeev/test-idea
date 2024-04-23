import React, {FC, useState, useMemo} from 'react';
import './TicketFilter.css'
import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import {ITicketFilter} from "../../../interfaces/blocks/ITicketFilter";
import {IFilterFieldCheckboxGroup, IFilterFieldTabs} from "../../../interfaces/blocks/IFilter";
import Sort from "../../UI/Sort/Sort";

const TicketFilter: FC<ITicketFilter> = ({tabs, checkboxes, tickets}) => {
    const [tabsValue, setTabsValue] = useState(tabs[0].value)
    const [activeCheckboxes, setActiveCheckboxes] = useState(['all'])
    const [sort, setSort] = useState<'increase' | 'decrease'>('increase')
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
    const filteredTicketsByCheckbox = useMemo(() => {
        return tickets.filter((el) => {
            if (activeCheckboxes.includes('all')) {
                return true
            } else if (!Boolean(activeCheckboxes.length)){
                return true
            } else {
                return activeCheckboxes.includes(String(el.stops))
            }
        })
    }, [activeCheckboxes])

    const filteredTicketsByPrice = filteredTicketsByCheckbox.sort((a, b) => {
        if ('increase' === sort) {
            return a.price - b.price
        } else
            return b.price - a.price
    })

    return (
        <div className="TicketFilter">
            <Filter
                fields={fields}
            />

            <div className="TicketFilter__tickets">
                <Sort
                    text="Цена"
                    value={sort}
                    change={setSort}
                />
                <TicketList
                    ticketList={filteredTicketsByPrice}
                    activeCurrency={{
                        symbol: activeTab?.symbol ?? '₽',
                        cost: activeTab?.cost ?? 1
                    }}
                />
            </div>
        </div>
    );
};

export default TicketFilter;