import { useDispatch } from "react-redux";
import { handleIncrement } from "../store/slices/counter";

function CounterButton() {
    const dispatch = useDispatch()
    
    return (
        <div className="container">
           <button onClick={() => dispatch(handleIncrement())} className="font-inter px-2 py-1 rounded hover:bg-gray-800 bg-gray-950 text-slate-50"> Increase Count</button>
        </div>
    )
}

export default CounterButton;