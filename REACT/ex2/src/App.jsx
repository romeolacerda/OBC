import Card from "./components/Card";
import swPosterImg from "./assets/swposter.jpg";
import esbPosterImg from "./assets/esbposter.jpg";
import rotjPosterImg from "./assets/rotjposter.jpg";

function App() {
  return (
    <>
      <h2>Ex 2</h2>
      <Card title="Poster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card
        title="Poster: Empire Strikes back (1980)"
        posterImg={esbPosterImg}
      />
      <Card
        title="Poster: Return of the Jedi (1983)"
        posterImg={rotjPosterImg}
      />
    </>
  );
}

export default App;
