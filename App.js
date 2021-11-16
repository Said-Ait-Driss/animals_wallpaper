import React from 'react';
// import Home from './screens/home.js';
import Navigation from "./router/drawerRouter";
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import saidRootReducer from "./store/reducers/rootReducer";

const store = createStore( saidRootReducer , applyMiddleware (thunk) );

export default function App() {
  return (
    <Provider store = { store }>
      <Navigation />
    </Provider>
  );
}


