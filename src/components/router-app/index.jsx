import React from 'react';
import {BrowserRouter, NavLink, Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';
import About from './about';
class RouterApp extends React.Component {
    render() {
        return (
            /*把需要进行路由管理的页面放到BrowserRouter标签中，以便调用浏览器的history对象（含页面前进、页面后退、页面替换等功能*/
            <BrowserRouter>
            <div className="App" style={{margin: 20}}>
                <div className="link-head">
                    {/* 把点击链接<a>标签换成<NavLink>标签 */}
                    <NavLink to="/home">home</NavLink>
                    <NavLink to="/about">about</NavLink>
                </div>
                <div className="link-content">
                    {/* 把需要切换显示的前端路由组件配置放入Switch标签中 */}
                    <Switch>
                        {/* 注册前端路由格式为：<Route path="/about" component={About} /> */}
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        {/* 注意：因为Switch是从上到下匹配的，所以Redirect一定要放在Switch的最后一个匹配位置上 */}
                        <Redirect to="/about"/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
    }
}
export default RouterApp;


