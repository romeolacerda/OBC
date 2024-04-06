import "./App.css";
import useCounter from "./hooks/useCounter";

//Regra 1: onde usar os hooks
//Regra 2: A ordem dos hooks

function App() {
  const counter = useCounter();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>count is {counter.count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
