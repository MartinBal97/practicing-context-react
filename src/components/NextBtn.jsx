import { useContext } from 'react';
import {CountContext} from '../App'


export default function NextBtn() {

    const {setCounter} = useContext(CountContext)

    return (
        <button onClick={() => setCounter(prev => prev += 1)}>Next</button>
    );
  }
  
  
  