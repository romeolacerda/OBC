import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon().then((results) => {
      console.log("Requisição atualizada.");
      console.log(results);
      setPokemon(results);
    });
  }, []);

  return (
    <div className="app">
      <div>Pokemon</div>
      <ul className="pokemon">
        {pokemon.map((mon) => (
          <li key={mon.name}>
            <span>{mon.name}</span>
            <button>Ver Detalhes</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
