import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import Products from './pages/products';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
