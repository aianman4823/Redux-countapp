import {INCREMENT, DECREMENT} from '../utils';

const initialState={value: 0}//状態の初期値を定義

const count=(state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return {value: state.value+1};
        case DECREMENT:
            return {value: state.value-1};
        default:
            return state;
    }
}

export default count;