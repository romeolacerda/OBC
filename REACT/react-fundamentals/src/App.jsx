import Title from "./Components/Title";
import { Subtitle } from "./Components/Subtitle";
import StatusText from "./Components/StatusText";
function sum(a, b) {
  return a + b;
}

export default function App() {
  const status = true;

  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
