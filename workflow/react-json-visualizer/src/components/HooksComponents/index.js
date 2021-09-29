import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You pushed {count} times</p>
      <button onClick={() => setCount(count + 1)}>Push me</button>
    </div>
  );
}

export default Example;
