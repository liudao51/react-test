import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import store from './redux/store';

function render() {
    return ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

//初始化渲染
render();

//当store中状态变化时，重新渲染
store.subscribe(() => {
    console.log('我重新渲染了整个ReactDOM...');
    return render();
})
