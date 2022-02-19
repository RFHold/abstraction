import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            Click me : {count}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
