import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import configureStore from './store';
import 'antd/dist/antd.css';

import Home from './pages/home';
import globalStyles from './assets/styles/global';

const { store } = configureStore();

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
