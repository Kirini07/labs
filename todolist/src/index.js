import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);