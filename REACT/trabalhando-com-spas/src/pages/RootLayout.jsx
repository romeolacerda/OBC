import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout Principal. Abaixo está o conteudo dinâmico de cada
          rota.
        </p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
}
