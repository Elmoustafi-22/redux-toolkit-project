import CounterButton from "./counter-example/counter-button"
import CounterValue from "./counter-example/counter-value"

function App() {
  
  return (
    <>
      <div>
        <h1 className="mx-auto text-center text-3xl font-roboto font-semibold">Redux Toolkit</h1>
        <CounterButton />
        <CounterValue />
      </div>
      
    </>
  )
}

export default App
