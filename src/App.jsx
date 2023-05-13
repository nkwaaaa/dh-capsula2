import { useState, useEffect } from "react";
import useCounter from "./hooks/useCounter";

function App() {
  const { contador, incrementar, decrementar } = useCounter();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const obtenerPersonaje = () => {
      fetch(`https://rickandmortyapi.com/api/character/${contador}`)
        .then((response) => response.json())
        .then((data) => setPersonaje(data))
        .catch((error) =>
          console.error("Error al obtener el personaje:", error)
        );
    };

    obtenerPersonaje();
  }, [contador]);

  return (
    <div>
      <header>
        <h1>DH Cápsula 2</h1>
      </header>
      <main>
        <div className="buttonContainer">
          <button disabled={contador === 1} onClick={decrementar}>
            Decrementar
          </button>
          <button onClick={incrementar}>Incrementar</button>
        </div>

        {personaje && <img src={personaje.image} alt={personaje.name} />}
      </main>
    </div>
  );
}

export default App;
