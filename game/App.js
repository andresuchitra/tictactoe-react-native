import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import tictactoeReducer from './store/reducer.js'

const store = createStore(tictactoeReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
