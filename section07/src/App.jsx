import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

//
//
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  useEffect(() => {
    console.log('MOUNT');
  }, []);

  useEffect(() => {
    if (!isMount.current === true) {
      isMount.current = true;
      return;
    }
    console.log('upadate');
  });

  const onClickButton = (value) => {
    if (value === 'reset') {
      setCount(count * 0);
    } else {
      setCount(count + value);
    }
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
