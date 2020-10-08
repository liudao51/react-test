import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventBindApp from './components/event-bind-app';
import AntdMobileApp from './components/antd-mobile-app';
import PropsDefaultApp from './components/props-default-app';
import RouterApp from './components/router-app';

ReactDOM.render(
    <RouterApp/>,
    document.getElementById('root')
);
