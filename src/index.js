import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes';
import configureStore from './store/configureStore';
import MainContainer from './components/MainContainer'
import './styles/styles.scss'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContainer>
        <AppRouter />
      </MainContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);