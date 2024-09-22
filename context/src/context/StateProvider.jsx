import React, { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

const StateProvider = ({ children }) => {
    
  const getInitialCounter = () => {
    const storedCounter = localStorage.getItem('count');

    if (storedCounter) {

      return JSON.parse(storedCounter);

    } else {

      return 0;
    }
  };


  const [count, setCount] = useState(getInitialCounter);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateProvider;
