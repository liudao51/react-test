import React from 'react';
import PropTypes from 'prop-types';

class PropsDefault extends React.Component {
    render() {
        return (
            <div>
                <PropsDetail name={"张三"}/>
                <PropsDetail2 name={"李四"}/>
            </div>
        );
    }
}

//TODO：把defaultProps,propTypes定义为组件类的外部属性
class PropsDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            </div>
        );
    }
}
PropsDetail.defaultProps = {age: 18}

PropsDetail.propTypes = {
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
}


//TODO：把defaultProps,propTypes定义为static静态属性
class PropsDetail2 extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {age: 19}

    static propTypes = {
        age: PropTypes.number.isRequired,
        sex: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            </div>
        );
    }
}


export default PropsDefault;
