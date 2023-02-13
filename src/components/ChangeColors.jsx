import { useContext } from 'react';
import {ChangeColorContext} from '../App'


export default function ChangeColors() {
    const {color, setColor} = useContext(ChangeColorContext)
    
    function change() {
        const colors = ["red","green","blue","yellow","lightblue","white","lightgreen"]
        setColor(colors[Math.floor(Math.random() * colors.length)])
        document.querySelector('span').style.background = color;
        document.querySelectorAll('button').forEach((button) => button.style.background = color)
    }

    return (
        <button onClick={change}>Change color</button>
    );
  }
  
  
