import React from 'react';
import ReactDOM from 'react-dom';
import './asstes/css/index.css';
import App from './containers/App';

import axios from './utils';
React.Component.prototype.http = axios;

ReactDOM.render(<App />, document.getElementById('root'));
