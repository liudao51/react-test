import React from 'react';
import './index.css'

class Message extends React.Component {
    constructor(props) {
        super(props);

        //初始化值
        this.state = {
            allMsg: []
        }
    }

    //发送消息
    sendMsg = (msg) => {
        const newMsg = this.msgInput.value;
        this.msgInput.value = ''; //获得值后清空消息输入框
        this.msgInput.focus();

        this.setState({
            allMsg: [newMsg, ...this.state.allMsg]
        });
    }

    //渲染
    render() {
        const {allMsg} = this.state;

        return (
            <div className="message">
                <h2>消息中心：</h2>
                <input className="message-input" type="text" ref={(input) => this.msgInput = input}/>
                <button onClick={this.sendMsg}>发送</button>
                <ul className="message-list">
                    {
                        allMsg.map((msg, index) =>
                            <li key={index}>{msg}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Message;
