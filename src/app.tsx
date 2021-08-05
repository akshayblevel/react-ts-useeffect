import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [revcount, setRevcount] = useState(0);

  useEffect(() => {
    console.log('Everytime called.');
  });

  useEffect(() => {
    console.log('Onetime called i.e on mount');
  }, []);

  useEffect(() => {
    console.log('called on mount and when count gets updated');
  }, [count]);

  useEffect(() => {
    console.log('called on mount and when revcount gets updated');
  }, [revcount]);

  useEffect(() => {
    console.log('called on mount and when count/revcount gets updated');
  }, [count, revcount]);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setRevcount(revcount - 1);
  }

  return (
    <div>
      count: {count} <button onClick={increase}>+</button>
      <br />
      reverse count: {revcount} <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
