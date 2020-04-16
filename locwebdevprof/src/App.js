import React, { createContext } from 'react';
import './App.css';
import { useLocalState } from './components/hooks'
import BuahDua from './components/buahdua';

export const FruitContext = createContext()

function App() {
  const [buah, setBuah] = useLocalState('buahloc')
  return (
    <div className="App">
      <FruitContext.Provider value={[buah,setBuah]}>
        <header className="App-header">
          <div>
            Buah: {buah}
          </div>
          <div style={{display:'flex'}}>
            <button onClick={() => setBuah('Pisang')}>Pisang</button>
            <button onClick={() => setBuah('Apel')}>Apel</button>
          </div>
          <BuahDua />
        </header>
      </FruitContext.Provider>
    </div>
  );
}

export default App;
