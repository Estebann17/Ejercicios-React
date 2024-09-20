import './App.css';

import { useContext } from 'react';
import { CounterContext } from './context/StateProvider';

export const App = () => {

  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;