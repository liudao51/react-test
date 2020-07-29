import React from 'react';
import { Button } from 'antd-mobile';

class AntdMobile1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button type={"primary"}>点击我</Button>
            </div>
        );
    }
}

export default AntdMobile1;
