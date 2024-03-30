import Title from "./Components/Title";
import { Subtitle } from "./Components/Subtitle";
import StatusText from "./Components/StatusText";
import styles from "./App.module.css";

export default function App() {
  const status = true;

  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
