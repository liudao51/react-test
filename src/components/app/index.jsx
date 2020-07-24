import React from 'react';
import logo from './img/logo.svg';
import './cjs/index.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <img src={logo} />
                <sapan>我是app</sapan></div>
        );
    }
}
class App2 extends React.Component {
    render(){
        return (
            <div>我是App2</div>
        );
    }
}

export {App2};
export default App;
