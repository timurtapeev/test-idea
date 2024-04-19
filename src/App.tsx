import React, {useState} from 'react';
import './App.css';
import Tabs from "./UI/Tabs";

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
    const [tabsValue, setTabsValue] = useState('RUB')

    return (
    <div className="App">
        <Tabs
            tabs={tabs}
            value={tabsValue}
            change={setTabsValue}
        />
    </div>
    );
}

export default App;
