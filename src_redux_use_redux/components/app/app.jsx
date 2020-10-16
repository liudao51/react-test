import React from 'react';
import Counter from "../counter/counter";
import Message from "../message/message";
import './index.css';
import store from "../../../src/redux/store";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-main">
                {/*
                    //调用this.props.store.getState().xxx获得store中的值（即相当于react中的this.state.xxx）
                    //调用this.props.store.dispatch更新store中的值（即相当于react中的this.setState({xxx:aaa})）
                */}
                <Counter state={store.getState()} dispatch={store.dispatch}/>
                <Message state={store.getState()} dispatch={store.dispatch}/>
            </div>
        );
    }
}

export default App;
