import { useContext } from 'react';
import {CountContext} from '../App'

export default function PrevBtn() {

    const {setCounter} = useContext(CountContext)

    return (
        <button onClick={() => setCounter(prev => prev -= 1)}>Prev</button>
    );
  }
  
  
  