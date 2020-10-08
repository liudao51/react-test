import React from 'react';
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        //初始化值
        this.state = {
            count: 0
        }
    }

    //加
    increment = () => {
        //下拉列表选择的number值
        const number = this.numberSelect.value * 1;
        //旧的count值
        const count = this.state.count;
        //新的count值
        this.setState({count: count + number});
    }

    //减
    decrement = () => {
        const number = this.numberSelect.value * 1;
        const count = this.state.count;
        this.setState({count: count - number});
    }

    //异步加
    asyncIncrement = () => {
        const number = this.numberSelect.value * 1;
        const count = this.state.count;
        setTimeout(() => {
            this.setState({count: count + number});
        }, 1000);
    }

    //渲染
    render() {
        const {count} = this.state;

        return (
            <div className="counter">
                <h2>计数器：</h2>
                <p> the count is {count}</p>
                <select className="number-select" ref={
                    (select) => {
                        this.numberSelect = select;
                    }
                }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button className="counter-button" onClick={this.increment}>加</button>
                <button className="counter-button" onClick={this.decrement}>减</button>
                <button className="counter-button" onClick={this.asyncIncrement}>异步加</button>
            </div>
        );
    }
}

export default Counter;
