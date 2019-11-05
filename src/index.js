import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LastLocationProvider } from "react-router-last-location";
import configureStore, { history } from 'store';
import App from 'containers/App';

import './assets/css/reset.scss';
import './assets/css/fonts.css';
import './assets/css/main.css';

const store = configureStore({}, history);

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <LastLocationProvider>
      <App />
    </LastLocationProvider>
  </ConnectedRouter>
</Provider>
, document.getElementById('root'));

