import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'antd/dist/antd.css';
import Home from './pages/home';

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
