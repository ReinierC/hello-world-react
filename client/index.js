import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Apple from './components/App.jsx';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(document.getElementById('app'), <App />);