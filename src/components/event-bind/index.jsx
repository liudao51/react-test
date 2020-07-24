import React from 'react';

class EventBind extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tips: '我是tips初始值'
        };

        //点击事件2
        this.handleClick2 = this.handleClick2.bind(this);

        //点击事件5
        this.handleClick5 = (e) => {
            console.log(this);
            console.log(e);
            this.setState({
                tips: '我是tips改变后的值5'
            });
        }
    }

    //点击事件1
    handleClick1(e) {
        console.log(this);
        console.log(e);
        this.setState({
            tips: '我是tips改变后的值1'
        });
    }

    //点击事件2
    handleClick2(e) {
        console.log(this);
        console.log(e);
        this.setState({
            tips: '我是tips改变后的值2'
        });
    }

    //点击事件3
    handleClick3(e) {
        console.log(this);
        console.log(e);
        this.setState({
            tips: '我是tips改变后的值3'
        });
    }

    //点击事件4
    handleClick4 = (e) => {
        console.log(this);
        console.log(e);
        this.setState({
            tips: '我是tips改变后的值4'
        });
    }

    render() {
        return (
            <div>
                <button title={"点击我1"} onClick={this.handleClick1.bind(this)}>点击我1</button>
                <button title={"点击我2"} onClick={this.handleClick2}>点击我2（推荐）</button>
                <button title={"点击我3"} onClick={(e) => this.handleClick3(e)}>点击我3</button>
                <button title={"点击我4"} onClick={this.handleClick4}>点击我4</button>
                <button title={"点击我5"} onClick={this.handleClick5}>点击我5(推荐)</button>
                <br/><br/>
                <span>{this.state.tips}</span>
            </div>
        );
    }
}

export default EventBind;
