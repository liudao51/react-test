import React from 'react';
import './index.css'
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {messageSendMsgAction} from '../../redux/actions';

class Message extends React.Component {

    //把react原生的this.state,this.setState({newState})转换为通过外部props属性对象(this.props.state,this.props.dispatch({action}))来处理状态数据
    static propTypes = {
        messageAllMsg: PropTypes.array.isRequired,
        messageSendMsgDispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    //发送消息
    sendMsg = (msg) => {
        const newMsg = this.msgInput.value;
        this.msgInput.value = ''; //获得值后清空消息输入框
        this.msgInput.focus();
        //调用this.props.store.dispatch更新store中的值（即相当于react中的this.setState({xxx:aaa})）
        this.props.messageSendMsgDispatch(newMsg);
    }

    //渲染
    render() {
        const allMsg = this.props.messageAllMsg;

        return (
            <div className="message">
                <h2>消息中心：</h2>
                <input className="message-input" type="text" ref={(input) => this.msgInput = input}/>
                <button onClick={this.sendMsg}>发送</button>
                <ul className="message-list">
                    {
                        allMsg.map((msg, index) => {
                                return (<li key={index}>{msg}</li>)
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

//生成容器组件：通过redux的connect方法连接store与用户组件(即使用户组能够与store进行通讯)
const mapStateToProps = (state, ownProps) => ({
    messageAllMsg: state.messageAllMsg
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    messageSendMsgDispatch: (msg) => dispatch(messageSendMsgAction(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
