import './Counter.css';
import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounterFunction() {
        setCount(count + 1);
    }

    function decrementCounterFunction() {
        setCount(count - 1);
    }

    function incrementCounterBy2Function(){
        setCount(count + 2);
    }

    function decrementCounterBy2Function() {
        setCount(count - 2);
    }

    function incrementCounterBy5Function() {
        setCount(count + 3);
    }

    function decrementCounterBy5Function() {
        setCount(count -3);
    }

    return(
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}>+1</button>
                <button className='counterButton' onClick={decrementCounterFunction}>-1</button>
            </div>
            <div>
                <button className="counterButton" onClick={incrementCounterBy2Function}>+2</button>
                <button className="counterButton" onClick={decrementCounterBy2Function}>-2</button>
            </div>
            <div>
                <button className="counterButton" onClick={incrementCounterBy5Function}>+5</button>
                <button className="counterButton" onClick={decrementCounterBy5Function}>-5</button>
            </div>
        </div>
        )
}