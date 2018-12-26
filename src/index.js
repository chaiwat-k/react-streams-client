import React from 'react';
import ReactDOM from 'react-dom';
import env from './config/env';
import App from './components/App';

ReactDOM.render(
    <App env={env} />,
    document.querySelector('#root')
);