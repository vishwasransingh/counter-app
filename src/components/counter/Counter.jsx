import './Counter.css';
import { useState } from 'react';
import CounterButton from './CounterButton';

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count + by);
    }

    function resetCounterParentFunction(){
        setCount(count-count);
    }

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction}/>
            <CounterButton by={3} incrementMethod={incrementCounterParentFunction}/>
            <button className="resetButton" onClick={resetCounterParentFunction}>Reset</button>
        </>
    )
}