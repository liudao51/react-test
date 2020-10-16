/**
 * 文件说明:
 1. reducers用来根据旧的状态preState,以及action（里面包含action.type,action.data）来更新store中的state的
 */
import {combineReducers} from 'redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT, MESSAGE_SEND_MSG} from './action-types';

//管理counterCount状态（【方法名需要跟要管理的状态同名】，即count）
const initCounterCount = 0;

/**
 * @param preState: 旧的store中存储的状态。
 * @param action: action（里面包含action.type,action.data）为即将要用于更新store中的state的。
 * @return nextState: 新的state。
 */
function counterCount(preState = initCounterCount, action) {
    let nextState = preState; //新的状态
    switch (action.type) {
        case COUNTER_INCREMENT:
            nextState = preState + action.data; //不能直接修改preState中的字段，而是返回新state对象。
            break;
        case COUNTER_DECREMENT:
            nextState = preState - action.data;
            break;
        default:  //遇到未知的action时，一定要返回旧的preState
            nextState = preState;
            break;
    }

    console.log('reducers.count()--->', 'preState=', preState, ',action=', action, ',nextState=', nextState);
    return nextState;  //返回新的状态
}

//管理messageAllMsg状态（【方法名需要跟要管理的状态同名】，即allMsg）
const initMessageAllMsg = [];

function messageAllMsg(preState = initMessageAllMsg, action) {
    let nextState = preState; //新的状态
    switch (action.type) {
        case MESSAGE_SEND_MSG:
            nextState = [action.data, ...preState];
            break;
        default:
            nextState = preState;
            break;
    }

    console.log('reducers.allMsg()--->', 'preState=', preState, ',action=', action, ',nextState=', nextState);
    return nextState;
}

//合并多个reducer
export default combineReducers({
    counterCount,
    messageAllMsg
});
