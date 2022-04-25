import { createStore, combineReducers } from 'redux';
import commonReducer from '../reducers';
const rootReducer = combineReducers(
{ state: commonReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;