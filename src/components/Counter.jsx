
import {  useContext } from 'react';
import {CountContext} from '../App'

export default function Counter() {

    const {counter} = useContext(CountContext)

    return (
        <span>{counter}</span>
    );
}


