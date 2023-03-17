
import './App.css';
import Counter from './components/Counter';
import SomeCounter from './components/SomeCounter';
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show ? (
        <>
          <Counter />
          <SomeCounter />
          <button
            onClick={() => {
              setShow(false);
            }}>Hide Counter</button>
        </>
      ) : (
        <button onClick={() => {
          setShow(true)
        }}> Show Counter</button>
      )}
    </div>
  );

}

export default App;
