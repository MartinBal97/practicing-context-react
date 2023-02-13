import './App.css';
import { useState, createContext } from 'react';
import Counter from './components/Counter';
import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import ChangeColors from './components/ChangeColors.jsx'

export const CountContext = createContext()
export const ChangeColorContext = createContext()

export default function App() {

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('lightgreen')

  return (
    <div className="App">

      <CountContext.Provider value={{ counter, setCounter }}>
        <Counter />
        <PrevBtn />
        <NextBtn />
      </CountContext.Provider>

      <ChangeColorContext.Provider value={{color,setColor}}>
        <ChangeColors/>
      </ChangeColorContext.Provider>

    </div>
  );
}

