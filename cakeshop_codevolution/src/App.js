import React from 'react';
import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import HooksCakeContainer from './components/hooksCakeContainer';
import HooksIceCreamContainer from './components/hooksIceCreamContainer';
import HooksNewCakeContainer from './components/hooksNewCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <ItemContainer cake />
          <ItemContainer />
          <HooksIceCreamContainer />
          <HooksCakeContainer />
          <CakeContainer />
          <HooksNewCakeContainer /> */}
          <UserContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
