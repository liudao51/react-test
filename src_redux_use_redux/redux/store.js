/**
 * 文件说明：
 1. store 就是把action, reducer 联系到一起的对象。再次强调一下, Redux应用只有一个单一的store。当需要拆分数据处理逻辑时，你应该使用reducer组合(即通过combineReducers把多个reducer的合并为单一的reducer数组),而不是创建多个store。

 2. store 有以下职责：
 1)维持应用的state，即把组件的state保存到store对象中(相当于第三方存储，如redis)。
 2)提供getState() 方法获取 state，如：redux的this.props.store.getState().number相当于react的this.state.number, 是用来获取(读)状态的。
 3)提供dispatch(action) 方法更新state，如：redux的this.props.store.dispatch(increment(number)), 相当于react的this.setState({number:number})，是用来更新(写)状态的。
 4)通过subscribe(listener) 注册监听器。
 5)通过subscribe(listener) 返回的函数用于注销监听器，如：let unsubscribe = subscribe(listener);  unsubscribe(); 。

 */
import {createStore} from 'redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducers, composeWithDevTools());
