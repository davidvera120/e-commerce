import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppRoutes} from './routes/AppRoutes';
import "./Global.scss";
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <AppRoutes/>
    </Provider>
  </React.StrictMode>
);

