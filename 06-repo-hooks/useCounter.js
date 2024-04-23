import { useState } from "react";

export const useCounter = (estadoInicial = 1) => {
  const [counter, setCounter] = useState(estadoInicial);

  const incremento = () => {
    setCounter(counter +1);
  };

  const decremento = () => {
    setCounter(counter - 1);
  };

  const reset = ()=>{
    setCounter(estadoInicial)
  }

  return {
    counter,
    incremento,
    decremento,
    reset
  };
};
