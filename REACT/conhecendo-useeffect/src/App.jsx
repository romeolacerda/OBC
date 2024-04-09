async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data.results;
}

export default function App() {
  return (
    <div className="app">
      <div>Pokemon</div>
    </div>
  );
}
