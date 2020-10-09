import React from 'react';
import Counter from "../counter";
import Message from "../message";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-main">
                <Counter />
                <Message />
            </div>
        );
    }
}

export default App;
