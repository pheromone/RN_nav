import {handleActions} from 'redux-actions';
const initialState = {
    zglNum:0
};
export default handleActions({
    ADD:(state,action)=>{
        // alert(state.zglNum)
        return {
            ...state,
            zglNum:state.zglNum + 1,
            secondState:'iOS'
        }

    },
    SUB:(state,action)=>{
        return {
            ...state,
            zglNum:state.zglNum - 1,
            secondState:'Android'
        }

    }
},initialState);