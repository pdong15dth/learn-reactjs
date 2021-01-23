import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispath = useDispatch();
    const counter = useSelector(state => state.counter)

    const handleIncrease = () => {
        const action = increase()
        console.log(action)
        dispath(action)
    }

    const handleDecrease = () => {
        const action = decrease()
        console.log(action)
        dispath(action)
    }
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;