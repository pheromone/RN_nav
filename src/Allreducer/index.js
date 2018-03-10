import { combineReducers } from 'redux';
import TabNavigatorReducer from './TabNavigatorReducer';
import FirstPageReducer from './FirstPageReducer';
import SecondPageReducer from './SecondPageReducer';
const reducers = combineReducers({
    TabNavigatorReducer,
    FirstPageReducer,
    SecondPageReducer,
});
export default  reducers;