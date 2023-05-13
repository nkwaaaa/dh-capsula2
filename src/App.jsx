import { useEffect, useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { contador, incrementar, decrementar } = useCounter();
  const [character, setCharacter] = useState();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${contador}`)
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json);
      });
  }, [contador]);

  return (
    <>
      <h1>DH Cápsula 2</h1>
      <div className="buttonContainer">
        <button disabled={contador === 1} onClick={() => decrementar()}>
          decrementar
        </button>
        <button onClick={() => incrementar()}>Incrementar</button>
      </div>

      <img src={character && character.image} alt="" />
    </>
  );
}

export default App;
