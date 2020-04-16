import React, { useContext } from 'react';
import { useLocalState } from './hooks';

// context
// import { FruitContext } from '../App';

const BuahDua = () => {
    //context
    // const [buahdua, setBuahdua] = useContext(FruitContext)

    const [buahdua, setBuahdua] = useLocalState('buahdualoc')
    return (
        <div>
            <div>
              Buah: {buahdua}
            </div>
            <div style={{display:'flex'}}>
              <button onClick={() => setBuahdua('Pisang')}>Pisang</button>
              <button onClick={() => setBuahdua('Apel')}>Apel</button>
            </div>
        </div>
      );
}

export default BuahDua