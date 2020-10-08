import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter/index';
import Message from './components/message/index';
import './index.css';

ReactDOM.render(
    <div className="app-main">
        <Counter />
        <Message />
    </div>,
    document.getElementById('root')
);
