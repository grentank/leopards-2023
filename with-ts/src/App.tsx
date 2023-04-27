import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import elbrusLogo from './assets/elbrus.svg';
import './App.css';

function App(): JSX.Element {
  const [count, setCount] = useState('0');
  const [value, setValue] = useState<string>('');

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/Elbrus-Bootcamp" target="_blank" rel="noreferrer">
          <img src={elbrusLogo} className="logo elbrus" alt="Elbrus logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Elbrus Bootcamp</h2>
      <h1>Vite + React</h1>
      <div className="card">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="button" onClick={() => setCount((prev) => prev + value)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
