import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Form from './Form';

function App() {
  const [lista, setLista] = useState([
    {
      nombre: "mario",
      mundo: "Nintendo64"
    }
  ])
  return (
    <div className="App">
      <Form lista={lista} setLista={setLista} />
      <List lista={lista} />
    </div>
  );
}

export default App;
