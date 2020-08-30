import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DescriptionAll from './patches_description/descriptionAll.jsx';
import patches from './patches_description/patches.jsx';

const description = <DescriptionAll />;

const patchList = patches;

ReactDOM.render(
  <React.StrictMode>
    <App patchList={patchList} description={description} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
