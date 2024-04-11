import Container from "./components/Container";
import Header from "./components/Header";
import UserContext from "./contexts/UserContext";

export default function App() {
  const user = {
    name: "João",
    email: "João@gmail.com",
  };
  return (
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usando Contexto</h1>
      <Container>
        <p>Este é o app com contexto</p>
      </Container>
    </UserContext.Provider>
  );
}
