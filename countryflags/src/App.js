

import axios from 'axios';
import {useEffect, useState } from 'react'
import Card from './Card';
import Country from './Country';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Country />
      </header>
    </div>
  );
}

export default App;
