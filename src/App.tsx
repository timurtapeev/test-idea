import React from 'react';
import './App.css';
import Filter from "./components/blocks/Filter";

function App() {
    const tabs = [
        {
            text: 'RUB',
            value: 'RUB',
        },
        {
            text: 'USD',
            value: 'USD',
        },
        {
            text: 'EUR',
            value: 'EUR',
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
            <Filter
                tabs={tabs}
                checkboxes={checkboxes}
            />

        </div>
    </div>
    );
}

export default App;
