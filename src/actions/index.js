import {INCREMENT,DECREMENT} from '../utils';


//プラスする処理名前
export const increment=()=>({
    type:INCREMENT
})

//マイナスする処理の名前
export const decrement=()=>({
    type:DECREMENT
})