import React from 'react';
import Counter from "../counter/counter";
import Message from "../message/message";
import store from "../../redux/store";
import {Provider} from 'react-redux';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div className="app-main">
                    {/*
                        //调用this.props.store.getState().xxx获得store中的值（即相当于react中的this.state.xxx）
                        //调用this.props.store.dispatch更新store中的值（即相当于react中的this.setState({xxx:aaa})）
                    */}
                    <Counter />
                    <Message />
                </div>
            </Provider>
        );
    }
}

export default App;
