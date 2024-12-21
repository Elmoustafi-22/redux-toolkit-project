import { useSelector } from "react-redux";

function CounterValue() {
    const state = useSelector(state => state.counter.countValue)
    console.log(state)
    return (
        <div className="container mt-4">
            <p className="font-poppins">Counter value is {state} </p>
        </div>
    )
}

export default CounterValue;