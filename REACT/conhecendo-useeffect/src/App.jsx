import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Conhecendo o use effect</h1>
      <button onClick={() => setCounter((count) => count + 1)}>
        Contador: {counter}
      </button>
    </>
  );
}
