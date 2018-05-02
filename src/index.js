import { render } from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux';

import PizzasContainer from './containers/pizzas';
import App from './components/app';
import store from './store';

render(<Provider store={store}>
  {/* <Pizzas /> is our redx component not react component */}
  <PizzasContainer />
</Provider>,
  document.getElementById('app')
);
