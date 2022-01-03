import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {decrement, decrementByAmount, increment, incrementByAmount} from "../redux/counterSlice"

const Counter = () => {
    const count = useSelector((state) => {
        return (state.counter.value)
    })
    const dispatch = useDispatch()

    // 1. 'increment' action is dispatched to the store.
    // 2. 'increment' reducer in counterSlice will update state accordingly.
    // 3. 'count' will be updated by re-rendering the component
    return (
        <div>
            <h2>Counter Page</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>IncrementByAmount</button>
            <button onClick={() => dispatch(decrementByAmount(4))}>decrementByAmount</button>
            <p>count: {count}</p>
            <p>
                <Link to="/">Back to Home Page</Link>
            </p>
        </div>
    )
}

export default Counter
