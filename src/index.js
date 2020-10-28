import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DescriptionAll from './Main/descriptionAll.jsx';

const description = <DescriptionAll />;

ReactDOM.render(
  <React.StrictMode>
    <App description={description} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
