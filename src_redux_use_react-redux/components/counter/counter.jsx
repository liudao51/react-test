import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {counterDecrementAction, counterIncrementAction} from '../../redux/actions';

class Counter extends React.Component {

    //把react原生的this.state,this.setState({newState对象})转换为通过外部props属性对象(this.props.state,this.props.dispatch({action对象}))
    static propTypes = {
        counterCount: PropTypes.number.isRequired,
        counterIncrementDispatch: PropTypes.func.isRequired,
        counterDecrementDispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    //加
    increment = () => {
        //下拉列表选择的number值
        const number = this.numberSelect.value * 1;
        //调用this.props.dispatch更新store中的值（即相当于react中的this.setState({xxx:aaa})）
        this.props.counterIncrementDispatch(number);
    }

    //减
    decrement = () => {
        const number = this.numberSelect.value * 1;
        this.props.counterDecrementDispatch(number);
    }

    //异步加
    asyncIncrement = () => {
        const number = this.numberSelect.value * 1;
        setTimeout(() => {
            this.props.counterIncrementDispatch(number);
        }, 1000);
    }

    //渲染
    render() {
        //调用this.props.state().xxx获得store中的值（即相当于react中的this.state.xxx）
        const count = this.props.counterCount;

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


//生成容器组件：通过redux的connect方法连接store与用户组件(即使用户组能够与store进行通讯)
const mapStateToProps = (state, ownProps) => ({
    counterCount: state.counterCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    counterIncrementDispatch: (number) => dispatch(counterIncrementAction(number)),
    counterDecrementDispatch: (number) => dispatch(counterDecrementAction(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

