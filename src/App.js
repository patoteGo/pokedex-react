import React from 'react';
import './App.css';
import Pokecard from './components/Pokecard'

function App() {
  return (
    <div className="App">
        <Pokecard
          id={4}
          name="Charmainder"
          type="fire"
          exp={62}
        />
    </div>
  );
}

export default App;
