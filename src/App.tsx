import React from 'react';
import './App.css';
import tickets from './tickets.json'
import {CurrencyContext} from "./service/context/CurrencyContext";
import {ITicket} from "./interfaces/service/ITicket";
import TicketFilter from "./components/blocks/TicketFilter/TicketFilter";

function App() {
    const data: ITicket[] = tickets.tickets
    const tabs = [
        {
            text: 'RUB',
            value: 'RUB',
            symbol: '₽',
            cost: 1,
        },
        {
            text: 'USD',
            value: 'USD',
            symbol: '$',
            cost: 94,
        },
        {
            text: 'EUR',
            value: 'EUR',
            symbol: '€',
            cost: 100,
        },
    ]
    const checkboxes = [
        {
            text: 'Все',
            value: 'all',
        },
        {
            text: 'Без пересадок',
            value: '0',
        },
        {
            text: '1 пересадка',
            value: '1',
        },
        {
            text: '2 пересадка',
            value: '2',
        },
        {
            text: '3 пересадка',
            value: '3',
        },
    ]

    return (
    <div className="App">
        <div className="container">
            <TicketFilter
                tabs={tabs}
                checkboxes={checkboxes}
                data={data}
            />
        </div>
    </div>
    );
}

export default App;
