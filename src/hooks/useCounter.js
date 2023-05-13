import { useState } from "react";

export default function () {
  const [contador, setContador] = useState(1);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return {
    incrementar,
    decrementar,
    contador,
  };
}
