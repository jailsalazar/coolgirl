import React from 'react';
import Typist from 'react-typist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typist className="title" avgTypingDelay={150} cursor={{hideWhenDone: true}}>
            cool girl book club.
        </Typist>
      </header>
    </div>
  );
}

export default App;
