/**
 * 文件说明:
 1. action 来描述“发生了什么”（action的格式为：{type: '', data:'',data2:''}, 其中的type为约定名字, data,data2为自定义名字）
 */
import {COUNTER_INCREMENT, COUNTER_DECREMENT, MESSAGE_SEND_MSG} from './action-types';

export const counterIncrementAction = (number) => ({type: COUNTER_INCREMENT, data: number});

export const counterDecrementAction = (number) => ({type: COUNTER_DECREMENT, data: number});

export const messageSendMsgAction = (msg) => ({type: MESSAGE_SEND_MSG, data: msg});
