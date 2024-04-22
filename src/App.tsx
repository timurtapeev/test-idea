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

    return (
    <div className="App">
        <div className="container">
            <Filter
                tabs={tabs}
            />

        </div>
    </div>
    );
}

export default App;
