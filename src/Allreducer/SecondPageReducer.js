/**
 * Created by shaotingzhou on 2018/3/6.
 */
import {handleActions} from 'redux-actions';
const initialState = {
    xxx:0
};
export default handleActions({
    SECOND:(state,action)=>{
        return {
            ...state,
            xxx:2
        }

    },
},initialState);