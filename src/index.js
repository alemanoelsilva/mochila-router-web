import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/router';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <App />
), document.getElementById('root'));

serviceWorker.unregister();
